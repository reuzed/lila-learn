import Reader from "./Reader";

function App() {
  const extract = `
  »Gegen Weihnachten des Jahres 1844, als mein ältester Sohn drei Jahre
alt war, ging ich in die Stadt, um demselben zum Festgeschenke ein
Bilderbuch zu kaufen, wie es der Fassungskraft des kleinen menschlichen
Wesens in solchem Alter entsprechend schien. Aber was fand ich? Lange
Erzählungen oder alberne Bildersammlungen, moralische Geschichten, die
mit ermahnenden Vorschriften begannen und schlossen, wie: »Das brave
Kind muß wahrhaft sein«; oder: »Brave Kinder müssen sich reinlich
halten« etc. – Als ich nun gar endlich ein Foliobuch fand, in welchem
eine Bank, ein Stuhl, ein Topf und vieles andere, was wächst oder
gemacht wird, ein wahres Weltrepertorium, abgezeichnet war, und wo bei
jedem Bild fein säuberlich zu lesen war: die Hälfte, ein Drittel, oder
ein Zehntel der natürlichen Größe, da war es mit meiner Geduld aus.
Einem Kind, dem man eine Bank zeichnet, und das sich daran erfreuen
soll, ist dies eine Bank, eine wirkliche Bank. Und von der wirklichen
Lebensgröße der Bank, hat und braucht das Kind gar keinen Begriff zu
haben. Abstrakt denkt ja das Kind noch gar nicht, und die allgemeine
Warnung: »Du sollst nicht lügen!« hat wenig ausgerichtet im Vergleich
mit der Geschichte: »Fritz, Fritz, die Brücke kommt!«

Als ich damals heimkam, hatte ich aber _doch_ ein Buch mitgebracht; ich
überreichte es meiner Frau mit den Worten: »Hier ist das gewünschte Buch
für den Jungen!« Sie nahm es und rief verwundert: »Das ist ja ein
Schreibheft mit leeren weißen Blättern!« »Nun ja, da wollen wir ein Buch
daraus machen!«

Damit ging es nun aber so zu. Ich war damals, neben meinem Amt als Arzt
der Irrenanstalt, auch noch auf Praxis in der Stadt angewiesen. Nun ist
es ein eigen Ding um den Verkehr des Arztes mit Kindern von drei bis
sechs Jahren. In gesunden Tagen wird der Arzt und der Schornsteinfeger
gar oft als Erziehungsmittel gebraucht: »Kind, wenn du nicht brav bist,
kommt der Schornsteinfeger und holt dich!« oder: »Kind, wenn du zu viel
davon issest, so kommt der Doktor und gibt dir bittere Arznei, oder
setzt dir gar Blutegel an!« Die Folge ist, daß, wenn in schlimmen Zeiten
der Doktor gerufen in das Zimmer tritt, der kleine kranke Engel zu
heulen, sich zu wehren, und um sich zu treten anfängt. Eine Untersuchung
des Zustandes ist schlechterdings unmöglich; stundenlang aber kann der
Arzt nicht den Beruhigenden, Besänftigenden machen. Da half mir
gewöhnlich rasch ein Blättchen Papier und Bleistift; eine der
Geschichten wie sie in dem Buche stehen, wird rasch erfunden, mit drei
Strichen gezeichnet, und dazu möglichst lebendig erzählt. Der wilde
Oppositionsmann wird ruhig, die Tränen trocknen, und der Arzt kann
spielend seine Pflicht tun.

[Illustration: Heinrich Hoffmann]

So entstanden die meisten dieser tollen Szenen, und ich schöpfte sie aus
vorhandenem Vorrate; einiges wurde später dazu erfunden, die Bilder
wurden mit derselben Feder und Tinte gezeichnet, mit der ich erst die
Reime geschrieben hatte, alles unmittelbar und ohne schriftstellerische
Absichtlichkeit. Das Heft wurde eingebunden und auf den Weihnachtstisch
gelegt. Die Wirkung auf den beschenkten Knaben war die erwartete; aber
unerwartet war die auf einige erwachsene Freunde, die das Büchlein zu
Gesicht bekamen. Von allen Seiten wurde ich aufgefordert, es drucken zu
lassen und es zu veröffentlichen. Ich lehnte es anfangs ab; ich hatte
nicht im Entferntesten daran gedacht, als Kinderschriftsteller und
Bilderbüchler aufzutreten. Fast wider Willen wurde ich dazu gebracht als
ich einst in einer literarischen Abendgesellschaft mit dem einen meiner
jetzigen Verleger gemütlich bei der Flasche zusammensaß. Und so trat das
bescheidene Hauskind plötzlich hinaus in die weite offene Welt und
machte nun seine Reise, ich kann wohl sagen, um die Welt, und ist heute
seit einunddreißig Jahren bis zur _hundertsten_ Auflage gelangt. Von
Uebersetzungen ist mir bis jetzt eine englische, holländische, dänische,
schwedische, russische, französische, italienische, spanische und eine
portugiesische (für Brasilien) zu Gesicht gekommen.
  `;

  return <Reader text={extract} />;
}

export default App;
