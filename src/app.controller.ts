import { Controller, Get, Render, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {quotes} from './quotes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
  //működik
  @Get('/quotes')
  @Render('quoteList')
  getAllQuotes() {
    return {
      quotes: quotes.quotes
    };
  }

  //működik
  @Get('/random')
  @Render('randomQuote')
  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.quotes.length);
    const randomQuote = quotes.quotes[randomIndex];
    return { quote: randomQuote.quote, author: randomQuote.author };
  }

  /*
  @Get('/topAuthors')
  @Render('topAuthors')
  getTopAuthors() {
    const authors = this.quotes.quotes.quotes.reduce((acc, current) => {
      if (!acc[current.author]) {
        acc[current.author] = 1;
      } else {
        acc[current.author]++;
      }
      return acc;
    }, {});

    const sortedAuthors = Object.entries(authors).sort((a, b) => b[1] - a[1]);

    return sortedAuthors;
  }
  */
  
  //működik
  @Get('/quotes/:id')
  @Render('quoteId')
  oneQuote(@Param('id') id: string) {
    return {
      message: quotes.quotes[parseInt(id)+1].quote,
    }
  }

  
  
  @Get('/delete')
  @Render('deleteQuote')
  getDeleteQuote(@Param('id') id: string) {
    const index = quotes.quotes.findIndex((quote) => quote.id === parseInt(id));
    if (index === -1) {
      return 'Unknown quote ID';
    }
    quotes.quotes.splice(index, 1);
    return 'Quote deleted successfully';
  }
  
  /*
  @Get('/search')
  @Render('search')
  searchQuotes(@Query('text') text: string) {
    const filteredQuotes = quotes.quotes.filter(quote => quote.quote.toLowerCase().includes(text.toLowerCase()));
    return { quotes: filteredQuotes };
  }
  */


}
