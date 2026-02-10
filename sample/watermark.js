// Watermark verifier: computes SHA-256 of the page and compares to embedded proof
(function(){
    async function sha256hex(str){
        const enc = new TextEncoder();
        const data = enc.encode(str);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b=>b.toString(16).padStart(2,'0')).join('');
    }

    function createBadge(author){
        const css = `#watermark-badge{position:fixed;right:12px;bottom:12px;background:rgba(0,0,0,0.6);color:#fff;padding:6px 10px;border-radius:6px;font-family:Arial,sans-serif;font-size:12px;cursor:pointer;z-index:9999;opacity:0.85}`;
        const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
        const b = document.createElement('div'); b.id = 'watermark-badge'; b.textContent = `© ${author}`;
        b.title = 'Click to view provenance proof';
        document.body.appendChild(b);
        return b;
    }

    async function init(){
        try{
            const meta = document.getElementById('watermark-meta');
            if(!meta) return;
            const proof = JSON.parse(meta.getAttribute('data-proof'));
            const badge = createBadge(proof.author || 'Unknown');
            badge.addEventListener('click', async ()=>{
                const page = document.documentElement.outerHTML;
                const computed = await sha256hex(page);
                const ok = (computed === proof.sha256);
                const msg = ['Provenance proof', 'Author: '+proof.author, 'Repo: '+proof.repo, 'Branch: '+proof.branch, 'Recorded date: '+proof.date, '', 'Recorded SHA-256: '+proof.sha256, 'Computed SHA-256: '+computed, '', 'Match: '+(ok? 'YES' : 'NO')].join('\n');
                if(ok){
                    console.info(msg);
                    alert('Proof verified in console. (Match)');
                } else {
                    console.warn(msg);
                    alert('Proof does NOT match. See console for details.');
                }
            });
        }catch(e){console.error('watermark init error', e)}
    }

    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
