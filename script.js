function tampilkanNota() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telp = document.getElementById("telp").value;
    const alamat = document.getElementById("alamat").value;
    const menu = document.getElementById("menu").value;
    const tanggal = document.getElementById("tanggal").value;
  
    document.getElementById("notaNama").innerText = nama;
    document.getElementById("notaEmail").innerText = email;
    document.getElementById("notaTelp").innerText = telp;
    document.getElementById("notaAlamat").innerText = alamat;
    document.getElementById("notaMenu").innerText = menu;
    document.getElementById("notaTanggal").innerText = tanggal;
  }
  