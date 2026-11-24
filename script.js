import { createClient }
from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://jmrgwyzpxvleapwevqvb.supabase.co';
const supabaseKey = 'sb_publishable_osUr1Djmc-U1xAFDutgItg_bjIQsB95';

const supabase =
    createClient(supabaseUrl, supabaseKey);

document
    .getElementById('hentElever')
    .addEventListener('click', hentElever);

async function hentElever() {

    const { data, error } =
        await supabase
            .from("elev")
            .select("*");

    if (error) {
        alert(error.message);
        return;
    }

    const utdata =
        document.getElementById("utdata");

    utdata.innerHTML = "";

    for (let elev of data) {

        utdata.innerHTML += `
            <p>${elev.navn}</p>
        `;
    }
}
