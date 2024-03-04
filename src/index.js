// // import React from "react";
// // import ReactDOM from "react-dom";


// // //capitalise the first letter of your component's name.
// // function Greeting(){
// //     return <h4>This is himank and this is my first component.</h4>;
// // }


// //ReactDOM.render(<Greeting />,document.getElementById("root"));
// import React from "react";
// import ReactDOM from "react-dom";


// //capitalise the first letter of your component's name.
// // const Greeting = ()=>{
// //     return React.createElement(
// //         "div",
// //         {},
// //          React.createElement("h1", {}, "Hello World"))
// // }
//  const Greeting = ()=>{
//      return (
//         <div>
//             <h1>Hello World</h1>
//             <h2>Himank Patidar</h2>
//             <p>i am king of this land</p>
//         </div>
//      )
//  }


// ReactDOM.render(<Greeting />,document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";

// //div/section/article(- u can use this also) fragment
// //class name is used instead class 
// // close every element
// // do not create div soup

// const Greeting = ()=>{
//     return (
// <React.Fragment>
//     	<div onClick="" className="">
//             <div></div>
//         </div>
// </React.Fragment>
//     )
// }


// // ReactDOM.render(<Greeting />,document.getElementById("root"));
// import React from "react";
// import ReactDOM from "react-dom";



// const Greeting = ()=>{
// return(
//     <div>
//         <Person></Person>
//         <Message />
//         <h1>Hello WOrls</h1>

//     </div>
// )    
// };
// const Person = ()=><h2>Himank PAtidar</h2>;
// const Message = () => <p>This is my message</p>;

// ReactDOM.render(<Greeting />,document.getElementById("root"));



// import React from "react";
// import ReactDOM from "react-dom/client";
// import './index.css';

// const BookList = ()=>{
//     return(
//         <section className="BookList">
//         <Book />
//         <Book />
//         <Book />
//      </section>
//     )
// }

// const Book = ()=>{
//     return(
//         <article className="book">
//             <Image />
//             <Author />
//             <BookName />

//         </article>
//     )
// }

// const Image = () =>{
//     return (
//     <img src="https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" 
//     alt=""
//      />
// )
// }

// //JSX CSS

// const Author = ()=><h2 style={{color : "#617d89", fontsize:"2rem"}}>James Clear</h2>;
// const BookName = ()=><h2>Atomic Habit</h2>



// ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import './index.css';

// function BookList(){
//     return(
//         <section className="booklist">
//             <Book />
//             <Book />
//         </section>
//     )
// }

// const author = "Paulo Coelho"

// const Book = ()=>{
//     const title = "The Alchemist";
//         return(
//             <article className="book">
//                 <img src="https://m.media-amazon.com/images/I/410llGwMZGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
//                 <h1>{title}</h1>
//                 <h2>{author}</h2>
//                 <h2>{author.toUpperCase()}</h2>
//             </article>
//         )
    

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);




//PROP


// import React from "react";
//  import ReactDOM from "react-dom/client";
//  import './index.css';

//     const author = "Paulo Coehlo";
//     const title = "The Alchemist"

//     const img = "https://m.media-amazon.com/images/I/410llGwMZGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"

//     function BookList(){
//         return (
//             <section className="booklist">
//                 <Book sale="20%" />
//                 <Book sale="15%" number={22}/>
//             </section>
//         );
//     }
//     const Book = (props)=>{
//         console.log(props);

//         return(
//         <article className="book">
//             <img src={img} />
//             <h1>{title}</h1>
//             <h4>{author}</h4>
//             <p>sale:{props.sale}</p>
//             <p>{props.number}</p>
//         </article>
//         );    
// }


//  ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);
//PROP


// import React from "react";
//  import ReactDOM from "react-dom/client";
//  import './index.css';

// const firstBook = {

//     img:'https://m.media-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
//     title:'The Power of Your Subconscious Mind',
//     author:'Joseph Murphy',
// };

// const secondBook = {
//     img:'https://m.media-amazon.com/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
//     title:'Ikigai',
//     author:'Hector Garcia',
// };
    
// function BookList(){
//     return(
//         <section className="booklist">
//             <Book img={firstBook.img} 
//             title={firstBook.title}
//             author={firstBook.author}
//             >
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vitae tempora quo nesciunt eum sint dolore dolores dolor, repellendus consectetur!</p>
//             </Book>
//             <Book img={secondBook.img} 
//             title={secondBook.title}
//             author={secondBook.author}
//             />
//         </section>
//     )
// }

// const Book = (props)=>{
//     // console.log(props);
//     // const {img,title,author} = props;
//     return (
//     <article className="book">
//         <img src={props.img} alt="" />
//         <h1>{props.title}</h1>
//         <h4>{props.author}</h4>
//         {props.children}
//     </article>
//     )
// }
//  ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);\












//  import React from "react";
//  import ReactDOM from "react-dom/client";
//  import './index.css';



// // const names = ["john", "susan", "peter"]
// // const newNames = names.map((name)=>{
// //     return <h1>{name}</h1>;
// // })

// // function BookList (){
// //     // console.log(newNames);
// //     return <section className="booklist">
// //         {newNames}
//     // </section>
// // }


// const books = [
//     {
//         id:1,
//         img:'https://m.media-amazon.com/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
//         title:'Ikigai',
//         author:'Hector Garcia',
//     },
//     {
//         id:2,
//         img:'https://m.media-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
//         title:'The Power of Your Subconscious Mind',
//         author:'Joseph Murphy',
//     },
//     {
//         id:3,
//         img:'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
//         title:'Atomic Habit',
//         author:'James Clear',  
//     }
// ]

// function BookList (){
//     return(
//         <section className="booklist">
//             {books.map((book) => {
//                 // return <Book book={book} key={book.id}></Book>
//                 return <Book key={book.id} {...book}></Book>
//             })}
//         </section>
//     )
// }

// const Book = (props)=>{
//     console.log(props)
//     // const {img,title,author} = props.book
//     const {img,title,author} = props
//     return(
//         <article className="book">
//             <img src={img} alt="" />
//             <h1>{title}</h1>
//             <h2>{author}</h2>
//         </article>
//     )
// }

//  ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);
 






import React from "react";
 import ReactDOM from "react-dom/client";
 import './index.css';




 const books = [
         {
               id:1,
             img:'https://m.media-amazon.com/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
             title:'Ikigai',
             author:'Hector Garcia',
         },
         {
             id:2,
             img:'https://m.media-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
            title:'The Power of Your Subconscious Mind',
             author:'Joseph Murphy',
         },
         {
             id:3,
             img:'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
            title:'Atomic Habit',
            author:'James Clear',  
        }
    ]

    function BookList (){
            return(
                <section className="booklist">
                    {books.map((book) => {
                        // return <Book book={book} key={book.id}></Book>
                        return <Book key={book.id} {...book}></Book>
                    })}
                </section>
            )
        }


const Book = ({img,title,author})=>{

    //events
    //onclick, onMouseOver

const clickHandler = (e) => {
    console.log(e);
    console.log("Hello WOrds");
}

const complexExample = (author) =>{
    console.log(author);
}


    return(
        <article className="book" onMouseOver={() => console.log(title)}>
            <img src={img} alt="" />
            <h1 onclick={()=>console.log(author)}>{title}</h1>
            <h2>{author}</h2>
            <button onClick={clickHandler}>example</button>
            <button onClick={()=> complexExample(author)}>commplex problem</button>
        </article>
    )
}







ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);