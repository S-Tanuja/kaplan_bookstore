import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BooksService } from './books.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

describe('BooksService', () => {
  let service: BooksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksService],
    });

    service = TestBed.inject(BooksService); 
    httpTestingController = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch books from the API', () => {
    service.getBooks().subscribe((books:any)=>{
      expect(books).toBeTruthy()
    })
    const mockResponse = {
      items: [
        {
          "kind": "books#volume",
          "id": "vdDVDwAAQBAJ",
          "etag": "2HyBtWPngE0",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/vdDVDwAAQBAJ",
          "volumeInfo": {
            "title": "Score Higher on the UCAT",
            "subtitle": "1500 Questions + Online",
            "authors": [
              "Kaplan Test Prep"
            ],
            "publisher": "Kaplan Publishing",
            "publishedDate": "2020-04-07",
            "description": "The Expert Guide from Kaplan for 2021 entry One test stands between you and a place at the medical school of your dreams: the UCAT. With 1,500 questions, test-like practice exams, a question bank, and online test updates, Kaplan’s Score Higher on the UCAT, sixth edition, will help build your confidence and make sure you achieve a high score. We know it's crucial that you go into your UCAT exam equipped with the most up-to-date information available. Score Higher on the UCAT comes with access to additional online resources, including any recent exam changes, hundreds of questions, an online question bank, and a mock online test with full worked answers to ensure that there are no surprises waiting for you on test day. The Most Practice 1,500 questions in the book and online—more than any other UCAT book Three full-length tests: one mock online test to help you practise for speed and accuracy in a test-like interface, and two tests with worked answers in the book Online question bank to fine-tune and master your performance on specific question types Expert Guidance The authors of Score Higher on the UCAT have helped thousands of students prepare for the exam. They offer invaluable tips and strategies for every section of the test, helping you to avoid the common pitfalls that trip up other UCAT students. We invented test preparation—Kaplan (www.kaptest.co.uk) has been helping students for 80 years. Our proven strategies have helped legions of students achieve their dreams.",
            "industryIdentifiers": [
              {
                "type": "ISBN_13",
                "identifier": "9781506260297"
              },
              {
                "type": "ISBN_10",
                "identifier": "1506260292"
              }
            ],
            "readingModes": {
              "text": false,
              "image": false
            },
            "pageCount": 497,
            "printType": "BOOK",
            "categories": [
              "Medical"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.0.1.0.preview.0",
            "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
            },
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=vdDVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=vdDVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.co.in/books?id=vdDVDwAAQBAJ&printsec=frontcover&dq=kaplan+test+prep&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.co.in/books?id=vdDVDwAAQBAJ&dq=kaplan+test+prep&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Score_Higher_on_the_UCAT.html?hl=&id=vdDVDwAAQBAJ"
          },
          "saleInfo": {
            "country": "IN",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
          },
          "accessInfo": {
            "country": "IN",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
              "isAvailable": false
            },
            "pdf": {
              "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=vdDVDwAAQBAJ&hl=&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          },
          "searchInfo": {
            "textSnippet": "The Expert Guide from Kaplan for 2021 entry One test stands between you and a place at the medical school of your dreams: the UCAT."
          }
        },
      ]}

    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET'); 

    req.flush(mockResponse);
  });
});
