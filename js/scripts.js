var paragraph = [];
var i = 0;
var j = 1;
var count = {};
$(function() {
  $("form").submit(function() {
   paragraph = $("textarea").val().toLowerCase().split(/[\s,.!?]+/).sort();
   alert(paragraph);

   paragraph.forEach(function(word) {
     count[word] = (count[word] || 0) + 1;
   });
   alert(Object.keys(count).join());
   alert(Object.values(count));
    //  if(paragraph[i] === paragraph[j]) {
    //     i++;
    //     j++;
    //     count++;
    //   } else {
    //     $("ul").append("<li>" + word + " " + count + "</li>");
    //     count = 1;
    //   }
    //
    // });
    event.preventDefault();
  });
});
