/* 
     template is JSX  

     React Component 
     jsx + data
*/

import { toElement } from './../utils/toElement';
 
function toDoItemTemplate(category, status, todo, start) {
  const template = `
    <section class="flex flex-col bg-blue-50 border border-blue-300 p-6 md:p-8 dark:bg-pink-200 dark:border-purple-700 dark:text-green-200">
      <ul class="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-gray-100">
        <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-Large text-gray-200 dark:text-bold">
          ${category}
        </li>
        <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-Large text-gray-200 dark:text-bold">
          ${status}
        </li>
        <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-Large text-gray-200 dark:text-bold">
          ${todo}
        </li>
        <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-Large text-gray-200 dark:text-bold">
          ${start}
        </li>
      </ul>
    </section>
  `;

    return toElement(template);
}

export { toDoItemTemplate };
