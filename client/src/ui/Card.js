import React from 'react';

const Card = ({ header, image, body, footer }) => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg bg-white'>
      {header && <div className='px-4 font-bold text-xl mb-2'>{header}</div>}

      {image && (
        <div
          className='w-full mb-2 min-h-[150px] md:min-h-[200px]'
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        />
      )}

      <div className='px-4'>
        {body && <div className='mb-2'>{body}</div>}
        {footer && <div className='pb-2 font-bold'>{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
