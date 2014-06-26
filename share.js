$(document).ready(function(){

  var disqus_shortname = 'pairup';
  var mainDiv = document.getElementsByTagName('div')[0];

  var shareLink = '<br><p>All done? (Or close enough?) <a href="javascript:loadShare()"><strong>Share what you made with everyone!</a></strong></p>';
  mainDiv.innerHTML += shareLink;

  function loadShare() {
    var shareHTML = '<p>To make a public URL, you can copy your HTML into jsbin.com and copy that URL. Or, if its a few files, you can <a href="https://googledrive.com/host/0B716ywBKT84AMXBENXlnYmJISlE/GoogleDriveHosting.html">host on Google Drive</a>. Then, post in the comments below with a link to it. Or tweet it at <a href="http://twitter.com/GDIsf">@GDIsf</a>. Or both! </p>';

    var shareComments = document.createElement('div');
    shareComments.id = 'disqus_thread';
    mainDiv.innerHTML += shareHTML;
    mainDiv.appendChild(shareComments);
           
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }

  function showSolution() {
    if (confirm('You surrrrre?')) {
      document.getElementById('solution').style.display = 'block';
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  $("#showSolution").on("click", showSolution);
});