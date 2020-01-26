const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// const root = document.createElement('ul');
// rootNode.appendChild(root);
function getStructure(structure, rootNode) {
  structure.forEach(element => {

    let ul;
    let li;


    if (element.folder) {
      ul = document.createElement('ul');
      li = document.createElement('li');
      li.textContent = element.title;
      li.appendChild(ul);
      rootNode.appendChild(li);
      li.className = 'li';
      ul.className = 'close';
      li.onclick = function (event) {
        let current = event.currentTarget;
        console.log(current.children);
        event.stopPropagation();
      
      let currentClass = current.children[0].className;

        if (currentClass === 'open') {
          current.children[0].className = 'close';
        } else if (currentClass === 'close') {
          current.children[0].className = 'open';
        }
      };

      if (!element.children) {
        li = document.createElement('li');
        li.className = 'empty';
        li.textContent = 'Folder is empty';
        ul.appendChild(li);
      } else {
        getStructure(element.children, ul);
      }

    } else {
      li = document.createElement('li');
      li.textContent = element.title;
      rootNode.appendChild(li);
    }
  });
}

getStructure(structure, rootNode);
