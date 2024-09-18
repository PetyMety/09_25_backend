import { Controller, Get, Render } from '@nestjs/common';
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

  @Get('/quotes')
  @Render('quoteList')
  getAllQuotes() {
    
  }

  @Get('/random')
  @Render('randomQuote')
  getRandomQuote() {
    
  }

  @Get('/author')
  @Render('topAuthor')
  getTopAuthor() {
    
  } 
  
  
  @Get('/quoteid')
  @Render('quoteId')
  getQuoteId() {
    
  }

  @Get('/delete')
  @Render('deleteQuote')
  getDeleteQuote() {
    
  }

}
