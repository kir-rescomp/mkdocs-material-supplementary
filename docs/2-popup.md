<button class="md-button" onclick="document.getElementById('myModal').style.display='block'">
  Click Me
</button>

<div id="myModal" style="display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5);">
  <div style="position:fixed; right:20px; top:20px; width:400px; height:80%; background-color:#fefefe; border:1px solid #888; border-radius:8px; display:flex; flex-direction:column;">
    <div style="padding:20px; border-bottom:1px solid #ddd; display:flex; justify-content:space-between; align-items:center;">
      <h2 style="margin:0;">Popup Content</h2>
      <span onclick="document.getElementById('myModal').style.display='none'" style="color:#aaa; font-size:28px; font-weight:bold; cursor:pointer; line-height:1;">&times;</span>
    </div>
    <div style="flex:1; overflow-y:auto; padding:20px;">
      <p>Your content here...</p>
      <p>Line 1</p>
      <p>Line 2</p>
      <p>Line 3</p>
      <p>
        This is a test system to check the popup. 
        It shouldt trigger a popup in the middle of the page
        Repeat the first cat a few more times, using the Up Arrow for convenience, and perhaps add a few more arbitrary echo commands, until your text document is so large that it won’t all fit in the terminal at once when you use cat to display it. In order to see the whole file we now need to use a different program, called a pager (because it displays your file one “page” at a time). The standard pager of old was called more, because it puts a line of text at the bottom of each page that says “–More–” to indicate that you haven’t read everything yet. These days there’s a far better pager that you should use instead: because it replaces more, the programmers decided to call it less
        This is a test system to check the popup. 
        It shouldt trigger a popup in the middle of the page
        Repeat the first cat a few more times, using the Up Arrow for convenience, and perhaps add a few more arbitrary echo commands, until your text document is so large that it won’t all fit in the terminal at once when you use cat to display it. In order to see the whole file we now need to use a different program, called a pager (because it displays your file one “page” at a time). The standard pager of old was called more, because it puts a line of text at the bottom of each page that says “–More–” to indicate that you haven’t read everything yet. These days there’s a far better pager that you should use instead: because it replaces more, the programmers decided to call it less
      </p>

    </div>
  </div>
</div>

<button class="md-button" onclick="document.getElementById('myModal-3').style.display='block'">
  Change-Background-Colour
</button>

<div id="myModal-3" style="display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5);">
  <div style="background-color:#e3f2fd; margin:15% auto; padding:20px; border:1px solid #888; width:80%; max-width:600px; border-radius:8px;">
    <span onclick="document.getElementById('myModal').style.display='none'" style="color:#aaa; float:right; font-size:28px; font-weight:bold; cursor:pointer;">&times;</span>
    <h2>Popup Content</h2>
    <p>Your content here...</p>
  </div>
</div>