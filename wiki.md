# Crawler Sintegra

[Cadastro Centralizado de Contribuinte (CCC)](https://dfe-portal.svrs.rs.gov.br/Cte/Ccc)

## Possible frameworks

[Scrapy](https://scrapy.org/) -> made with Python

[Cheerio](https://cheerio.js.org/) -> made with JS, and aready used :D

## List of states and codes

```html
<option value="12">AC</option>
<option value="27">AL</option>
<option value="13">AM</option>
<option value="16">AP</option>
<option value="29">BA</option>
<option value="23">CE</option>
<option value="53">DF</option>
<option value="32">ES</option>
<option value="52">GO</option>
<option value="21">MA</option>
<option value="31">MG</option>
<option value="50">MS</option>
<option value="51">MT</option>
<option value="15">PA</option>
<option value="25">PB</option>
<option value="26">PE</option>
<option value="22">PI</option>
<option value="41">PR</option>
<option value="33">RJ</option>
<option value="24">RN</option>
<option value="11">RO</option>
<option value="14">RR</option>
<option value="43">RS</option>
<option value="42">SC</option>
<option value="28">SE</option>
<option value="35">SP</option>
<option value="17">TO</option>
```

## First searchs

I got this curl searching on network traffic generated from the website... With this we can search information providing CNPJ and IE:

```
curl --request POST \
  --url https://dfe-portal.svrs.rs.gov.br/Cte/CccContribuinte \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data codUf=35 \
  --data codInscrMf=3007331000141 \
  --data tipoInscrMf=1 \
  --data codIe=120079527111 \
  --data ambiente=1
```

The curls provides a HTML as result of search. Now we have to translate the information to `json` and save it to a DB - I guess it's a good approuch.
