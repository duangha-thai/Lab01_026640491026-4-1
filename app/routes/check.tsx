import {check} from "./data";

const books = [
    {
        "Code": "BK001",
        "Title": "The Great Gatsby",
        "Cover": "https://example.com/images/gatsby.jpg",
        "Description": "A classic novel written by F. Scott Fitzgerald.",
        "Category": 1,
        "Author": "F. Scott Fitzgerald",
        "Publishing": "Scribner",
        "Price": 10,
        "Bestseller": true,
        "Flash_sale": false
    },
    
];

const BookStatusComponent = () => {
    return (
        <div>
            <h1>Books Status</h1>
            {books.map(book => (
                <div key={book.Code} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
                    <h2>{book.Title}</h2>
                    <img src={book.Cover} alt={book.Title} style={{ width: '100px' }} />
                    <p><strong>Author:</strong> {book.Author}</p>
                    <p><strong>Publishing:</strong> {book.Publishing}</p>
                    <p><strong>Price:</strong> ${book.Price}</p>
                    <p><strong>Description:</strong> {book.Description}</p>
                    <p><strong>Bestseller:</strong> {book.Bestseller ? 'Yes' : 'No'}</p>
                    <p><strong>Flash Sale:</strong> {book.Flash_sale ? 'Yes' : 'No'}</p>
                </div>
            ))}
        </div>
    );
};

export default BookStatusComponent;
