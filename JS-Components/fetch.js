/////// Seperat Function für Fetch funktioniert (noch) nicht

let page = 0;

export default async function fetchCats() {
  const url = `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&page=${page}&api_key=live_80QHtDPhcDJgMWfVMivtOm4RkbsEB7Op11NNA8NkImpLpcuUvYoyb12eDy5cLmnb`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  return data;
}
