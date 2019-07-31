
 const ArrayToBase64=( bufferdata )=> {
    var binary = '';
    var bytes = new Uint8Array( bufferdata );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }

    return window.btoa( binary );
  }

  export default ArrayToBase64;