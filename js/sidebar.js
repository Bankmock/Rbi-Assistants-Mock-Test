

    
   
            
                   
                 
    function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var content = document.querySelector('.content');

  if (sidebar.style.right === '0px') {
    sidebar.style.right = '-250px'; // Hide the sidebar
    content.style.marginRight = '0';
  } else {
    sidebar.style.right = '0'; // Show the sidebar
    content.style.marginRight = '250px';
  }
}



  
