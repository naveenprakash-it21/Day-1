const channel = {
    title: "Cyberdude",
    subscribe(){
        console.log(this); // going to object
    },
};

channel.share=function(){
    console.log(this);
}

channel.subscribe();