		var body = document.getElementById('main');

				var mainDiv = document.createElement('div');
				mainDiv.setAttribute('id', 'content');
				mainDiv.setAttribute('class', 'content-post');
				body.appendChild(mainDiv);
						
					var h1 = document.createElement('h1');
					var h1Text = document.createTextNode('Judul Post');
					h1.appendChild(h1Text);
					mainDiv.appendChild(h1);

						var span = document.createElement('span');
						var spanText = document.createTextNode('Published on 12 May 2016');
						span.appendChild(spanText);
						mainDiv.appendChild(span);
					
					var paragraf = document.createElement('p');
					var paragrafText = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
					paragraf.appendChild(paragrafText);
					mainDiv.appendChild(paragraf);

				var button = document.createElement('button');
				var buttonText = document.createTextNode('Share this Post');
				button.appendChild(buttonText);

				button.addEventListener('click', function() {
  				alert('Share Berhasil');
				});
				mainDiv.appendChild(button);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				var mainDiv = document.createElement('div');
				mainDiv.setAttribute('id', 'content');
				mainDiv.setAttribute('class', 'content-post');
				body.appendChild(mainDiv);
						
					var h1 = document.createElement('h1');
					var h1Text = document.createTextNode('Judul Post 2');
					h1.appendChild(h1Text);
					mainDiv.appendChild(h1);

						var span = document.createElement('span');
						var spanText = document.createTextNode('Published on 13 May 2016');
						span.appendChild(spanText);
						mainDiv.appendChild(span);
					
					var paragraf = document.createElement('p');
					var paragrafText = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
					paragraf.appendChild(paragrafText);
					mainDiv.appendChild(paragraf);

				var button = document.createElement('button');
				var buttonText = document.createTextNode('Share this Post');
				button.appendChild(buttonText);

				button.addEventListener('click', function() {
  				alert('Share Berhasil');
				});
				mainDiv.appendChild(button);
															
									

						


	

