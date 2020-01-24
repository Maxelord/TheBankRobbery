const imgElement = document.getElementById ('image')
const imgleftElement = document.getElementById ('image_left')
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

function startGame() {
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  imgElement.src = textNode.image;
  imgleftElement.src = textNode.image_left;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const image = document.createElement('image')
      const image_left = document.createElement('image_left')
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
}

const textNodes = [
    // Anfang der Story
  {
    id: 1,
    image_left: 'img/motherandson.png',
    image: 'img/Auswahl_1.png',
    text: 'Du bist ein Student im Auslandssemester, in einer kleinen Stadt in Amerika. Du hast deine Prüfungen schon alle geschrieben und fliegst bald zurück nach hause. Eines Tages bekommst du jedoch eine Nachricht von deiner Mutter. Sie ist krank. Ihr habt aber nicht genug Geld für die Operation, die ihr das Leben retten würde. Du überlegst, ob du dir das Geld vielleicht von Freunden leihen kannst, aber es ist einfach zu viel. Du siehst keine andere Möglichkeit als das Geld zu stehlen. Willst du eine Bank ausrauben?',
    options: [
      {
        text: 'Ja',
        nextText: 3
      },
      {
        text: 'Nein',
        nextText: 2
      }
    ]
  },
    // erneutes Fragen ob die Bank wirklich nicht ausgeraubt werden soll
  {
    id: 2,
    image_left: 'img/motherandson.png',
    image: 'img/Auswahl_1.png',
    text: 'Willst du die Bank wirklich nicht ausrauben?',
    options: [
      {
        text: 'Doch',
        nextText: 3
      },
      {
        text: 'Nein',
        nextText: -1
      }
    ]
  },
    //auswahl des schwierigkeit grades
  {
    id: 3,
    image_left: 'img/PlanningGarage.png',
    image: 'img/Auswahl_1.png',
    text: 'Du hast dir überlegt eine Bank in einem kleinen Dorf in der Wüste ausrauben. Nun fragst du dich, welche Bank du ausrauben willst. Welche Bank willst du ausrauben?',
    options: [
      {
        text: 'Leicht',
        nextText: 4
      },
      {
        text: 'Mittel',
        nextText: 4
      },
      {
        text: 'Schwer',
        nextText: 4
      }
    ]
  },
    // Banküberfall planen
  {
    id: 4,
    image_left: 'img/Building_Blueprint.png',
    image: 'img/Auswahl_1.png',
    text: 'Du hast dich dort ein paar Mal schon umgeschaut und hast dir den Grundriss der Bank schon besorgt. Die Planung ist schon fast fertig. Du kannst jedoch noch etwas in deiner Hosentasche mitnehmen, was dir vielleicht beim Überfall helfen wird.  Was willst du mitnehmen?',
    options: [
      {
        text: 'Waffe',
        nextText: 5
      },
      {
        text: 'Tasche',
        nextText: 5
      },
      {
        text: 'Hundefutter',
        nextText: 5
      }
    ]
  },
    // Tageszeit planen
  {
    id: 5,
    image_left: 'img/PlanningGarage.png',
    image: 'img/Auswahl_1.png',
    text: 'Das Letzte was du noch entscheiden musst, ist, wann du die Bank ausraubst. Welche Tageszeit nimmst du?',
    options: [
      {
        text: 'Tag',
        nextText: 6
      },
      {
        text: 'Nacht',
        nextText: 7
      }
    ]
  },
    // Eingang aussuchen bei Tag
  {
    id: 6,
    image_left: 'img/bank.png',
    image: 'img/Auswahl_1.png',
    text: 'Du stehst vor der Bank. Erst jetzt bemerkst du, dass du dir noch keine Gedanken gemacht hast, wie du nun eigentlich in die Bank reinkommst. Du schaust dich um und siehst zwei Eingänge. Welchem Eingang willst du nehmen?',
    options: [
      {
        text: 'Vorne',
        nextText: 8
      },
      {
        text: 'Hinten',
        nextText: 9
      }
    ]
  },
    // Eingang aussuchen bei Nacht
  {
    id: 7,
    image_left: 'img/bank_nacht.jpg',
    image: 'img/Auswahl_1.png',
    text: 'Du stehst vor der Bank. Erst jetzt bemerkst du, dass du dir noch keine Gedanken gemacht hast, wie du nun eigentlich in die Bank reinkommst. Du schaust dich um und siehst zwei Eingänge. Welchem Eingang willst du nehmen?',
    options: [
      {
        text: 'Vorne',
        nextText: 10
      },
      {
        text: 'Hinten',
        nextText: 11
      }
    ]
  },
    // Tag Vorne ausgesucht
  {
    id: 8,
    image_left: 'img/bank.png',
    image: 'img/Auswahl_1.png',
    text: 'Du hast es geschafft, dich durch die Eingangshalle zum hinteren Bereich der Bank durchzuschlagen ohne Aufmerksamkeit auf dich zu lenken. ',
    options: [
      {
        text: 'Du guckst dich kurz um und gehst in Richtung des Tresors.',
        nextText: 12
      }
    ]
  },
    // Tag Hinten ausgesucht
  {
    id: 9,
    image_left: 'img/bank.png',
    image: 'img/Auswahl_1.png',
    text: 'Du wirst von einem Zeugen gesehen, wie du die Bank betrittst. Er alarmiert sofort die Polizei. Du bist aufgeflogen und wirst festgenommen. Du kannst deiner Mutter nicht mehr hefen.',
    options: [
      {
        text: 'Neustart',
        nextText: -1
      }
    ]
  },
    // Nacht Vorne ausgesucht
  {
    id: 10,
    image_left: 'img/bank_nacht.jpg',
    image: 'img/Auswahl_1.png',
    text: 'Du schleichst leise durch die leere Eingangshalle und begibst dich zum hinteren Bereich der Bank. Dort guckst du dich kurz um und gehst in Richtung des Tresors. Dabei sieht dich von außen ein Fußgänger und alamiert die Polizei. Du bist aufgeflogen und wirst festgenommen. Du kannst deiner Mutter nicht mehr hefen.',
    options: [
      {
        text: 'Neustart',
        nextText: -1
      }
    ]
  },
    // Nacht Hinten ausgesucht
  {
    id: 11,
    image_left: 'img/Tresordoor1.png',
    image: 'img/Auswahl_1.png',
    text: 'Du hast es geschafft, durch den Hintereingang in die Bank zu gelangen. Du siehst dich kurz um und gehst ein paar Schritte, um zum Tresor zu gelangen. Beim Tresor angekommen bemerkst du, dass du keinen Schlüssel für die Tresortür hast. Du gehst zu den Schreibtischen der Angestellten und suchst dort nach den Schlüsseln.',
    options: [
      {
        text: 'Suchen',
        nextText: 13
      }
    ]
  },
    // Schlüssel suchen
  {
    id: 12,
    image_left: 'img/Tresordoor1.png',
    image: 'img/Auswahl_1.png',
    text: 'Beim Tresor angekommen bemerkst du, dass du keinen Schlüssel für die Tresortür hast. Du gehst zu den Schreibtischen der Angestellten und suchst dort nach den Schlüsseln.',
    options: [
      {
        text: 'Suchen',
        nextText: 13
      }
    ]
  },
    // Schlüssel gefunden und gehe zum Tresor
  {
    id: 13,
    image_left: 'img/Building_Blueprintplan.png',
    image: 'img/Auswahl_1.png',
    text: 'Du hast alle Schlüssel gefunden. Du versuchst nun die Tresortür zu öffnen. Es funktioniert aber nicht. Du musst noch einen Sicherheitscode eingeben. Du begibst dich auf die Suche nach dem Sicherheitscode im Büro des Bankdirektors.',
    options: [
      {
        text: 'Gehe in das Büro',
        nextText: 14
      }
    ]
  },
    // suche nach dem Code im Büro des Bankdirektors
  {
    id: 14,
    image_left: 'img/ManagerOfficeWcode.png',
    image: 'img/Auswahl_1.png',
    text: 'Suche nach dem Code, um die Tresortür zu öffnen. Wenn du den Code im Büro des Direktors gefunden hast, merke ihn dir und gehst zurück zum Tresor. Beim Tresor angekommen gibst den Code ein.',
    options: [
      {
        text: 'Gehe zurück zum Tresor',
        nextText: 15
      }
    ]
  },
    // den Code aus dem Büro eingeben
  {
    id: 15,
    image_left: 'img/Keypad.png',
    image: 'img/Auswahl_1.png',
    text: 'Du bist wieder vor der Tresortür und möchtest jetzt den Code eingeben um sie zu öffnen. Wie lautet der Code?',
    options: [
      {
        text: '2020',
        nextText: 16
      },
      {
        text: '6320',
        nextText: 16
      },
      {
        text: '2063',
        nextText: 17
      },
      {
        text: '2630',
        nextText: 16
      }
    ]
  },
    // Falschen code eingegben
  {
    id: 16,
    image_left: 'img/Keypad',
    image: 'img/Auswahl_1.png',
    text: 'Du hast den Code aus dem Büro des Bankdirektors falsch eingegeben. Wie möchtest du weiter machen?',
    options: [
      {
        text: 'Nochmal suchen',
        nextText: 14
      },
      {
        text: 'Nochmal eingeben',
        nextText: 15
      }
    ]
  },
    // den richtigen Code eingegeben
  {
    id: 17,
    image_left: 'img/TresorDoor2.png',
    image: 'img/Auswahl_1.png',
    text: 'Die Tresortür öffnet sich. Du siehst die vielen Geldscheine dort liegen und freust dich damit deiner Mutter das Leben zu retten. Du nimmst so viel Geld, wie du tragen kannst und begibst dich Richtung Ausgang. Du kannst dir jetzt aber aussuchen, welchen Ausgang du nimmst. Welchen Ausgang nimmst du?',
    options: [
      {
        text: 'Vorne',
        nextText: 18
      },
      {
        text: 'Hinten',
        nextText: 19
      }
    ]
  },
    // du hast es geschafft und fliehst aus der bank
  {
    id: 18,
    image_left: 'img/Building_Blueprintplan.png',
    image: 'img/Auswahl_1.png',
    text: 'Du hast es geschafft, die Bank durch den Haupteingang zu verlassen. Ein Taxi fährt an der Bank vorbei. Du hältst das Taxi an und fährst mit ihm zum Flughafen. Du hast es geschafft. Du bist nun am Flughafen und wartest auf den nächsten Flug nach Deutschland. Du freust dich schon auf das Wiedersehen mit deiner Mutter. Du hast jetzt genug Geld für die Operation, um deine Mutter zu retten. Wenn sie wieder gesund ist, planst du schon mit dem restlichen Geld eine Reise mit ihr zu machen.',
    options: [
      {
        text: 'Nochmal spielen',
        nextText: -1
      }
    ]
  },
    // du hast es geschafft und fliehst aus der bank
  {
    id: 19,
    image_left: 'img/pferd.gif',
    image: 'img/Auswahl_1.png',
    text: 'Du hast es geschafft, aus der Bank zu fliehen. Schon am Vormittag hast du ein Pferd hinter der Bank versteckt. Da du keine Menschen in der Nähe siehst, gehst du möglichst unauffällig zu deinem Pferd und reitest los. Du hast es geschafft. Du reitest nun zum Flughafen um den nächsten Flug nach Deutschland zu nehmen. Dort angekommen bezahlst du die Operation für deine Mutter. Durch die OP wird sie nun wieder vollständig gesund.',
    options: [
      {
        text: 'Nochmal spielen',
        nextText: -1
      }
    ]
  }
]

startGame()