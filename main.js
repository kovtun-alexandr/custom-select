let select = function(){
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach( item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach( item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle(){
    this.parentElement.classList.toggle('in-active');
  }

  function selectChoose(){
    let text = this.innerText,
    select = this.closest('.select'),
    item = document.querySelectorAll('.select__body .select__item'),
    currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('in-active'); 
    item.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
  }

  // Remove class in-active, closing the select by clicking outside the block!
  const selectHeaderBlock = document.querySelector('.select__header');

  document.onclick = function(e){
      if ( event.target.className != 'select__header' ) {
        selectHeaderBlock.closest('.select').classList.remove('in-active'); 
      };
  };
}

select();