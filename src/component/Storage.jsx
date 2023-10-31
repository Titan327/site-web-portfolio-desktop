import { createContext } from 'react';

export const storageContext = createContext(
  {
    'name':'home',
    'type':'directory',
    'content':[
      {
        'name':'guest',
        'type':'directory',
        'content':[
          {
            'name':'Desktop',
            'type':'directory',
            'content':[
              {
                'name':'CV',
                'type':'link-pdf',
                'content':'pdf/CV_Tristan_TOURBIER.pdf'
              },
            ],
          },
        ],
      },
    ],
  },
);
