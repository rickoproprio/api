async function tel(request) {
  try {
    const response = await fetch(
      `http://br3.bronxyshost.com:3015/tel2/${request}/teste8`
    );
    console.log(response);
    const data = await response.resultado.json();
    console.log(data);
    if (data && data.resultado) {
      const resultado = data.resultado
        .replace(/\n$/, "")
        .replace(/\*|`/g, "")
        .trim();
      return <>{response.json({ resultado: resultado })}</>
    } else {
      return <>{response.json({ resposta: "API demorou para responder" })}</>
    }
  } catch (error) {
    return <><h1>Deu merda</h1></>
  }
}

export default tel;
