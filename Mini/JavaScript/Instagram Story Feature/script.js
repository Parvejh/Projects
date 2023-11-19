const stories = document.querySelector("#stories")
let storyTime = 1
var arr = [
    {
        dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
    },
    {
        dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1583766395091-2eb9994ed094?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
    },
    {
        dp:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
    },
    {
        dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
    }
]; // array


var clutter =""
//we can pass element & index both ; index of the current element
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
})

stories.innerHTML = clutter;


stories.addEventListener("click", function(dets){
    // print(arr[dets.target.id].story) //dets.target return the target element..i.e the image > .id returns the id of the target element which is 0,1,2,3 ..so on....we use this to search for the element in the array & then gets the story from that array of objects
    let value = arr[dets.target.id].story;

    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${value})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
        startBar();
    },storyTime*1000)
})

function startBar(){
    document.querySelector("#bar-fill").style.animation = `bar ${storyTime}s linear`;
}

// startBar();