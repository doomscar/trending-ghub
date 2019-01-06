import React from 'react';

const TrendGit = props =>{
  let data = props.data;
  if (!data) {
    return <div>Загрузка...</div>
  }

  const trendsTemplate = data.map(function(item, index) {
    return (
      <div key={index} className={'trandeGit'}>
        <p><span>Имя репозитория:</span> {item.name}</p>
        <p><span>Основной язык:</span> {item.language}</p>
        <p><span>Описание:</span> {item.description}</p>
        <p><span>Ссылка:</span> <a target='_blank' href={item.url}>{item.url}</a></p>
      </div>
  )})
  
  return (
    <React.Fragment>
      {trendsTemplate}
    </React.Fragment>
  )
}

export default TrendGit;