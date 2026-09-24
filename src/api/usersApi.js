const baseUrl = 'https://wvxsshmemqotouxkzhqe.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_YakXuX-44-KSSK3jvxe02Q__s_3zhC1';

export async function fetchUsers() {
    const response = await fetch(baseUrl, {
        headers: {
            'apikey': apiKey,
        }
    });
    const data = await response.json();
    return data;
}