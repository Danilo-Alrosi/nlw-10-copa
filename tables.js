function createEquipe(grupo, equipe1, equipe2, equipe3, equipe4) {
  return `
        <caption>Grupo ${grupo}</caption>
        <tr>
          <th colspan="2">Equipe</th>
          <th>Pts.</th>
          <th>PJ</th>
          <th>VIT</th>
          <th>E</th>
          <th>DER</th>
          <th>GM</th>
          <th>GC</th>
          <th>SG</th>
        </tr>
  
        <tr>
          <td>1</td>
          <td><img src="./assets/icon-${equipe1}.svg" alt="bandeira do ${equipe1}"></td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td>2</td>
          <td><img src="./assets/icon-${equipe2}.svg" alt="bandeira do ${equipe2}"></td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td>3</td>
          <td><img src="./assets/icon-${equipe3}.svg" alt="bandeira do ${equipe3}"></td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td>4</td>
          <td><img src="./assets/icon-${equipe4}.svg" alt="bandeira da ${equipe4}"></td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
  `
}


function createTable(grupo, tables) {
  return `
    
    <table>    
        ${tables}
    </table>    
  `
}

document.querySelector('#create-tables').innerHTML =

  createTable('', createEquipe('A', 'qatar', 'ecuador', 'senegal', 'netherlands'))
  + createTable('', createEquipe('B', 'england', 'iran', 'united states', 'wales'))
  + createTable('', createEquipe('C', 'argentina', 'saudi arabia', 'mexico', 'poland'))
  + createTable('', createEquipe('D', 'france', 'australia', 'denmark', 'tunisia'))
  + createTable('', createEquipe('E', 'spain', 'costa rica', 'germany', 'japan'))
  + createTable('', createEquipe('F', 'belgium', 'canada', 'morocco', 'croatia'))
  + createTable('', createEquipe('G', 'brazil', 'serbia', 'switzerland', 'cameroon'))
  + createTable('', createEquipe('H', 'portugal', 'ghana', 'uruguay', 'south korea'))