var testimonials = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    quote: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    imageLink: "images/image-tanya.jpg"
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    quote: "“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    imageLink: "images/image-john.jpg"
  },
];

var i = 0;

$(".next-icon").click(() => {
  if (i < testimonials.length - 1)  {
    i++;
    $(".quote").html(testimonials[i].quote);
    $(".name").html(testimonials[i].name);
    $(".role").html(testimonials[i].role);
    $(".person-image").attr("src", testimonials[i].imageLink);
  } else if (i === testimonials.length - 1) {
    i = 0;
    $(".quote").html(testimonials[i].quote);
    $(".name").html(testimonials[i].name);
    $(".role").html(testimonials[i].role);
    $(".person-image").attr("src", testimonials[i].imageLink);
  }
});

$(".prev-icon").click(() => {
  if (i === 0) {
    i = testimonials.length - 1;
    $(".quote").html(testimonials[i].quote);
    $(".name").html(testimonials[i].name);
    $(".role").html(testimonials[i].role);
    $(".person-image").attr("src", testimonials[i].imageLink);
  } else {
    i--;
    $(".quote").html(testimonials[i].quote);
    $(".name").html(testimonials[i].name);
    $(".role").html(testimonials[i].role);
    $(".person-image").attr("src", testimonials[i].imageLink);
  }
});
