		var mainForm = document.getElementById('main-form');

		mainForm.addEventListener('submit', function(event) {

		var nama = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		var confpassword = document.getElementById("confpassword").value;
		var email = document.getElementById("email").value;
		var confemail = document.getElementById("confemail").value;

	
		if(nama == ""){
			event.preventDefault();
			alert ('Username Tidak Boleh Kosong!!');
		}
		else if(password == "" ){
			event.preventDefault();
			alert ('Password Tidak Boleh Kosong!!');
		}
		else if(confpassword==""){
			event.preventDefault();
			alert ('Konfirmasi Password Tidak Boleh Kosong!!');
		}
		else if(email == ""){
			event.preventDefault();
			alert ('Email Tidak Boleh Kosong');
		}
		else if(confemail==""){
			event.preventDefault();
			alert ('Konfirmasi Email Tidak Boleh Kosong');
		}
		else if(password !== confpassword) {
			event.preventDefault();
			alert ('Cek Kembali untuk PASSWORD harus SAMA !!');
		}
		else if(email!==confemail) {
			event.preventDefault();
			alert ('Cek Kembali untuk EMAIL harus SAMA !!');
		}
		else if(nama != "" && password!="" && confpassword !="" && email !="" && confemail !=""){
			alert('submit sukses!!');
		}
		
		});
	