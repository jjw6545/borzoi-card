export default async function handler(request, res) {

    const roster = [
        {
            "image": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B700%2C759%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F05%2Fborzoi-is-big-tiktok-535986771-2000.jpg",
            "topLabel": "Dog Facts",
            "bottom": "More Info",
            "detail": "Real Facts"
        },
        {
            "image": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B700%2C759%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F05%2Fborzoi-is-big-tiktok-535986771-2000.jpg",
            "topLabel": "Dog Facts",
            "bottom": "More Info",
            "detail": "Real Facts"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(dog-roster);
  }
  //