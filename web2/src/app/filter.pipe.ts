import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: any, term: any): any {
   	//check if search term is undefined
   	if (term === undefined) return tasks;
   	return tasks.filter(function(task) {
   		return task.name.toLowerCase().includes(term.toLowerCase());
   	})
  }

}
