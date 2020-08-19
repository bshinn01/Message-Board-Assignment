// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   username = document.getElementById("formUsername").value
   caption = document.getElementById("formCaption").value
   imgLocation = document.getElementById("formImg").value
   if(imgLocation == "woofer")
   {
      imgLocation = fileLocations.woofer
   }
   else if(imgLocation == "clouds")
   {
      imgLocation = fileLocations.clouds
   }
   else if(imgLocation == "pupper")
   {
      imgLocation = fileLocations.pupper
   }
   else if(imgLocation == "snek")
   {
      imgLocation = fileLocations.snek
   }
   // Pass values to addNewPost()
   addNewPost(username,caption,imgLocation)
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   var div = document.createElement("div");
   var divClass = document.createAttribute("class");
   divClass.value = "post";
   div.setAttributeNode(divClass);
   
   // Create a span for the user
   var span = document.createElement("span");
   var spanText = document.createTextNode(username);
   span.appendChild(spanText);
  
   // Create image element
   var img = document.createElement("img");
   var imgSrc = document.createAttribute("src");
   var imgAlt = document.createAttribute("alt");
   imgSrc.value = imgLocation;
   imgAlt .value = caption;
   img.setAttributeNode(imgAlt);
   img.setAttributeNode(imgSrc);

   // Create overlay element
   var overlay = document.createElement("div");
   var overlayText = document.createTextNode(caption)
   overlay.appendChild(overlayText)
   overlayClass = document.createAttribute("class");
   overlayClass.value = "postOverlay";
   overlay.setAttributeNode(overlayClass);
   overlay.style = "opacity:0"
   
   // Add all child elements (order matters)
   div.appendChild(span);
   div.appendChild(img);
   div.appendChild(overlay);
   
   // Add event listeners to post
   overlay.onmouseover = function(){overlay.style = "opacity:1"};
   overlay.onmouseleave = function(){overlay.style = "opacity:0"}
   
   // Add post element to post list
   postList.appendChild(div);
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};