import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: any, term: any): any {
   	//check if search term is undefined
   	if (term === undefined) return tasks;
   	return tasks.filter(function(task) {
   		if(task.hasOwnProperty('name'))
   		{
   		return task.name.toLowerCase().includes(term.toLowerCase());
   		}
   		else if(task.hasOwnProperty('first_name'))
   		{
   		return task.first_name.toLowerCase().includes(term.toLowerCase());
   		}

   	})
  }

}
