import {Main} from "../../../layout/Layouts";
import React, {useState} from "react";
import {Link} from "react-router-dom";

export const CharacterCreation = () => {
  return (
    <Main name={"Création d'un personnage"} lastUnit={true}>
      <p>
        La première étape d'une partie de Dungeons &amp; Dragons est d'imaginer et de se créer son propre personnage. Un
        personnage est défini par des statistiques de jeu, des accroches de roleplay, et par votre imagination. Vous
        choisissez une race (comme humain ou halfelin) et une classe (comme guerrier ou magicien). Vous inventez aussi
        la personnalité, l'apparence et l'histoire de votre personnage. Une fois cela achevé, votre personnage est votre
        avatar dans le monde de Dungeons &amp; Dragons.
      </p>
      <p>
        Avant de vous plonger dans la première étape ci-après, imaginez le type d'aventurier que vous voulez jouer. Vous
        pouvez être un courageux combattant, un roublard furtif, un clerc dévot ou un mage flamboyant. Ou encore vous
        pouvez choisir d'interpréter un personnage moins conventionnel, comme un robuste roublard aimant le combat
        rapproché, ou un tireur d'élite préférant abattre ses cibles de loin. Vous aimez la littérature fantasy
        impliquant des nains ou des elfes ? Essayez-vous à interpréter un personnage d'une de ces races. Vous voulez que
        votre avatar soit l'aventurier le plus coriace à la table de jeu ? Regardez donc la classe de guerrier. Si vous
        ne savez pas par où commencer, jetez un œil aux illustrations pour trouver votre inspiration.
      </p>
      <p className="encadre">
        <strong>CRÉATION DE BRUENOR</strong>
        <br/>
        <br/>
        Chaque étape de la création d'un personnage est illustrée par un encart, où un joueur nommé Bob crée son
        personnage nain, Bruenor.
      </p>
      <p>
        Une fois que vous avez imaginé votre personnage,
        suivez les étapes ci-après dans l'ordre, en faisant les choix qui illustrent le mieux votre personnage. Le
        concept de votre personnage pourra évoluer en fonction de vos choix au fil de la création. Le plus important est
        de créer un personnage que vous aurez plaisir à jouer.
      </p>
      <p>
        Au travers de ce chapitre, nous utilisons le terme <a href="/adj/telechargement/"><strong>feuille de
        personnage</strong></a> pour indiquer toute solution qui vous permet de prendre note des éléments de votre
        personnage, que ce soit une feuille de personnage à proprement parler, un fichier informatique ou un bloc-notes
        classique. Une feuille de personnage officielle D&amp;D est un bon point de départ, pour savoir quoi noter et
        comment l'utiliser pendant le jeu.
      </p>
      <h3>1) Choisir une race</h3><p>
      Tout personnage appartient à une race, l'une des nombreuses espèces intelligentes du monde de
      D&amp;D. Les races les plus communes pour les personnages joueurs sont les elfes, les halfelins, les humains et
      les nains. Certaines races sont divisées en sous-races, comme les nains des montagnes ou les elfes des bois. Le
      chapitre <a href="/regles/races/">Races</a> fournit de plus amples informations sur celles-ci.
    </p>
      <p className="encadre">
        <strong>CRÉATION DE BRUENOR, ÉTAPE 1</strong>
        <br/>
        Bob décide qu'un nain des montagnes bourru représenterait bien le personnage qu'il veut jouer. Il note tous les
        traits raciaux des nains sur sa feuille de personnage, ainsi que sa vitesse de base de 7,50 mètres et les
        langues qu'il connait : le commun et le nain.
      </p>
      <p>
        Le choix de la race est une contribution importante à l'identité de votre personnage, indiquant son apparence
        générale et les talents naturels communs à ses membres, qu'ils soient culturels ou ancestraux. La race de votre
        personnage lui donne des traits raciaux, comme des sens spéciaux, la maîtrise de certaines armes ou certains
        outils, la maîtrise de certaines compétences, ou la capacité à utiliser certains sorts mineurs. Ces traits
        s'accordent parfois avec les aptitudes de certaines classes (voir étape 2). Par exemple le trait racial des
        halfelins pied-légers en font des roublards d'exceptions, et les haut-elfes ont tendance à être de puissants
        magiciens. Quelquefois, jouer contre nature peut aussi être plaisant. Par exemple, un paladin halfelin ou un
        magicien nain des montagnes sont des personnages inhabituels, mais ils peuvent être mémorables.
      </p>
      <p>
        Votre race modifie aussi une ou plusieurs des caractéristiques de votre personnage (voir étape 3). Notez ces
        modificateurs et souvenez-vous de les appliquer.
      </p>
      <p>
        Notez les traits accordés par votre race sur la feuille de personnage.
        N'oubliez pas aussi de noter les langues que vous connaissez, ainsi que votre vitesse de base.
      </p>
      <h3>2) Choisir une classe</h3>
      <p>
        Tout aventurier est membre d'une classe. Une classe dépeint la vocation d'un personnage, quels
        talents spécifiques il possède, et les tactiques les plus couramment employées par ses membres lors d'une
        exploration de donjons, pour combattre les monstres, ou s'engager dans d'intenses négociations. Le chapitre <a
        href="/regles/classes/">Classes</a> fournit de plus amples informations sur celles-ci.
      </p>
      <p>
        Votre personnage bénéficie d'un certain nombre d'avantages découlant du choix de la classe. Nombre de ces
        avantages sont des <strong>capacités de classes</strong> – des aptitudes (comme lancer des sorts) qui
        différencient votre personnage des membres des autres classes. Vous gagnez aussi un certain nombre
        de <strong>maîtrises</strong> :
        pour des armures, des armes, des compétences, des jets de sauvegarde et quelquefois des outils. Vos maîtrises
        définissent la plupart des choses pour lesquelles votre personnage est particulièrement compétent, de l'usage de
        certaines armes à savoir raconter des mensonges convaincants.
      </p>
      <p>
        Sur votre feuille de personnage, notez toutes les aptitudes octroyées par votre classe au niveau 1.
      </p>
      <h4>Niveau</h4><p>
      Généralement, un personnage
      débute au niveau 1 et progresse en niveau en partant à l'aventure et en gagnant des points d'expérience (PX). Au
      niveau 1, un personnage est inexpérimenté dans le monde des aventuriers, bien qu'il ait pu être un soldat ou un
      pirate et avoir déjà affronté le danger par le passé.
    </p>
      <p>
        Débuter au niveau 1 marque l'entrée de votre personnage dans la vie d'aventurier. Si vous avez déjà une
        expérience du jeu, ou si vous rejoignez une campagne existante, votre MD peut décider de vous faire débuter à un
        niveau plus élevé, considérant que votre personnage a déjà vécu des aventures harassantes.
      </p>
      <p>
        Notez votre niveau sur votre feuille de personnage. Si vous démarrez à un niveau supérieur au premier, notez les
        aptitudes supplémentaires de votre classe pour les niveaux supérieurs. Notez de même vos points d'expérience. 0
        au niveau 1, et le minimum requis pour un niveau supérieur
        (voir <a href="/regles/creation-de-perso/suite/">Au-delà du niveau 1</a>).
      </p>
      <h4>Points de vie et Dés de vie</h4><p>
      Les points de vie de votre personnage définissent sa résistance au combat ou dans toutes autres
      situations dangereuses. Vos points de vie sont déterminés par votre dé de vie (raccourcis pour Dé de points de
      vie).
    </p>
      <p>
        Au niveau 1, votre personnage possède 1 dé de vie, et le type de ce dé est défini par votre classe.
        Vos points de vie de départ sont égaux au maximum de votre dé de vie, comme indiqué dans la description de votre
        classe (vous ajouterez aussi votre modificateur de Constitution, qui sera déterminé à l'étape 3). Cette valeur
        finale est aussi votre <strong>maximum de points de vie.</strong>
      </p>
      <p>
        Notez vos points de vie sur votre feuille de personnage. De même, notez le type de votre dé de vie, et le nombre
        de dés de vie que vous possédez.
        Après un repos, vous pouvez dépenser des dés de vie pour regagner des points de vie (voir <a
        href="/regles/aventure/">Repos</a>).
      </p>
      <h4>Bonus de maîtrise</h4><p className="encadre">
      <strong>CRÉATION DE
        BRUENOR, ÉTAPE 2
        <br/>
      </strong>
      <br/>
      Bob s'imagine Bruenor chargeant dans un combat avec une hache et un casque
      dont l'une des cornes est manquante. Il fait de Bruenor un guerrier, et note sur sa feuille de personnage les
      capacités et les maîtrises de son personnage au niveau 1.
      <br/>
      <br/>
      En tant que guerrier de niveau 1, Bruenor a 1
      dé de vie, un d10, et débute avec un total de points de vie égal à 10 + son modificateur de Constitution, qu'il
      indiquera après avoir défini la Constitution de Bruenor à l'étape 3. Bob note aussi le bonus de maîtrise de +2
      qui correspond à un personnage de niveau 1.
    </p>
      <p>
        Le tableau dans la description de votre classe indique votre bonus de maîtrise, qui est de +2 au niveau 1. Ce
        bonus s'applique à de nombreuses valeurs que vous noterez sur votre feuille de personnage :</p>
      <ul>
        <li>Jets d'attaque utilisant une arme que vous maîtrisez</li>
        <li>Jets d'attaque pour les sorts que vous lancez</li>
        <li>Jets de caractéristique pour les compétences que vous maîtrisez</li>
        <li>Jets de caractéristique pour l'usage des outils que vous maîtrisez</li>
        <li>Jets de sauvegarde dont vous avez la maîtrise</li>
        <li>Degré de difficulté des jets de sauvegarde pour résister aux sorts que vous lancez (voir les explications
          dans la description des classes de lanceurs de sorts)
        </li>
      </ul>
      <p>
        Votre classe détermine vos maîtrises d'armes, de jets de sauvegarde, de certaines de vos <a
        href="/regles/caracteristiques/">compétences</a> et usages d'<a href="/regles/equipement/outils/">outils</a>.
        Votre historique vous donne d'autres maîtrises de compétences et d'outils, ainsi que certaines races. Notez
        toutes ces maîtrises ainsi que votre bonus de maîtrise sur votre feuille de personnage.
      </p>
      <p>
        Votre bonus de maîtrise ne peut s'appliquer plus d'une fois à un même jet de dés ou à un autre nombre. Parfois,
        votre bonus de maîtrise peut être modifié (doublé ou divisé par deux, par exemple) avant d'être pris en compte.
        Si une situation semble suggérer que vous pouvez appliquer ou modifier votre bonus plus d'une fois, n'en tenez
        pas compte. Le bonus de maîtrise ne s'applique, ne se multiplie ou ne se divise qu'une seule fois.
      </p>
      <h3>3)
        Déterminer les valeurs de caractéristiques</h3><p>
      La majorité des actions de votre personnage dépend de l'une
      de ses six caractéristiques
      : <strong>Force</strong>, <strong>Dextérité</strong>, <strong>Constitution</strong>, <strong>Intelligence</strong>, <strong>Sagesse</strong> et <strong>Charisme</strong>.
      Chaque caractéristique a une valeur que vous devez noter sur votre feuille de personnage.
    </p>
      <p>
        Les six caractéristiques et leurs utilisations en jeu sont décrites dans le chapitre <a
        href="/regles/caracteristiques/">Utiliser les caractéristiques</a>. La table ci-dessous est une référence rapide
        pour indiquer quelles qualités sont évaluées par chaque caractéristique, quelles races augmentent quelles
        caractéristiques, et quelles sont les caractéristiques importantes pour chaque classe.
      </p>
      <table>
        <tbody>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;<strong>Force</strong></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><em>Mesure :</em>
            <br/>
            <em>Importante pour :
              <br/>
              Modificateurs raciaux :</em></td>
          <td>La puissance physique,&nbsp;l'aptitude athlétique
            naturelle
            <br/>
            <span>Barbare, guerrier, paladin
<br/>
<span>Nain des montagnes (+2),&nbsp;Demi-orc (+2),&nbsp;Drakéide (+2),&nbsp;Humain (+1)</span></span>
          </td>
        </tr>
        <tr>
          <td><strong><strong>Dextérité</strong></strong></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><em>Mesure :</em>
            <br/>
            <em>Importante pour :
              <br/>
              Modificateurs raciaux :</em></td>
          <td>
            <span>L'agilité, les réflexes,&nbsp;</span><span>l'équilibre
<br/>
<span>Moine, rôdeur, roublard
<br/>
<span>Elfe (+2),&nbsp;</span><span>Halfelin (+2),&nbsp;</span><span>Humain (+1),&nbsp;</span><span>Gnome des forêts (+1)</span></span>
<br/>
</span>
          </td>
        </tr>
        <tr>
          <td><strong><strong>Constitution</strong></strong></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><em>Mesure :</em>
            <br/>
            <em>Importante pour :
              <br/>
              Modificateurs raciaux :</em></td>
          <td>
            <span>La santé, l'endurance,&nbsp;</span><span>la force vitale
<br/>
<span>Toutes les classes
<br/>
</span><span>Nain (+2),&nbsp;</span><span>Humain (+1),&nbsp;</span><span>Halfelin robuste (+1),&nbsp;</span><span>Demi-orc (+1),&nbsp;</span><span>Gnome des roches (+1)</span>
<br/>
</span>
          </td>
        </tr>
        <tr>
          <td><strong>Intelligence</strong></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><em><em>Mesure :</em>
            <br/>
            <em>Importante pour :
              <br/>
              Modificateurs raciaux :</em></em></td>
          <td><span><span>L'acuité mentale,&nbsp;</span><span>le raisonnement,&nbsp;</span><span>la mémoire
<br/>
<span>Magicien
<br/>
<span>Gnome (+2),&nbsp;</span><span>Haut-elfe (+1),&nbsp;</span><span>Humain (+1),&nbsp;</span><span>Tieffelin (+1)</span></span>
<br/>
</span></span>
          </td>
        </tr>
        <tr>
          <td><strong>Sagesse</strong></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><em><em>Mesure :</em>
            <br/>
            <em>Importante pour :
              <br/>
              Modificateurs raciaux :</em></em></td>
          <td><span>La perception,&nbsp;</span><span>l'intuition, la perspicacité
<br/>
<span>Clerc, druide
<br/>
<span>Elfe des bois (+1),&nbsp;</span><span>Humain (+1),&nbsp;</span><span>Nain des collines (+1)</span></span>
<br/>
</span>
          </td>
        </tr>
        <tr>
          <td><strong><strong>Charisme</strong></strong></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><em><em>Mesure :</em>
            <br/>
            <em>Importante pour :
              <br/>
              Modificateurs raciaux :</em></em></td>
          <td><span>La force de personnalité,&nbsp;</span><span>l'éloquence, le leadership
<br/>
<span>Barde, ensorceleur, occultiste
<br/>
<span>Demi-elfe (+2),&nbsp;</span><span>Tieffelin (+2),&nbsp;</span><span>Elfe noir (+1),&nbsp;</span><span>Halfelin pied-léger (+1),&nbsp;</span><span>Humain (+1),&nbsp;</span><span>Drakéide (+1)</span></span>
<br/>
</span>
          </td>
        </tr>
        </tbody>
      </table>
      <p>
        Vous déterminez les six valeurs de caractéristiques de votre personnage aléatoirement. Lancez 4d6 et notez la
        somme des trois meilleurs dés. Faites cinq autres lancers, pour avoir ainsi six nombres. Si vous voulez aller
        plus vite, ou si vous n'aimez pas le côté aléatoire pour déterminer les valeurs de caractéristiques, utilisez la
        série suivante : 15, 14, 13, 12, 10, 8.
      </p>
      <p className="encadre">
        <strong>CRÉATION DE BRUENOR, ÉTAPE 3
          <br/>
        </strong>
        <br/>
        Bob décide d'utiliser la distribution de valeurs standards (15, 14, 13, 12, 10, 8) pour les caractéristiques de
        Bruenor. Puisque c'est un guerrier, il met la plus haute valeur, 15, en Force. La valeur suivante, 14, en
        Constitution. Bruenor pourrait être un casse-cou, mais Bob veut que le nain soit plus vieux, plus sage, et bon
        leader, il place donc de bonnes valeurs en Sagesse et Charisme. Après avoir fait les modifications dues à la
        race (augmentation de la Constitution et de la Force de +2), les valeurs et modificateurs de caractéristiques de
        Bruenor sont les suivants : Force 17 (+3), Dextérité 10 (+0), Constitution 16 (+3), Intelligence 8 (-1),
        Sagesse 13 (+1), Charisme 12 (+1).
        <br/>
        <br/>
        Bob finalise les points de vie de Bruenor : 10 + son modificateur de Constitution (+3) pour un total de 13
        points de vie.
      </p>
      <p>
        Maintenant, affectez et notez chaque nombre en face de l'une des six caractéristiques, afin d’avoir une valeur
        en Force, Dextérité, Constitution,
        Intelligence, Sagesse et Charisme. Puis appliquez les modificateurs de caractéristiques de votre race.
      </p>
      <p>
        Déterminez ensuite vos <strong>modificateurs de caractéristiques</strong> en vous référant à la table
        ci-dessous. Pour calculer la valeur d'un modificateur sans utiliser la table, soustrayez 10 à la valeur, et
        divisez le résultat par 2, en conservant la partie entière inférieure. Inscrivez chaque modificateur à côté de
        la caractéristique correspondante.
      </p>
      <table>
        <tbody>
        <tr>
          <th style={{textAlign: "center"}}>Valeur de
            <br/>
            Caractéristique
          </th>
          <th style={{textAlign: "center"}}>Modificateur</th>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>1</td>
          <td style={{textAlign: "center"}}>-5</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>2-3</td>
          <td style={{textAlign: "center"}}>-4</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>4-5</td>
          <td style={{textAlign: "center"}}>-3</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>6-7</td>
          <td style={{textAlign: "center"}}>-2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>8-9</td>
          <td style={{textAlign: "center"}}>-1</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>10-11</td>
          <td style={{textAlign: "center"}}>+0</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>12-13</td>
          <td style={{textAlign: "center"}}>+1</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>14-15</td>
          <td style={{textAlign: "center"}}>+2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>16-17</td>
          <td style={{textAlign: "center"}}>+3</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>18-19</td>
          <td style={{textAlign: "center"}}>+4</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>20-21</td>
          <td style={{textAlign: "center"}}>+5</td>
        </tr>
        </tbody>
      </table>
      <h4>Variante : Personnalisation des valeurs de caractéristiques</h4><p>
      Si votre MD l'autorise, vous pouvez
      utiliser la méthode suivante pour déterminer vos valeurs de caractéristiques. Cette méthode vous permet de
      construire un personnage en choisissant une valeur pour chaque caractéristique.
    </p>
      <p>
        Vous avez 27 points à
        répartir dans vos caractéristiques. Le coût de chaque valeur est indiqué sur la table ci-dessous. Par exemple,
        une valeur de 14 coûte 7 points. En utilisant cette méthode, 15 est la plus haute valeur achetable avant
        d'appliquer les modificateurs raciaux, et vous ne pouvez avoir une valeur inférieure à 8. Cette méthode vous
        permet de créer une série de caractéristiques avec 3 valeurs élevées et 3 valeurs faibles (15, 15, 15, 8, 8,
        8), une série où les valeurs sont quasiment égales (13, 13, 13, 12, 12, 12), ou toute autre série entre ces deux
        extrêmes.
      </p>
      <p className="encadre">
        <strong>CONSTRUCTION RAPIDE</strong>
        <br/>
        <br/>
        Chaque description de classe comporte un encart offrant des suggestions pour construire rapidement un personnage
        de la classe concernée, indiquant comment attribuer vos plus hautes valeurs de caractéristiques, un historique
        adapté à la classe, et une liste des sorts de départ si besoin.
      </p>
      <table>
        <tbody>
        <tr>
          <th>Valeur</th>
          <th>Coût</th>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>8</td>
          <td style={{textAlign: "center"}}>0</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>9</td>
          <td style={{textAlign: "center"}}>1</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>10</td>
          <td style={{textAlign: "center"}}>2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>11</td>
          <td style={{textAlign: "center"}}>3</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>12</td>
          <td style={{textAlign: "center"}}>4</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>13</td>
          <td style={{textAlign: "center"}}>5</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>14</td>
          <td style={{textAlign: "center"}}>7</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>15</td>
          <td style={{textAlign: "center"}}>9</td>
        </tr>
        </tbody>
      </table>
      <h3>4) Décrire son personnage</h3>
      <p className="encadre">
        <strong>CRÉATION DE BRUENOR, ÉTAPE 4
          <br/>
        </strong>
        <br/>
        Bob continu de remplir la feuille de Bruenor : son nom, son genre (homme), sa taille, son poids et son
        alignement
        (Loyal Bon). Sa bonne Force et sa haute Constitution suggèrent qu'il est en bonne santé, athlétique, alors que
        son Intelligence plus faible indique un manque d'attention.
        <br/>
        <br/>
        Bob décide que Bruenor descend d'une noble lignée, mais que son clan fut chassé de ses terres dans la jeunesse
        du nain. Il a grandit en travaillant comme forgeron dans un village éloigné d'Icewind Dale. Mais Bruenor a une
        destiné héroïque – il doit reconquérir ses terres – donc Bob choisit l'historique héros du peuple. Il note les
        maîtrises et les aptitudes spéciales conférées par cet historique.
        <br/>
        <br/>
        Bob a une idée assez précise de la personnalité de Bruenor,
        il ignore donc les traits de personnalités indiqués dans l'historique, et note plutôt que Bruenor est un nain
        attentionné et sensible qui aime ses amis et ses alliés, mais qu'il cache ce cœur tendre derrière un
        comportement bourru et agressif. Il choisit l'idéal d'Équité dans la liste de l'historique, indiquant ainsi que
        Bruenor pense que personne n'est au-dessus des lois.
        <br/>
        <br/>
        De par son histoire, le lien de Bruenor est
        évident : il souhaite un jour reprendre Mithril Hall, sa terre natale, au dragon des ombres qui en a chassé
        les nains. Son défaut est lié à sa nature attentionnée - il a un préjugé favorable envers les orphelins et les
        âmes rétives, et il montre parfois de la miséricorde sans être sûr du résultat.
      </p>
      <p>
        Une fois déterminée la base de jeu de votre personnage, il est temps de l'étoffer et de lui donner « vie ».
        Votre personnage a besoin d'un nom. Passez quelques instants à réfléchir à quoi il ressemble et comment il se
        comporte.
      </p>
      <p>
        En utilisant les informations du chapitre <a href="/regles/historiques/">Personnalité et Historique</a>, vous
        pouvez façonner l'apparence physique et les traits de personnalités de votre personnage. Choisissez
        son <strong>alignement</strong> (le compas moral qui guide ses décisions), et ses <strong>idéaux</strong>.
        Identifiez également ce à quoi votre personnage tient le plus, les <strong>liens</strong>, et
        les <strong>défauts</strong> qui pourraient un jour l'ébranler.
      </p>
      <p>
        L'<a href="/regles/historiques/#historiques">historique</a> de votre personnage définit son histoire, son
        occupation habituelle, et sa place dans le monde de D&amp;D. Votre MD peut vous proposer d'autres historiques en
        plus que ceux décrits ici, et peut éventuellement travailler avec vous pour construire un historique à la mesure
        de votre concept de personnage.
      </p>
      <p>
        Un historique donne à votre personnage une aptitude spécifique et la maîtrise de deux compétences, et
        éventuellement un accès à des langues additionnelles ou la maîtrise de certains outils. Notez toutes ces
        informations sur la feuille de personnages.
      </p>
      <h4>Les caractéristiques de votre personnage</h4><p>
      Prenez en compte les valeurs de caractéristiques et la race de votre personnage pour
      détailler son apparence et sa personnalité. Un personnage très fort doté d'une faible intelligence devrait
      penser et agir bien différemment d'un personnage très intelligent, mais ayant peu de force.
    </p>
      <p>
        Par exemple,
        une Force importante correspond habituellement à un corps athlétique et robuste, alors qu'un personnage doté
        d'une Force faible sera efflanqué ou rondouillard.
        <br/>
        Une haute Dextérité indiquera probablement souplesse et minceur, à l'inverse, un personnage avec une faible
        dextérité sera dégingandé et maladroit ou lourd et boudiné.
        <br/>
        Un personnage de forte Constitution sera en bonne santé et énergique, à l'inverse, le personnage sera maladif ou
        fragile.
        <br/>
        Une haute Intelligence est l'apanage d'un personnage studieux et très curieux,
        alors qu'un langage simple ou une mémoire évasive indiquera une faible intelligence.
        <br/>
        Un personnage de forte Sagesse aura un bon jugement, de l'empathie et sera conscient de ce qui se passe autour
        de lui. À
        l'inverse, le personnage sera étourdi, téméraire ou inconscient.
        <br/>
        Une présence gracieuse ou intimidante,
        couplée à une forte confiance en soi, est l'apanage d'un fort Charisme. À l'opposé, le personnage sera rude,
        ou peu loquace, ou encore timide.
      </p>
      <h3>5) Choisir son équipement</h3><p>
      Votre classe et votre historique
      déterminent l’<strong>équipement de départ</strong> de votre personnage, y compris ses armes, son armure et
      tout autre équipement d'aventurier. Notez l'équipement sur votre feuille de personnage, vous en trouverez les
      descriptions dans le chapitre <a href="/regles/equipement/materiel/">Équipement</a>.
    </p>
      <p>
        Au lieu de choisir les présélections des classes et des historiques, vous pouvez acheter et choisir l’équipement
        de votre personnage. Comme indiqué dans le chapitre <a href="/regles/equipement/">Équipement</a>, vous disposez
        d'un nombre de <strong>pièces d'or</strong> (po), à dépenser selon votre classe. Des listes d'équipements assez
        complètes sont présentes dans ce même chapitre. Si vous le souhaitez, votre personnage peut aussi avoir
        gratuitement une <strong><a href="/regles/equipement/babioles/">babiole</a></strong>.
      </p>
      <p>
        Votre valeur de Force indique ce que vous pouvez porter. Essayez de ne pas acheter un poids total d'équipement
        de plus de 7,5 fois votre valeur de Force en kilogramme. Le chapitre <a href="/regles/caracteristiques/">Utiliser
        les caractéristiques</a> précise les règles sur les capacités de charge.
      </p>
      <h4>Classe d'armure</h4>
      <p className="encadre">
        <strong>CRÉATION DE BRUENOR, ÉTAPE 5
          <br/>
        </strong>
        <br/>
        Bob inscrit l'équipement de départ de la classe de guerrier et de l'historique héros du peuple. Son équipement
        de départ comprend une cotte de mailles et un bouclier, qui combinés donne à Bruenor une CA de 18.
        <br/>
        <br/>
        Pour les armes du nain, Bob choisit une hache d'armes et deux hachettes. La hache d'armes est une arme de corps
        à corps, donc Bruenor utilise son modificateur de Force pour l'attaque comme pour les dégâts. Son bonus
        d'attaque est égal à son modificateur de Force (+3) plus son bonus de maîtrise (+2), ce qui donne un total de
        +5. La hache d'armes fait 1d8 dégâts tranchants, et Bruenor y ajoute son modificateur de Force lorsqu'il touche,
        pour un total de 1d8+3 dégâts tranchants. Lorsqu'il lance une de ses hachettes, Bruenor utilise le même bonus
        d'attaque que ci-dessus
        (les hachettes, en tant qu'armes de lancer, utilisent la Force pour l'attaque et les dégâts), et l'arme fait
        donc 1d6+3 dégâts tranchants lorsqu'elle touche.
      </p>
      <p>
        Votre <strong>classe d'armure</strong> (CA) représente l'aptitude de votre personnage à éviter les coups en
        combat. Votre armure, votre bouclier et votre modificateur de Dextérité contribuent à votre CA. Tous les
        personnages ne portent cependant pas d'armure ou n'utilisent pas un bouclier.
      </p>
      <p>
        Sans armure, ni bouclier, la CA de votre personnage est égale à 10 + son modificateur de Dextérité. Si votre
        personnage porte une armure et/ou utilise un bouclier, calculez votre CA comme indiqué dans les règles sur
        les <a href="/regles/equipement/armures/">armures</a>. Notez votre valeur de CA sur votre feuille de personnage.
      </p>
      <p>
        Votre personnage doit maîtriser le port de l'armure ou l'usage du bouclier pour pouvoir bénéficier de leurs
        pleins effets. Vos maîtrises en port d'armure et en utilisation de bouclier sont déterminées par votre classe.
        Il y a des inconvénients à porter une armure ou à utiliser un bouclier si vous ne possédez pas la maîtrise
        nécessaire, comme indiqué dans le chapitre <a href="/regles/equipement/armures/">Équipement</a>.
      </p>
      <p>
        Certains sorts et certaines aptitudes de classes peuvent modifier le mode de calcul de votre CA. Si vous avez
        plusieurs aptitudes qui modifient le mode de calcul de base, vous ne devez en choisir qu'une.
      </p>
      <h4>Armes</h4>
      <p>
        Pour chaque arme que le personnage porte,
        calculez son bonus à l'attaque et aux dégâts avec cette arme.
      </p>
      <p>
        Lorsque vous attaquez avec une arme, vous lancez un d20 et ajoutez au résultat votre bonus de maîtrise
        (seulement si vous maîtrisez cette arme), puis le modificateur de caractéristique approprié.
      </p>
      <ul>
        <li>Pour les attaques avec une arme de <strong>corps à corps</strong>, utilisez votre modificateur de Force
          pour l'attaque et les dégâts. Une arme ayant la propriété finesse, telle une rapière, vous permet toutefois
          d'utiliser la Dextérité au lieu de la Force.
        </li>
        <li>Pour les attaques avec une arme à <strong>distance</strong>, utilisez votre modificateur de Dextérité pour
          l'attaque et pour les dégâts. Une arme de corps à corps ayant la propriété lancer, comme les hachettes, vous
          permet toutefois d'utiliser la Force au lieu de la Dextérité.
        </li>
      </ul>
      <h3>6) Jouer ensemble</h3>
      <p>
        La plupart des personnages de D&amp;D ne travaillent pas seuls. Chaque personnage joue un rôle au sein
        d'un <strong>groupe</strong> d'aventuriers qui travaillent ensemble pour un objectif commun. Le travail d'équipe
        et la collaboration améliorent grandement les chances de votre groupe de survivre aux nombreux périls dans les
        mondes de D&amp;D. Parlez-en à vos camarades de jeu et à votre MD pour décider si vos personnages se
        connaissent, comment ils se sont rencontrés, et quelles sortes de quêtes le groupe pourrait entreprendre.
      </p>
      <p className="auteur">Traduit par Papyrol.
      </p>
    </Main>
  )
}

export const PlayerRaces = () => {
  return (
    <Main name={"Races"} lastUnit={true}>
      <p>
        Une visite dans l'une des plus grandes cités des mondes de D&amp;D, que ce soit Waterdeep, la cité libre de
        Faucongris ou même Sigil, la cité des Portes, submerge les sens. On y entend des discussions dans de multiples
        langues. Les odeurs des différentes cuisines culturelles se mêlent aux émanations des rues bondées et des
        conditions sanitaires déplorables. Les bâtiments de diverses architectures et styles se côtoient et indiquent
        les origines variées des habitants. Et les gens eux-mêmes – des personnes de tailles, de formes et de couleurs
        différentes, habillées dans divers styles bariolés – représentent différentes races, des petits halfelins et
        robustes nains aux elfes sveltes et majestueux se mélangeant avec de nombreuses ethnies humaines.
      </p>
      <p>Éparpillés parmi ce peuple bigarré, on peut rencontrer des membres d'une race vraiment exotique
        : un puissant drakéide ici, traçant son chemin dans la foule ; là, un tieffelin narquois espionnant depuis les
        ombres de la malice dans les yeux. Un groupe de gnomes rit aux éclats, alors que l'un d'eux active un ingénieux
        jouet de bois, qui se meut de lui-même. Demi-elfes et demi-orcs travaillent et vivent aux côtés des humains,
        sans appartenir pleinement aux races de leurs parents respectifs. Et par ici, à l'écart des rayons solaires, se
        dresse un drow solitaire, un fugitif des mondes sous-terrains, tentant de tracer sa voie dans un monde qui
        craint les membres de sa race.
      </p>
      <p>← <strong>Voir le menu à gauche pour naviguer</strong>.
      </p>
      <h2>Choisir une race</h2><p className="encadre">
      <strong>RACES NON COMMUNES</strong>
      <br/>
      <br/>
      Certaines races sont rares. Elles
      n'existent pas dans tous les univers de D&amp;D, et même lorsqu'elles existent, elles sont moins répandues que
      les nains, les elfes, les halfelins et les humains.
      <br/>
      <br/>
      Dans les villes cosmopolites du multivers D&amp;D,
      la plupart des gens ne seront pas surpris de rencontrer des membres des races même les plus exotiques. Mais dans
      les petites villes et les villages qui parsèment la campagne les choses sont différentes. Les gens ordinaires ne
      sont pas habitués à voir des membres de ces races, et réagissent en
      conséquence.
      <br/>
      <br/>
      <em><strong>Demi-elfe</strong></em>. Bien que beaucoup de gens n'aient jamais vu un
      demi-elfe, pratiquement tout le monde sait qu'ils existent. L'arrivée d'un demi-elfe étranger est généralement
      suivie de commérages dans son dos et de regards volés dans la salle commune, plutôt que de confrontations ou de
      curiosités ouvertes.
      <br/>
      <br/>
      <em><strong>Demi-orc</strong></em>. Il est généralement prudent de supposer qu'un
      demi-orc es belliqueux et prompt à la colère, c'est pourquoi les gens se regardent aux abords d'un demi-orc
      inconnu. Les commerçants pourraient subrepticement cacher des biens de valeur ou des objets fragiles quand un
      demi-orc entre, et les gens sortiront discrètement d'une taverne, anticipant qu'une bagarre éclatera
      bientôt.
      <br/>
      <br/>
      <em><strong>Drakéide</strong></em>. Il est facile de supposer qu'un drakéide est un monstre,
      surtout si ses écailles trahissent un patrimoine chromatique. Mais à moins que le drakéide ne commence à
      souffler du feu et ne provoque des destructions, les gens sont plutôt susceptibles de réagir avec prudence
      qu'avec de la peur pure et simple.
      <br/>
      <br/>
      <em><strong>Gnome</strong></em>. Les gnomes ne ressemblent pas à une
      menace et sont capables de rapidement désarmer les soupçons avec leur bonne humeur. Les gens ordinaires sont
      souvent curieux au sujet des gnomes, et même s'ils n'en ont probablement jamais vu un avant, ils seront rarement
      hostiles ou craintifs à leur égard.
      <br/>
      <br/>
      <em><strong>Tieffelin</strong></em>. Si les demi-orcs sont
      accueillis avec prudence, les tieffelins font l'objet d'une peur surnaturelle. Le côté maléfique de leur origine
      est clairement visible dans leur apparence, et pour la plupart des gens un tieffelin pourrait très bien être un
      diable venu tout droit des Neuf enfers. Les gens peuvent faire des signes de rejet lorsqu'un tieffelin approche,
      traverser la rue pour éviter de passer à proximité, ou fermer les portes d'une boutique avant qu'un tieffelin ne
      puisse y entrer.
    </p>
      <p>
        Les humains sont les personnages les plus fréquents dans les mondes de D&amp;D, mais ils vivent et travaillent
        aux côtés de nains, elfes, halfelins et d'innombrables autres espèces fantastiques. Votre personnage appartient
        à une de ces races. Toutes les races intelligentes du multivers ne sont cependant pas appropriées pour être
        incarnées par un joueur. Les elfes, les halfelins, les humains et les nains sont les races les plus communes
        pour composer un groupe dans une partie typique. Les autres races et sous-races sont moins fréquentes en tant
        qu'aventuriers.
      </p>
      <p>
        Le choix de la race affecte de nombreux aspects de votre personnage. Il
        établit des qualités fondamentales qui vont marquer toute la carrière d'aventurier de votre personnage. Lorsque
        vous prenez cette décision, gardez bien à l'esprit le genre de personnage que vous voulez jouer. Par exemple, un
        halfelin pourrait être un bon choix pour un roublard sournois, un nain fait un bon guerrier rude, et un elfe
        peut être un parfait maître de la magie des arcanes. La race de votre personnage affecte non seulement les
        valeurs de vos caractéristiques et vos traits, mais fournit également d'importants repères pour la construction
        de l'histoire de votre personnage. La description de chaque race comporte des informations pour vous aider à
        jouer le rôle de cette race, sa personnalité, son apparence physique, les caractéristiques de sa société et les
        tendances raciales de son alignement. Ces détails sont des suggestions pour vous aider à réfléchir à votre
        personnage. Mais les aventuriers peuvent fortement différer de la norme de leur race. Dans ce cas, il est
        intéressant de se demander pourquoi votre personnage est différent ; cela vous sera utile pour réfléchir à l'<a
        href="/regles/historiques/#historiques">historique</a> et à la personnalité de votre personnage.
      </p>
      <h3>Traits Raciaux</h3><p>
      La description de chaque race indique les traits raciaux communs aux membres de cette race. Les
      entrées suivantes sont présentes pour chacune des races décrites.
    </p>
      <h4>Augmentation de caractéristiques</h4>
      <p>
        Toute race ajuste une ou plusieurs caractéristiques du personnage.
      </p>
      <h4>Âge</h4><p>
      Ce trait indique l'âge à
      partir duquel un membre de la race est considéré comme adulte, ainsi que son espérance de vie. Cette
      information peut vous aider à déterminer l'âge de départ de votre personnage en début de jeu. Vous pouvez
      choisir n'importe quel âge pour votre personnage, qui pourrait par exemple expliquer certaines valeurs de vos
      caractéristiques. Par exemple, si vous jouez un personnage jeune ou très vieux, l'âge pourrait expliquer une
      faible valeur de Force ou de Constitution, et un âge avancé pourrait justifier une forte Intelligence ou
      Sagesse.
    </p>
      <p>
      </p>
      <h4>Taille</h4><p>
      Les personnages de la majorité des races sont de taille Moyenne, une
      catégorie de taille qui englobe des hauteurs d'en gros 1,20 m à 2,40 m. Quelques races sont de taille Petite
      (entre 60 cm et 1,20 m), et certaines règles de jeu les affectent différemment. La plus importante d'entre
      elles précise que les personnages de taille Petite ont des difficultés à manier des armes lourdes, comme cela
      l'est indiqué dans le chapitre <a href="/regles/equipement/armes/">Équipement</a>.
    </p>
      <h4>Vitesse</h4><p>
      Votre
      vitesse détermine la distance que vous pouvez parcourir lors des <a
      href="/regles/aventure/">Déplacements</a> et lors des <a href="/regles/combat/">Combats</a>.
    </p>
      <h4>Langues</h4><p>
      De par sa race, votre personnage peut parler, lire et écrire certaines langues. Le
      chapitre <a href="/regles/historiques/">Personnalité et Historique</a> énumère les langues les plus communes
      du multivers de D&amp;.
    </p>
      <h4>Sous-races</h4><p>
      Quelques races sont subdivisées en sous-races. Un personnage
      d'une sous-race possède les traits de la race « mère » en plus des traits de la sous-race choisie. Les
      relations entre les sous-races varient de manière importante selon les races et les mondes dans lesquels ils
      vivent. Par exemple, dans le monde de campagne de Dragonlance, les nains des montagnes et ceux des collines
      vivent ensemble en tant que clans différents d'un même peuple, alors que dans les Royaumes Oubliées ces
      peuples vivent dans des royaumes séparés sous les noms de nains d'écu et nains d'or, respectivement.
    </p>
      <p>
        <img className="center" title="Races" src="assets/regles/races.jpg" alt="Races" width="800" height="934"/>
      </p>

    </Main>
  )
}

export const PlayerClasses = () => {
  return (
    <Main name={"Classes"} lastUnit={true}>
      <div style={{background:"red",border:"solid 1px black",color:"white",textAlign:"center",fontWeight:"bold"}}>
        Attention les options de classes et de sous-classes ne sont pas complète. Afin d'avoir accès à toutes les
        options. Veuillez copier la feuille de calcule google suivante:
        <br/>
        <Link style={{color:"black"}}
          to="https://docs.google.com/spreadsheets/d/1m4IoWYuterc7BhqYoGxg3w90uehZtaxyqQQKeAKpECA/edit?gid=1272470153#gid=1272470153">
          https://docs.google.com/spreadsheets/d/1m4IoWYuterc7BhqYoGxg3w90uehZtaxyqQQKeAKpECA
        </Link>
        <br/>
        Veuillez m'excusez pour cela.
      </div>
      <p>
        Les aventuriers sont des personnes extraordinaires poussées par la soif de l'excitation vers une vie que
        d'autres n'oseraient jamais imaginer. Ce sont des héros, contraints d'explorer les endroits les plus sombres et
        d'aborder des défis que les femmes et les hommes communs ne pourraient surmonter.
      </p>
      <p>
        La classe est la première définition de ce que votre personnage peut faire. C'est plus qu'un métier, c'est la
        vocation de votre personnage. La classe définit la manière dont vous pensez le monde et interagissez avec lui,
        ainsi que votre relation avec les autres et avec les autorités. Un guerrier, par exemple,
        pourrait voir le monde en termes pragmatiques de stratégie et de manœuvres, et se considérer comme un simple
        pion dans un jeu beaucoup plus grand que lui. Un clerc, en revanche, peut se considérer comme un serviteur dans
        le plan d'un dieu ou dans un conflit entre différentes divinités. Là où le guerrier aura des contacts avec les
        membres d'une compagnie de mercenaires ou d'une armée, le clerc pourrait connaître un certain nombre de
        religieux, de paladins ou de dévots qui partagent sa foi.
      </p>
      <p>
        Votre classe vous donne accès à différentes capacités spéciales, telles la maîtrise d'une arme ou d'une armure,
        ou bien encore la possibilité de lancer des sorts de magicien. À bas niveau, votre classe ne vous donne accès
        qu'à deux ou trois capacités, mais au fur et à
        mesure que vous montez de niveau, vous en gagnerez plus et vos capacités antérieures s'amélioreront souvent.
        Chaque classe présente un tableau qui résume les avantages que vous gagnez à tous les niveaux, ainsi qu'une
        explication détaillée de chacun d'eux.
      </p>
      <p>
        Souvent les aventuriers progressent dans plus d'une classe. Un roublard pourrait changer la direction de sa vie
        et passer à la classe de clerc, tout en continuant à progresser en tant que roublard. Les elfes sont connus pour
        combiner la maîtrise martiale et la formation magique, et ainsi avancer dans les classes de guerrier et de
        magicien simultanément. Les règles optionnelles pour gérer cela seront présentées dans le <em>Manuel des
        Joueurs</em>.
      </p>
      <p>← <strong>Voir le menu à gauche pour naviguer</strong>.
      </p>
      <p>
        <img className="center" title="Classes" src="assets/regles/classes.jpg" alt="Classes"
             width="800" height="1003"/>
      </p>
    </Main>
  )
}

export const PlayerBackground = () => {
  return (
    <Main name={"Historique"} lastUnit={true}>
      <p>
        Les personnages ne sont pas définis uniquement par leur race et leur classe. Ce sont des individus avec leurs
        propres histoires, intérêts, connexions et capacités en plus de celles définies par la classe et la race. Ce
        chapitre présente des détails pour différencier les personnages les uns des autres, depuis les bases comme le
        nom et la description physique, les règles d'historiques et les langues, jusqu'aux subtilités de la personnalité
        et de l'alignement.
      </p>
      <p>←&nbsp;<strong>Voir le menu à gauche pour naviguer</strong>.
      </p>
      <h2><a id="details" className="ancre" href="/regles/historiques/#details">Détails du personnage</a></h2><p>
      Le
      nom de votre personnage et sa description physique seront probablement les premières choses que les autres
      joueurs autour de la table vont apprendre de vous. Cela vaut donc la peine de penser à la façon dont ces
      caractéristiques reflètent le personnage que vous voulez jouer.
    </p>
      <h3>Nom</h3><p>
      La description de la race de
      votre personnage propose plusieurs noms. Ajoutez-y votre touche, même si vous prenez simplement un nom de
      cette liste.
    </p>
      <h3>Sexe</h3><p>
      Vous pouvez jouer un personnage masculin ou féminin, cela n'influencera ni vos
      bonus ni vos malus. Mais profitez-en pour penser à comment votre personnage se place - ou ne se place pas -
      vis-à-vis des standards habituels de sa culture pour ce qui est du sexe, du genre et du comportement sexuel.
      Par exemple, un clerc elfe noir masculin défie les divisions traditionnelles du genre dans la société drow, ce
      qui pourrait expliquer pourquoi votre personnage a quitté la société et est remonté à la surface.
    </p>
      <p>
        Vous n'avez pas besoin de vous cantonner à une vision binaire du sexe et du genre. Le dieu elfe <a
        href="/univers/pantheon/corellon-larethian/">Corellon Larethian</a> est par exemple souvent perçu comme
        androgyne, et certains elfes du multivers sont faits à l'image de Corellon. Vous pourriez également jouer un
        personnage de sexe féminin qui se présente comme étant un homme, ou un homme qui se sentirait piégé dans un
        corps de femme, ou une naine barbue qui a horreur qu'on la prenne pour un homme. De la même façon, c'est à
        vous de décider de l'orientation sexuelle de votre personnage.
      </p>
      <h3>Taille et poids</h3><p>
      Vous pouvez
      décider de la taille et du poids de votre personnage en utilisant les informations fournies dans la
      description de votre race ou en les tirant au hasard sur la table ci-dessous. Pensez à ce que les valeurs des
      caractéristiques de votre personnage peuvent signifier en ce qui concerne votre taille et votre poids. Un
      personnage faible mais agile pourrait être mince. Un personnage fort et costaud pourrait être grand ou juste
      lourd.
    </p>
      <p>
        Si vous le désirez, vous pouvez tirer au hasard la taille et le poids de votre personnage à
        l'aide de la table ci-dessous. Le jet de dés pour la colonne Modificateur de taille détermine la taille
        supplémentaire du personnage à ajouter à la Taille de base. Ce même nombre, multiplié par le jet de dés (ou le
        nombre) indiqué dans la colonne Modificateur de poids, détermine le poids supplémentaire du personnage à
        ajouter au Poids de base.
      </p>
      <table>
        <tbody>
        <tr>
          <td>
            <br/>
            <strong>Race</strong></td>
          <td style={{textAlign: "center"}}><strong>Taille</strong>
            <br/>
            <strong>de base</strong></td>
          <td style={{textAlign: "center"}}><strong>Modificateur</strong>
            <br/>
            <strong>de taille (cm)</strong></td>
          <td style={{textAlign: "center"}}><strong>Poids</strong>
            <br/>
            <strong>de base</strong></td>
          <td style={{textAlign: "center"}}><strong>Modificateur</strong>
            <br/>
            <strong>de poids (kg)</strong></td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Humain</td>
          <td style={{textAlign: "center"}}>1,40 m</td>
          <td style={{textAlign: "center"}}>+2d10 x 2,50</td>
          <td style={{textAlign: "center"}}>55 kg</td>
          <td style={{textAlign: "center"}}>x 2d4 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Haut-elfe</td>
          <td style={{textAlign: "center"}}>1,35 m</td>
          <td style={{textAlign: "center"}}>+2d10 x 2,50</td>
          <td style={{textAlign: "center"}}>45 kg</td>
          <td style={{textAlign: "center"}}>x 1d4 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Elfe des bois</td>
          <td style={{textAlign: "center"}}>1,35 m</td>
          <td style={{textAlign: "center"}}>+2d10 x 2,50</td>
          <td style={{textAlign: "center"}}>50 kg</td>
          <td style={{textAlign: "center"}}>x 1d4 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Drow</td>
          <td style={{textAlign: "center"}}>1,30 m</td>
          <td style={{textAlign: "center"}}>+2d6 x 2,50</td>
          <td style={{textAlign: "center"}}>37,5 kg</td>
          <td style={{textAlign: "center"}}>x 1d6 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Halfelin</td>
          <td style={{textAlign: "center"}}>80 cm</td>
          <td style={{textAlign: "center"}}>+2d4 x 2,50</td>
          <td style={{textAlign: "center"}}>17,5 kg</td>
          <td style={{textAlign: "center"}}>/ 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Nain des collines</td>
          <td style={{textAlign: "center"}}>1,10 m</td>
          <td style={{textAlign: "center"}}>+2d4 x 2,50</td>
          <td style={{textAlign: "center"}}>57,5 kg</td>
          <td style={{textAlign: "center"}}>x 2d6 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Nain des montagnes</td>
          <td style={{textAlign: "center"}}>1,20 m</td>
          <td style={{textAlign: "center"}}>+2d4 x 2,50</td>
          <td style={{textAlign: "center"}}>65 kg</td>
          <td style={{textAlign: "center"}}>x 2d6 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Demi-elfe</td>
          <td style={{textAlign: "center"}}>1,45 m</td>
          <td style={{textAlign: "center"}}>+2d8 x 2,50</td>
          <td style={{textAlign: "center"}}>55 kg</td>
          <td style={{textAlign: "center"}}>x 2d4 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Demi-orc</td>
          <td style={{textAlign: "center"}}>1,50 m</td>
          <td style={{textAlign: "center"}}>+2d10 x 2,50</td>
          <td style={{textAlign: "center"}}>70 kg</td>
          <td style={{textAlign: "center"}}>x 2d6 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Drakéide</td>
          <td style={{textAlign: "center"}}>1,70 m</td>
          <td style={{textAlign: "center"}}>+2d8 x 2,50</td>
          <td style={{textAlign: "center"}}>87,5 kg</td>
          <td style={{textAlign: "center"}}>x 2d6 / 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Gnome</td>
          <td style={{textAlign: "center"}}>90 cm</td>
          <td style={{textAlign: "center"}}>+2d4 x 2,50</td>
          <td style={{textAlign: "center"}}>17,5 kg</td>
          <td style={{textAlign: "center"}}>/ 2</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>Tieffelin</td>
          <td style={{textAlign: "center"}}>1,45 m</td>
          <td style={{textAlign: "center"}}>+2d8 x 2,50</td>
          <td style={{textAlign: "center"}}>55 kg</td>
          <td style={{textAlign: "center"}}>x 2d4 / 2</td>
        </tr>
        </tbody>
      </table>
      <p>
        Par exemple, Tika est une humaine qui mesure 1,45 m plus 2d10 x 2,50 cm. Le joueur lance les 2d10 et obtient un
        total de 12, de sorte que Tika mesure 1,45 m + (12 x 2,50) cm soit 1,75 m de hauteur.
        <br/>
        Ensuite, le joueur utilise ce même résultat de 12 et le multiplie par 2d4 / 2 kg. Son jet de 2d4 donne 3, donc
        Tika pèse 50 + (12 x 3 / 2) kg, soit un total de 68 kg.
      </p>
      <h3>Autres caractéristiques physiques</h3><p>
      Choisissez l'âge
      de votre personnage, la couleur de ses cheveux, de ses yeux et de sa peau. Pour ajouter une touche
      distinctive, vous pouvez donner à votre personnage une caractéristique physique inhabituelle comme une
      cicatrice, un tatouage ou le fait qu'il boîte.
    </p>
      <h3><a id="alignement" className="ancre"
             href="/regles/historiques/#alignement">Alignement</a>
      </h3><p>
      Une créature typique dans les mondes de Dungeons &amp; Dragons possède un alignement qui décrit de façon
      générale ses attitudes morales et personnelles. L'alignement est une combinaison de deux facteurs : l'un
      identifie la morale (bon, mauvais ou neutre), et l'autre décrit les attitudes envers la société et l'ordre
      (loyal, chaotique ou neutre). Ainsi, les neuf combinaisons possibles définissent les alignements.
    </p>
      <p>
        Les brefs résumés qui suivent des neuf alignements décrivent le comportement typique d'une créature pour un
        alignement donné. Chaque individu peut toutefois s'écarter considérablement de ce comportement typique ; peu de
        gens sont parfaitement et constamment fidèles aux préceptes de leur alignement.
      </p>
      <p>
        <strong>Loyal
          bon</strong> (LB). On peut compter sur ces créatures pour faire le bien dans le sens où la société l'entend.
        Les dragons d'or et les paladins sont souvent d'alignement loyal bon.
      </p>
      <p>
        <strong>Neutre bon</strong> (NB).
        Ces personnes font du mieux qu'elles peuvent pour aider les autres, en fonction de leurs besoins toutefois.
        Beaucoup des créatures célestes sont neutre bon.
      </p>
      <p>
        <strong>Chaotique bon</strong> (CB). Ces créatures agissent selon leur conscience, et ont peu d'égard pour ce
        que les autres attendent. Les dragons de cuivre et les licornes sont souvent d'alignement chaotique bon.
      </p>
      <p>
        <strong>Loyal neutre</strong> (LN). Ces individus agissent conformément à la loi, aux traditions ou suivants des
        codes personnels. Les modrons et beaucoup de magiciens et de moines sont d'alignement loyal neutre.
      </p>
      <p>
        <strong>Neutre</strong> (N) est l'alignement de ceux qui préfèrent rester à l'écart des questions morales et ne
        prennent pas parti, faisant ce qui leur semble le mieux à un moment donné. La plupart des druides et des
        villageois sont neutres.
      </p>
      <p>
        <strong>Chaotique
          neutre</strong> (CN). Ces créatures suivent leurs caprices, pensant à leur liberté personnelle avant tout.
        Beaucoup de roublards et de bardes sont d'alignement chaotique neutre.
      </p>
      <p>
        <strong>Loyal
          mauvais</strong> (LM). Ces créatures font méthodiquement ce qu'elles veulent, dans les limites d'un code de
        tradition, de la loyauté ou d'un ordre. Les diables et les dragons bleus sont souvent d'alignement loyal
        mauvais.
      </p>
      <p>
        <strong>Neutre mauvais</strong> (NM) est l'alignement de ceux qui font ce qu'ils veulent, sans aucune compassion
        ni aucun scrupule. Les yugoloths sont généralement d'alignement neutre mauvais.
      </p>
      <p>
        <strong>Chaotique mauvais</strong> (CM). Ces créatures agissent avec une violence arbitraire, stimulées par la
        cupidité, la haine ou la soif de sang. Les démons et les dragons rouges sont souvent d'alignement chaotique
        mauvais.
      </p>
      <h4>L'alignement dans le Multivers</h4><p>
      Pour de nombreuses créatures douées de raison,
      l'alignement est un choix moral. Les humains, les nains, les elfes et d'autres peuples peuvent choisir de
      suivre les voies du bien ou du mal, de la loi ou du chaos. Selon la légende, les dieux qui ont créé ces
      peuples leur ont laissé le choix de leur voie morale.
    </p>
      <p>
        L'alignement est une partie essentielle de la nature des célestes et des fiélons. Ces deux types de créatures
        sont associés à des plans d'existence métaphysiques, en particulier les plans extérieurs, qui incarnent certains
        alignements. Par exemple, la plupart des diables viennent des Neuf Enfers, un plan loyal mauvais. Un diable ne
        choisit donc pas d'être loyal mauvais ou de tendre vers cet alignement, il est loyal mauvais par essence. S'il
        cesse d'une manière ou d'une autre d'être loyal mauvais, il se transforme alors en quelque chose de nouveau,
        digne des légendes.
      </p>
      <p>
        La plupart des créatures qui ne sont pas douées de raison n'ont pas d'alignement, elles sont sans alignement.
        De telles créatures sont incapables de faire un choix moral ou éthique et agissent selon leur nature bestiale.
        Les requins sont des prédateurs sauvages, par exemple, mais ils ne sont pas mauvais ; ils sont sans alignement.
      </p>
      <h3><a id="langues" className="ancre" href="/regles/historiques/#langues">Langues</a></h3>
      <p>
        Votre race indique les langues que votre personnage peut parler par défaut, et votre historique peut vous donner
        accès à une ou plusieurs autres langues de votre choix. Notez ces langues sur votre feuille de personnage.
        Choisissez vos langues dans la table des langues standards, ou choisissez-en une qui est commune dans votre
        campagne. Avec la permission de votre MD, vous pouvez également les choisir dans la table des langues exotiques
        ou choisir une langue secrète, comme le jargon des voleurs ou la langue des druides.
      </p>
      <p>
        Certaines de ces langues sont en fait des familles de langues qui comportent de nombreux dialectes. Par exemple,
        le primordial comprend les dialectes de l'aérien, l'aquatique, l'igné et le terreux, un pour chacun des quatre
        plans élémentaires. Les créatures qui parlent différents dialectes d'une même langue peuvent communiquer entre
        elles.
      </p>
      <table>
        <tbody>
        <tr>
          <td><strong>Langues standards</strong></td>
          <td><strong>Races typiques</strong></td>
          <td><strong>Écriture</strong></td>
        </tr>
        <tr>
          <td>Commun</td>
          <td>Humains</td>
          <td>Commun</td>
        </tr>
        <tr>
          <td>Elfique</td>
          <td>Elfes</td>
          <td>Elfique</td>
        </tr>
        <tr>
          <td>Géant</td>
          <td>Ogres, géants</td>
          <td>Nain</td>
        </tr>
        <tr>
          <td>Gnome</td>
          <td>Gnomes</td>
          <td>Nain</td>
        </tr>
        <tr>
          <td>Gobelin</td>
          <td>Gobelinoïdes</td>
          <td>Nain</td>
        </tr>
        <tr>
          <td>Halfelin</td>
          <td>Halfelins</td>
          <td>Commun</td>
        </tr>
        <tr>
          <td>Nain</td>
          <td>Nains</td>
          <td>Nain</td>
        </tr>
        <tr>
          <td>Orc</td>
          <td>Orcs</td>
          <td>Nain</td>
        </tr>
        </tbody>
      </table>
      <table>
        <tbody>
        <tr>
          <td><strong>Langues exotiques</strong></td>
          <td><strong>Races typiques</strong></td>
          <td><strong>Écriture</strong></td>
        </tr>
        <tr>
          <td>Abyssal</td>
          <td>Démons</td>
          <td>Infernal</td>
        </tr>
        <tr>
          <td>Céleste</td>
          <td>Célestes</td>
          <td>Céleste</td>
        </tr>
        <tr>
          <td>Commun des profondeurs</td>
          <td>Créatures de l'Outreterre</td>
          <td>Elfique</td>
        </tr>
        <tr>
          <td>Draconique</td>
          <td>Dragons, drakéides</td>
          <td>Draconique</td>
        </tr>
        <tr>
          <td>Infernal</td>
          <td>Diables</td>
          <td>Infernal</td>
        </tr>
        <tr>
          <td>Primordial</td>
          <td>Élémentaires</td>
          <td>Nain</td>
        </tr>
        <tr>
          <td>Profond</td>
          <td>Beholders, flagelleurs mentaux</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Sylvestre</td>
          <td>Créatures féeriques</td>
          <td>Elfique</td>
        </tr>
        </tbody>
      </table>
      <h3><a id="personnalite" className="ancre" href="/regles/historiques/#personnalite">Personnalités</a></h3>
      <p>
        Concrétiser la personnalité de votre personnage, avec les traits, les manières, les habitudes, les croyances et
        les défauts qui donnent à une personne une identité unique, vous aidera à lui donner vie lors des parties.
        Quatre catégories de caractéristiques sont présentées ici : les traits, les idéaux, les liens et les défauts.
        Au-delà de ces catégories, pensez aux mots ou phrases favorites, aux tics et gestes habituels, aux vices et aux
        marottes de votre personnage, et tout ce que vous pouvez imaginer.
      </p>
      <p>
        Chaque historique présenté dans ce chapitre comprend des suggestions de personnalités que vous pouvez utiliser
        pour stimuler votre imagination. Vous n'êtes pas lié à ces options, mais c'est un bon point de départ.
      </p>
      <h4>Traits</h4><p>
      Donnez
      à votre personnage deux traits. Les traits sont un moyen simple pour vous aider à définir et différencier
      votre personnage. Vos traits doivent signifier quelque chose d'intéressant et d'amusant pour votre personnage.
      Ce devrait être des descriptions faites par le personnage lui-même de ce qui le démarque des autres. «&nbsp;Je
      suis intelligent » n'est pas un bon trait, car il décrit un grand nombre de personnes. «&nbsp;J'ai lu tous les
      livres de Candlekeep » dit par contre quelque chose de spécifique sur les intérêts et la disposition de votre
      personnage. Les traits peuvent décrire les choses que votre personnage aime, ses réalisations passées, ses
      aversions et ses craintes, ses manières ou bien encore l'influence de ses valeurs de caractéristiques.
    </p>
      <p>
        Une bonne manière pour réfléchir sur les traits est de prendre votre plus grande et plus faible caractéristique,
        et de définir un trait pour chacune d'elles. Cela peut être positif ou négatif. Vous pourriez travailler dur
        pour surmonter une faible valeur par exemple, ou être arrogant à propos de votre meilleure valeur.
      </p>
      <h4>Idéaux</h4><p>
      Décrivez un idéal qui anime votre personnage. Vos idéaux sont des choses
      auxquelles vous croyez fortement, des principes moraux et éthiques fondamentaux qui vous obligent à agir comme
      vous le faites. Les idéaux englobent tout, de vos objectifs de vie à vos croyances. Les idéaux pourraient
      répondre à une de ces questions : quels sont les principes que vous ne trahirez jamais ? Qu'est-ce qui
      pourrait vous faire faire des sacrifices ? Qu'est-ce qui vous pousse à agir et guide vos objectifs et vos
      ambitions ? Quelle est la chose la plus importante pour laquelle vous luttez ?</p>
      <p>
        Vous pouvez choisir des idéaux qui vous plaisent, mais l'alignement de votre personnage est une bonne chose pour
        commencer à les définir. Chaque historique propose six idéaux. Cinq d'entre eux sont liés à des aspects de
        l'alignement :
        loyal, chaotique, bon, mauvais ou neutre. Le dernier a plus à voir avec l'historique en particulier qu'avec des
        perspectives morales ou éthiques.
      </p>
      <h4>Liens</h4><p>
      Créez un lien pour votre personnage. Les liens
      représentent les connexions d'un personnage avec des personnes, des lieux et des événements dans le monde. Ils
      vous attachent à des choses de votre historique. Ils peuvent vous inspirer des actes d'héroïsme ou vous amener
      à agir contre vos propres intérêts s'ils sont menacés. Ils peuvent ressembler à des idéaux, définissant les
      motivations et les objectifs d'un personnage. Les liens pourraient répondre à ces questions : de qui vous
      souciez-vous le plus ? Avec quel lieu vous sentez-vous un lien particulier ? Quel est votre bien le plus
      précieux ?</p>
      <p>
        Vos liens peuvent être liés à votre classe, à votre historique, à votre race, ou à tout autre aspect de
        l'histoire ou de la personnalité du personnage. Vous pouvez également acquérir de nouveaux liens au cours de vos
        aventures.
      </p>
      <h4>Défauts</h4><p>
      Enfin, choisissez un défaut pour votre personnage. Ce défaut
      représente un vice, une contrainte, une peur ou une faiblesse. C'est quelque chose que quelqu'un d'autre
      pourrait exploiter pour vous affaiblir ou vous amener à agir contre vos intérêts. Un défaut est plus fort
      qu'un trait négatif. Un défaut peut répondre à ces questions : qu'est-ce qui vous exaspère ? Quel est la
      personne, le concept ou l'événement qui vous terrifie ? Quels sont vos vices ?</p>
      <h2><a id="inspiration"
             className="ancre"
             href="/regles/historiques/#inspiration">Inspiration</a>
      </h2><p>
      L'inspiration est une règle que le MD peut utiliser pour vous récompenser de jouer votre personnage en
      accord avec vos traits, votre idéal, votre lien et votre défaut. Si vous utilisez l'inspiration, vous pouvez
      jouer sur le trait de compassion pour les opprimés de votre personnage pour obtenir un avantage lors de la
      négociation avec le prince mendiant. Ou bien encore l'inspiration peut vous permettre de vous appuyer sur
      votre lien avec la défense de votre village d'origine pour passer outre l'effet d'un sort qu'on vient de vous
      lancer.
    </p>
      <h3>Gagner l'inspiration</h3><p>
      Votre MD peut choisir de vous donner l'inspiration pour plusieurs
      raisons. Typiquement, les MD l'accordent lorsque vous jouez correctement vos traits, votre défaut ou un lien,
      ou pour avoir interprété votre personnage d'une manière convaincante. Votre MD vous dira comment vous pouvez
      gagner l'inspiration dans le jeu. Vous avez ou vous n'avez pas l'inspiration, vous ne pouvez pas accumuler
      plusieurs inspirations pour une utilisation future.
    </p>
      <h3>Utiliser l'inspiration</h3><p>
      Si vous avez
      l'inspiration, vous pouvez la dépenser lorsque vous effectuez un jet d'attaque, un jet de sauvegarde ou un jet
      de caractéristique. Dépenser votre inspiration vous donne un avantage au jet de dé. En outre, si vous avez
      l'inspiration, vous pouvez récompenser un autre joueur pour son bon jeu de rôle, pour avoir eu une bonne idée,
      ou tout simplement pour faire quelque chose d'excitant dans le jeu. Quand un autre joueur fait quelque chose
      qui contribue vraiment à l'histoire d'une façon amusante et intéressante, vous pouvez lui céder votre
      inspiration.
    </p>
      <h2><a id="historiques" className="ancre"
             href="/regles/historiques/#historiques">Historique</a></h2><p>
      Toute histoire a un
      début. L'historique de votre personnage révèle d'où vous venez, comment vous êtes devenu un aventurier et
      votre place dans le monde. Votre guerrier a peut-être été un courageux chevalier ou un soldat. Votre magicien
      a peut-être été un sage ou un artisan. Votre roublard a peut-être été un voleur de guilde ou un bouffon.
      Choisir un historique vous donne de précieux éléments d'histoire pour forger l'identité de votre personnage.
      La question la plus importante à se poser au sujet de votre historique est <em>qu'est-ce qui a changé</em> ?
      Pourquoi avez-vous arrêté de faire ce que votre historique décrit pour embrasser une vie d'aventurier ? Où
      avez-vous obtenu l'argent pour acheter votre équipement de départ ou, si vous venez d'un milieu riche,
      pourquoi n'en avez-vous pas plus ? Comment avez-vous appris les compétences de votre classe ? Qu'est-ce qui
      vous distingue des gens ordinaires qui partagent votre historique ? Les exemples d'historiques qui suivent
      fournissent à la fois des avantages concrets (capacités, maîtrises et langues) et des suggestions pour jouer
      le rôle.
    </p>
      <h4><img className="rightlite" title="llustration d'Eric Belisle"
               src="assets/regles/back/background.jpg" alt="background" width="400" height="714"/>Maîtrises
      </h4><p>
      Chaque historique donne la maîtrise de deux compétences. De plus, la plupart des historiques donnent la
      maîtrise d'un ou plusieurs outils.
    </p>
      <p>
        Si un personnage gagne une même maîtrise de deux sources différentes,
        il peut choisir une autre maîtrise de même nature (compétence ou outil) à la place.
      </p>
      <h4>Langues</h4>
      <p>
        Certains historiques permettent aussi à des personnages d'apprendre des langues supplémentaires en plus de
        celles octroyées par la race.
      </p>
      <h4>Équipement</h4><p>
      Chaque historique fournit un kit d'équipement de
      départ. Si vous utilisez la règle optionnelle pour acheter votre équipement, vous ne recevez pas l'équipement
      de départ de l'historique.
    </p>
      <h4>Personnalités proposées</h4><p>
      Chaque historique présente diverses options
      de personnalités. Vous pouvez choisir les options que vous souhaitez directement, lancer les dés pour les
      déterminer au hasard, ou utiliser les suggestions comme source d'inspiration pour inventer vos propres options
      de personnalités.
    </p>
      <h4>Personnalisation de l'historique</h4><p>
      Vous souhaiterez peut-être modifier certaines
      des caractéristiques d'un historique de sorte qu'il corresponde mieux à votre personnage ou à votre monde de
      campagne. Pour personnaliser un historique, vous pouvez remplacer une capacité par une autre, choisir deux
      compétences, et un total de deux maîtrises d'outil ou langues parmi ceux proposés. Vous pouvez soit utiliser
      l'équipement de votre historique, soit acheter celui-ci en suivant la règle optionnelle pour ce faire (dans ce
      dernier cas, vous ne pouvez pas non plus prendre l'équipement suggéré pour votre classe). Enfin, choisissez
      deux traits, un idéal, un lien et un défaut. Si vous ne trouvez pas d'options qui correspondent à l'historique
      que vous souhaitez, travaillez avec votre MD pour en créer de nouvelles.
    </p>
    </Main>
  )
}

export const PlayerEquipment = () => {
  return (
    <Main name={"Équipement"} lastUnit={true}>
      <p>
        Le marché d'une grande ville grouille d’acheteurs et de vendeurs de toutes sortes :
        forgerons nains et elfes sculpteurs sur bois, agriculteurs halfelins et bijoutiers gnomes, pour ne pas
        mentionner les humains de toutes tailles et couleurs de peaux qui proviennent d'un éventail de nations et de
        cultures. Dans les grandes villes, presque tout ce qui est imaginable est proposé à la vente, des épices
        exotiques et des vêtements de luxe aux paniers en osier et aux pratiques épées.
      </p>
      <p>
        Pour un aventurier, pouvoir s'équiper d'une armure, d'armes, d'un sac à dos, de cordes et d'autres marchandises
        similaires est d'une importance capitale, car un équipement approprié peut faire la différence entre la vie et
        la mort dans un complexe souterrain ou dans des étendues sauvages. Ce chapitre détaille les marchandises
        communes et exotiques qui pourraient être utiles aux aventuriers face aux menaces que présentent les mondes de
        D&amp;D.
      </p>
      <p>← <strong>Voir le menu à gauche pour naviguer</strong>.
      </p>
      <h2>Équipement de départ</h2>
      <p>
        Lorsque vous créez votre personnage, vous recevez un équipement spécifique suivant votre classe et votre
        historique. Mais vous pouvez aussi commencer avec un nombre de pièces d'or en fonction de votre classe, comme
        indiqué sur la table ci-dessous, et les dépenser en achetant les articles présentés dans ce chapitre.
      </p>
      <p>
        <img src="/assets/regles/equipement/po.jpg" alt="equipement" width="300" height="155"
             className="rightlite ss-htmleditorfield-file image" loading="lazy"/>Vous décidez vous-même comment votre
        personnage a obtenu cet équipement de départ. Cela peut être un héritage ou des biens que le personnage a
        achetés durant sa formation. Ou vous pourriez avoir été équipé d'une arme, d'une armure et d'un sac à dos dans
        le cadre d'un service militaire, ou avoir volé cet équipement. Une arme pourrait aussi être un héritage de
        famille, transmis de génération en génération, jusqu'à ce que ce soit à votre personnage de suivre les traces
        d'un de ses ancêtres aventurier.
      </p>
      <table>
        <tbody>
        <tr>
          <td><strong>Classe</strong></td>
          <td><strong>Argent de départ</strong></td>
        </tr>
        <tr>
          <td>Barbare</td>
          <td style={{textAlign: "center"}}>2d4 x 10 po</td>
        </tr>
        <tr>
          <td>Barde</td>
          <td style={{textAlign: "center"}}>5d4 x 10 po</td>
        </tr>
        <tr>
          <td>Clerc</td>
          <td style={{textAlign: "center"}}>5d4 x 10 po</td>
        </tr>
        <tr>
          <td>Druide</td>
          <td style={{textAlign: "center"}}>2d4 x 10 po</td>
        </tr>
        <tr>
          <td>Ensorceleur</td>
          <td style={{textAlign: "center"}}>3d4 x 10 po</td>
        </tr>
        <tr>
          <td>Guerrier</td>
          <td style={{textAlign: "center"}}>5d4 x 10 po</td>
        </tr>
        <tr>
          <td>Magicien</td>
          <td style={{textAlign: "center"}}>4d4 x 10 po</td>
        </tr>
        <tr>
          <td>Moine</td>
          <td style={{textAlign: "center"}}>5d4 po</td>
        </tr>
        <tr>
          <td>Occultiste</td>
          <td style={{textAlign: "center"}}>4d4 x 10 po</td>
        </tr>
        <tr>
          <td>Paladin</td>
          <td style={{textAlign: "center"}}>5d4 x 10 po</td>
        </tr>
        <tr>
          <td>Rôdeur</td>
          <td style={{textAlign: "center"}}>5d4 x 10 po</td>
        </tr>
        <tr>
          <td>Roublard</td>
          <td style={{textAlign: "center"}}>4d4 x 10 po</td>
        </tr>
        </tbody>
      </table>
      <h2>Richesses</h2>
      <p>
        La richesse apparaît sous de nombreuses formes dans un monde de D&amp;D. Pièces de monnaie, pierres précieuses,
        objets de commerce, objets d'art, animaux et propriétés peuvent refléter le bien-être financier de votre
        personnage. Les paysans commercent avec des biens, troquant ce dont ils ont besoin et payant les impôts en grain
        et fromage. Les nobles commercent soit en termes de droits juridiques, tels les droits d'une mine,
        d'un port, de terres agricoles, soit avec des lingots d'or, en mesurant l'or par le poids plutôt qu'en comptant
        des pièces. Seuls les marchands, les aventuriers et ceux qui offrent des services professionnels à
        louer traitent généralement avec des pièces.
      </p>
      <h3>Monnaies</h3>
      <p>
        Les pièces communes ont différentes dénominations en fonction de la valeur du métal à partir duquel elles sont
        fabriquées. Les trois pièces de monnaie les plus courantes sont la pièce d'or (po), la pièce d'argent
        (pa) et la pièce de cuivre (pc).
      </p>
      <p>
        Avec une pièce d'or, un personnage peut acheter un sac de couchage, 15 mètres de bonne corde ou une chèvre.
        Un artisan qualifié (mais pas exceptionnel) peut gagner une pièce d'or par jour. La pièce d'or est l'unité de
        mesure standard de la richesse, même si la pièce elle-même n'est pas couramment utilisée. Lorsque les marchands
        discutent d'opérations impliquant des biens ou des services d'une valeur de centaines ou de milliers de pièces
        d'or, les transactions n'impliquent généralement pas l'échange de pièces physiques. La pièce en or est plutôt
        une mesure standard de la valeur, et l'échange réel est en lingots d'or, lettres de crédit ou biens de valeur.
        Une pièce d'or vaut dix pièces d'argent, la pièce la plus répandue parmi les gens du peuple. Une pièce d'argent
        est le salaire d'un ouvrier pour une demi-journée, une fiole d'huile pour une lampe ou une nuit de repos dans
        une auberge pauvre. Une pièce d'argent vaut dix pièces de cuivre, la pièce la plus courante chez les ouvriers et
        les mendiants. Un seul morceau de cuivre achète une bougie, une torche ou un morceau de craie.
      </p>
      <p>
        Il existe également des pièces moins communes faites d'autres métaux précieux et qui apparaissent parfois dans
        les trésors. La pièce d'électrum (pe) et la pièce de platine (pp) proviennent d'empires déchus et de royaumes
        perdus, c'est pourquoi elles suscitent parfois méfiance et scepticisme lorsqu'elles sont utilisées dans les
        transactions. Une pièce d'électrum vaut cinq pièces d'argent, et une pièce de platine vaut dix pièces d'or.
      </p>
      <p>
        Une pièce standard pèse environ 10 grammes, donc cent pièces pèsent un kilogramme.
      </p>
      <p>
        Change standard :<strong> 1 po = 10 pa = 100 pc</strong> et<strong> 1 pp = 10 po = 20 pe</strong>
      </p>
      <h3>Revente</h3>
      <p>
        Les occasions abondent dans les souterrains que vous allez explorer pour trouver des trésors, de l'équipement,
        des armes, des armures, et plus encore. Normalement, vous pouvez vendre ces trésors et ces objets lorsque vous
        retournez dans un village ou une ville, à condition de trouver des acheteurs ou des marchands intéressés par
        votre butin.
      </p>
      <p>
        <strong>Armes, armures et autres équipements</strong>. En règle générale, les armes, armures et autres
        équipements en bon état se revendent à la moitié de leur prix dans un marché. Les armes et armures utilisées par
        les monstres sont toutefois rarement en assez bon état pour être vendues.
      </p>
      <p>
        <strong>Objets magiques</strong>. Vendre des objets magiques est problématique. Trouver quelqu'un pour acheter
        une potion ou un parchemin n'est pas trop difficile, mais les autres objets sont inaccessibles pour la plupart
        des gens, sauf pour les nobles les plus riches. De fait, en dehors de quelques objets magiques communs, vous ne
        trouverez normalement pas d'objets magiques ou de sorts en vente. La valeur de la magie est bien supérieure à
        celle de l'or, la magie doit donc être traitée comme telle.
      </p>
      <p>
        <strong>Gemmes, bijoux et objets d'art</strong>. Ces objets conservent leur pleine valeur sur le marché, et vous
        pouvez soit les échanger pour des pièces, soit les utiliser comme monnaie dans des transactions. Pour des
        trésors d'une valeur exceptionnelle, le MD peut toutefois vous obliger à trouver un acheteur dans une grande
        ville avant cela.
      </p>
      <p>
        <strong>Troc</strong>. Dans les territoires reculés, de nombreuses personnes pratiquent le troc. Comme pour les
        pierres précieuses et les objets d'art, les biens échangés (barres de fer, sacs de sel, bétail, etc.)
        conservent leur pleine valeur sur le marché et peuvent être utilisés comme de la monnaie.
      </p>
      <p>
        <img className="center" title="Equipement" src="assets/regles/equipement.jpg" alt="Equipement" width="800"
             height="1003"/>
      </p>
    </Main>
  )
}

export const Personalisation = () => {
  return (
    <Main name={"Personalisation"} lastUnit={true}>
      <p>
        La combinaison de vos valeurs de caractéristiques, de votre race, de votre classe et de votre historique
        détermine les capacités de votre personnage dans le jeu, et les détails personnels que vous créez vous
        distinguent de tous les autres personnages. Même avec votre classe et votre race, vous avez accès à
        des options pour affiner ce que votre personnage peut faire. Cependant, certains joueurs, avec l’accord du MD,
        souhaitent faire un pas de plus.
      </p>
      <p>
        Ce chapitre décrit deux ensembles de règles optionnelles pour personnaliser votre personnage : le multiclassage
        et les dons. Le multiclassage vous permet de jumeler des classes, et les dons sont des options spéciales que
        vous pouvez choisir à la place de l’augmentation des caractéristiques au fur et à mesure que vous montez en
        niveau. Votre MD décide si ces options sont disponibles dans une campagne.
      </p>
      <p>← <strong>Voir le menu à gauche pour naviguer</strong>.
      </p>
      <p>
        <img className="center" title="" src="assets/regles/options.jpg" alt="options" width="800"/>
      </p>

    </Main>
  )
}

export const Multiclass = () => {
  return (
    <Main name={"Multiclassage"} lastUnit={true}>
      <p>
        Le multiclassage permet de gagner des niveaux dans des classes différentes. Cela permet ainsi d'associer les
        capacités de ces classes, de manière à réaliser un concept de personnage qu'on ne pourrait pas réaliser avec les
        options d'une classe standard. Avec cette règle, vous avez l'option d'ajouter un niveau dans une nouvelle classe
        chaque fois que vous montez de niveau, au lieu de gagner un niveau dans votre classe actuelle. Les niveaux de
        toutes vos classes sont additionnés ensemble pour déterminer le niveau de votre personnage. Par exemple, si vous
        avez trois niveaux de magicien et deux niveaux de guerrier, vous êtes un personnage de niveau 5.
      </p>
      <p>
        Au fur et à mesure que vous montez de niveau, vous pouvez rester un membre de votre classe originale qui possède
        juste quelques niveaux dans une autre classe, ou vous pouvez changer complètement de carrière, en laissant la
        première classe de côté. Vous pouvez même progresser dans une troisième ou quatrième classe. En comparaison à
        une classe unique de niveau équivalent, vous sacrifiez une partie de votre spécialité en échange de plus de
        versatilité.
      </p>
      <h3>Prérequis</h3><p className="encadre">
      <strong>EXEMPLE DE
        MULTICLASSAGE</strong>
      <br/>
      <br/>
      Gary joue un guerrier de niveau 4. Lorsque son personnage gagne assez de points
      d'expérience pour parvenir au niveau 5, Gary décide que son personnage va se multiclasser au lieu de continuer à
      progresser dans sa classe de guerrier. Le guerrier de Gary a passé beaucoup de temps avec le roublard de Dave,
      et a même déjà travaillé pour la guilde des voleurs locale en tant qu'homme de main. Gary décide que son
      personnage se multiclasse avec la classe de roublard, et donc que son personnage devient un guerrier de niveau 4
      et un roublard de niveau 1 (noté guerrier 4/roublard 1).
      <br/>
      <br/>
      Quand son personnage gagne assez de points
      d'expérience pour parvenir au niveau 6, il peut décider d'ajouter un niveau de guerrier (devenant alors un
      guerrier 5/roublard 1), un niveau de roublard (devenant alors un guerrier 4/roublard 2), ou un niveau dans une
      troisième classe, peut-être en s'essayant à la magie grâce au mystérieux tome dont il a récemment fait
      acquisition (devenant alors un guerrier 4/roublard 1/magicien 1).
    </p>
      <p>
        Pour avoir accès à une nouvelle classe,
        vous devez posséder les valeurs de caractéristiques requises par votre classe actuelle et par la nouvelle
        classe, comme indiqué dans le tableau des Prérequis pour le multiclassage. Par exemple, un barbare décidant de
        se multiclasser dans la classe de druide doit avoir des valeurs de Force et de Sagesse de 13 ou plus. Dépourvu
        de la formation complète que reçoit un personnage débutant, vous devez assimiler rapidement les capacités de
        votre nouvelle classe, et ceci demande des aptitudes naturelles qui sont reflétées par des valeurs de
        caractéristiques au-dessus de la moyenne.
      </p>
      <table>
        <tbody>
        <tr>
          <td><strong>Classe</strong></td>
          <td><strong>Valeur minimum de caractéristique</strong></td>
        </tr>
        <tr>
          <td>Barbare</td>
          <td>Force 13</td>
        </tr>
        <tr>
          <td>Barde</td>
          <td>Charisme 13</td>
        </tr>
        <tr>
          <td>Clerc</td>
          <td>Sagesse 13</td>
        </tr>
        <tr>
          <td>Druide</td>
          <td>Sagesse 13</td>
        </tr>
        <tr>
          <td>Ensorceleur</td>
          <td>Charisme 13</td>
        </tr>
        <tr>
          <td>Guerrier</td>
          <td>Force 13 ou Dextérité 13</td>
        </tr>
        <tr>
          <td>Magicien</td>
          <td>Intelligence 13</td>
        </tr>
        <tr>
          <td>Moine</td>
          <td>Dextérité 13 et Sagesse 13</td>
        </tr>
        <tr>
          <td>Occultiste</td>
          <td>Charisme 13</td>
        </tr>
        <tr>
          <td>Paladin</td>
          <td>Force 13 et Charisme 13</td>
        </tr>
        <tr>
          <td>Rôdeur</td>
          <td>Dextérité 13 et Sagesse 13</td>
        </tr>
        <tr>
          <td>Roublard</td>
          <td>Dextérité 13</td>
        </tr>
        </tbody>
      </table>
      <h3>Points d'expérience</h3><p>
      Le coût en points d'expérience (PX) pour monter de niveau est toujours basé sur
      la somme de vos niveaux de personnage (voir <a href="/regles/creation-de-perso/suite/">Au-delà du niveau 1</a>),
      et non pas en fonction de votre niveau dans une classe spécifique. Donc, si vous êtes un clerc 6/guerrier 1,
      vous devez gagner assez de PX pour atteindre le niveau 8 avant de pouvoir prendre votre second niveau de
      guerrier ou votre septième niveau de clerc.
    </p>
      <h3 style={{textAlign: "justify"}}>Points de vie et dés de vie</h3><p>
      Vous gagnez les points de vie de votre nouvelle classe comme cela est décrit pour les niveaux
      au-delà du premier. Vous gagnez les points de vie du niveau 1 seulement quand vous êtes un personnage de
      niveau 1. Vous additionnez les dés de vie conférés par toutes vos classes pour calculer votre réservoir de dés
      de vie. Si les dés de vie sont du même type, vous pouvez tout simplement les additionner ensemble. Par
      exemple, le guerrier et le paladin tirent des d10, donc si vous êtes un paladin 5/guerrier 5, vous avez 10 dés
      de vie. Si vos classes vous donnent des dés de vie de types différents, vous devez les noter séparément. Si
      vous êtes un paladin 5/clerc 5 par exemple, vous avez cinq d10 dés de vie et cinq d8 dés de vie.
    </p>
      <h3 style={{textAlign: "justify"}}>Bonus de maîtrise</h3><p>
      Votre bonus de maîtrise est toujours basé sur la somme
      de vos niveaux de personnage (voir <a href="/regles/creation-de-perso/suite/">Au-delà du niveau 1</a>), et non
      pas en fonction de votre niveau dans une classe spécifique. Par exemple, si vous êtes un guerrier 3/voleur 2,
      vous avez le bonus de maîtrise d'un personnage de niveau 5, qui est donc égal à +3.
    </p>
      <h3 style={{textAlign: "justify"}}>Maîtrises</h3><p style={{textAlign: "justify"}}>Quand vous gagnez un niveau
      dans
      une classe autre que votre première classe, vous ne recevez qu'une partie des maîtrises de départ de cette
      nouvelle classe, ainsi que le montre le tableau ci-dessous.
    </p>
      <table>
        <tbody>
        <tr>
          <td><strong>Classe</strong></td>
          <td><strong>Maîtrises gagnées</strong></td>
        </tr>
        <tr>
          <td>Barbare</td>
          <td>Boucliers, armes courantes, armes de guerre</td>
        </tr>
        <tr>
          <td>Barde</td>
          <td>Armure légère, une compétence de votre choix, un instrument de musique de votre choix</td>
        </tr>
        <tr>
          <td>Clerc</td>
          <td>Armure légère, armure intermédiaire, boucliers</td>
        </tr>
        <tr>
          <td>Druide</td>
          <td>Armure légère, armure intermédiaire, boucliers (un druide n'utilise pas d'armure ou de bouclier en
            métal)
          </td>
        </tr>
        <tr>
          <td>Ensorceleur</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Guerrier</td>
          <td>Armure légère, armure intermédiaire, boucliers, armes courantes, armes de guerre</td>
        </tr>
        <tr>
          <td>Magicien</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Moine</td>
          <td>Armes courantes, épée courte</td>
        </tr>
        <tr>
          <td>Occultiste</td>
          <td>Armure légère, armes courantes</td>
        </tr>
        <tr>
          <td>Paladin</td>
          <td>Armure légère, armure intermédiaire, boucliers, armes courantes, armes de guerre</td>
        </tr>
        <tr>
          <td>Rôdeur</td>
          <td>Armure légère, armure intermédiaire, boucliers, armes courantes, armes de guerre, une compétence choisie
            dans la liste de la classe
          </td>
        </tr>
        <tr>
          <td>Roublard</td>
          <td>Armure légère, une compétence choisie dans la liste de la classe, outils de voleur</td>
        </tr>
        </tbody>
      </table>
      <h3>Capacités de classe</h3><p>
      Lorsque vous gagnez un nouveau niveau dans une classe, vous bénéficiez des
      nouvelles capacités acquises à ce niveau. En revanche, vous ne recevez pas l'équipement de départ de la classe
      et certaines capacités sont modifiées par des règles additionnelles lors d'un multiclassage : Attaque
      supplémentaire, Conduit divin, Défense sans armure et Incantation.
    </p>
      <h4>Attaque supplémentaire</h4><p>
      Si
      vous bénéficiez de la capacité de classe Attaque supplémentaire grâce à plusieurs classes, ces capacités ne se
      cumulent pas. Vous ne pouvez pas réaliser plus de deux attaques grâce à cette capacité à moins qu'il n'en soit
      dit autrement (telle la version d'Attaque supplémentaire du guerrier). De manière similaire, la manifestation
      occulte Lame assoiffée de l'occultiste ne vous accorde pas de nouvelle attaque si vous avez déjà accès à
      Attaque supplémentaire.
    </p>
      <h4>Conduit divin</h4><p>
      Si vous avez déjà la capacité de Conduit divin et que vous
      prenez un niveau dans une classe qui propose aussi cette capacité, vous gagnez l'effet de Conduit divin
      conféré par cette classe, mais vous ne gagnez pas d'utilisation supplémentaire. Vous ne gagnez d'utilisations
      supplémentaires que lorsque vous atteignez un niveau de classe qui vous en confère explicitement. Par exemple,
      si vous êtes un clerc 6/paladin 4, vous pouvez utiliser Conduit divin deux fois entre chaque repos puisque
      vous possédez assez de niveau de clerc pour prétendre à plusieurs utilisations. Lorsque vous utilisez cette
      capacité, vous pouvez choisir n'importe quel effet de Conduit divin auquel vos classes vous donnent accès.
    </p>
      <h4>Défense sans armure</h4><p>
      Si vous possédez la capacité de Défense sans armure, vous ne pouvez pas en
      bénéficier encore grâce à une autre classe.
    </p>
      <h4>Incantation</h4><p>
      Votre capacité de lanceur de sorts
      dépend en partie de vos niveaux combinés dans toutes vos classes de lanceurs de sorts et en partie de votre
      niveau individuel dans chacune de ces classes. À partir du moment où vous avez accès à la capacité
      Incantations grâce à plusieurs classes, utilisez les règles ci-dessous. Si vous êtes multiclassé, mais que
      vous avez accès à la capacité Incantations seulement grâce à une de vos classes, utilisez les règles telles
      qu'elles sont décrites pour votre classe.
    </p>
      <p>
        <strong>Sorts connus et Sorts préparés</strong>. Vous choisissez les sorts que vous connaissez et que vous
        préparez pour chacune de vos classes individuellement,
        comme décrit dans la description de la classe. Par exemple, si vous êtes un rôdeur 4/magicien 3, vous connaissez
        trois sorts de rôdeur de niveau 1 grâce à vos niveaux dans la classe de rôdeur. En tant que magicien de niveau
        3, vous connaissez trois sorts mineurs de magicien et votre livre de sorts contient dix sorts de magicien, dont
        deux (ceux que vous avez gagnés en atteignant le niveau 3 de magicien) pouvant être des sorts de niveau 2. Si
        votre valeur d'Intelligence est de 16, vous pouvez préparer six sorts de magicien à
        partir de votre livre de sorts.
      </p>
      <p>
        Chaque sort que vous connaissez et que vous préparez est associé à une de vos classes, et vous utilisez la
        capacité Incantations de cette classe lorsque vous jetez un sort. De même,
        un focaliseur, tel qu'un symbole sacré, ne peut être utilisé que pour les sorts de la classe associée à ce
        focaliseur.
      </p>
      <p>
        Si un de vos sorts mineurs augmente de pouvoir à des niveaux plus élevés, cette augmentation est basée sur le
        niveau de votre personnage, et non pas sur votre niveau dans une classe spécifique.
      </p>
      <p>
        <strong>Emplacements de sorts</strong>. Vous déterminez vos emplacements de sorts disponibles en additionnant
        tous vos niveaux de classe de barde, clerc, druide, ensorceleur et magicien, la moitié (arrondie à
        l'inférieur) de vos niveaux de classe de paladin et de rôdeur, et le tiers (arrondi à l'inférieur) de vos
        niveaux de classe de guerrier et de voleur s'ils ont accès aux capacités de <a
        href="/regles/classes/guerrier/#eldritch">chevalier occulte</a> ou d'<a
        href="/regles/classes/roublard/#mystificateur">escroc arcanique</a>. Utilisez ce total pour déterminer vos
        emplacements de sorts en consultant la table ci-dessous.
      </p>
      <p>
        Si vous avez des niveaux dans plus d'une classe de lanceur de sorts, cette table pourrait vous donner des
        emplacements de sorts d'un niveau plus élevé que les sorts que vous connaissez ou que vous pouvez préparer. Vous
        pouvez utiliser ces emplacements, mais seulement pour lancer vos sorts de niveaux inférieurs. Si un sort de
        niveau inférieur que vous lancez, comme <em>mains brûlantes</em>, a un effet accru quand il est lancé en
        utilisant un emplacement de niveau supérieur, vous pouvez utiliser l'effet amélioré, même si vous ne disposez
        pas de sorts de ce niveau supérieur. Par exemple,
        en suivant le cas précédant du personnage rôdeur 4/magicien 3, vous êtes considéré comme un lanceur de sorts de
        niveau 5 pour déterminer vos emplacements de sorts : vous avez droit à quatre emplacements de sorts de niveau 1,
        trois emplacements de sorts de niveau 2, et deux emplacements de sorts de niveau 3. Par contre, vous ne
        connaissez aucun sort de niveau 3, ni aucun sort de rôdeur de niveau 2. Vous pouvez quand même utiliser les
        emplacements de sorts de ces niveaux pour lancer des sorts que vous connaissez, et même potentiellement en
        augmenter leur efficacité.
      </p>
      <p>
        <img className="rightlite" title="Illustration de William O'Connor"
             src="assets/regles/multiclasse.jpg" alt="Guerriere magicienne"
             width="400" height="492"/>
      </p>
      <table>
        <tbody>
        <tr>
          <td style={{textAlign: "center"}}><strong>Niv</strong></td>
          <td><strong>1</strong></td>
          <td><strong>2</strong></td>
          <td><strong>3</strong></td>
          <td><strong>4</strong></td>
          <td><strong>5</strong></td>
          <td><strong>6</strong></td>
          <td><strong>7</strong></td>
          <td><strong>8</strong></td>
          <td><strong>9</strong></td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>1</td>
          <td>2</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>2</td>
          <td>3</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>3</td>
          <td>4</td>
          <td>2</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>4</td>
          <td>4</td>
          <td>3</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>5</td>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>6</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>7</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>1</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>8</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>9</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>1</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>10</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>11</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>12</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>13</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>14</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>15</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>16</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>-</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>17</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>18</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>19</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td style={{textAlign: "center"}}>20</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
        </tr>
        </tbody>
      </table>
      <p>
        <strong>Magie de pacte</strong>. Si vous bénéficiez à la fois des capacités Incantations et Magie de pacte de la
        classe d'occultiste, vous pouvez utiliser les emplacements de sorts gagnés grâce à la capacité Magie de pacte
        pour lancer des sorts que vous connaissez ou que vous avez préparés des classes ayant la capacité
        Incantations, et vous pouvez utiliser les emplacements de sorts gagnés grâce à la capacité Incantations pour
        lancer les sorts d'occultiste que vous connaissez.
      </p>
      <p className="auteur">Traduit par Pil.
      </p>
    </Main>
  )
}

export const FeatList = () => {
  const [feats, setFeats] = useState(require("../../../resources/feats.json"))
  const [sorting, setSorting] = useState("")
  const [categories, setCategories] = useState([])

  const columns = [
    {id: "Alphabetically", sortId: "name", categories: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    // {id: "By Level", sortId: "level", categories: "0123456789"},
    // {id: "By School", sortId: "school", categories: ["Abjuration","Conjuration","Divination","Enchantement","Evocation","Illusion","Necromancie","Transmutation"]},
    // {id: "By Caster", sortId: "caster", categories: [""]}
  ]

  const getCategories = (don, type) => {

    if (type === "res") {
      return []
    }
    let cats = columns.filter((a) => a.sortId.startsWith(don))[0].categories
    if (typeof cats === typeof "") {
      cats = cats.split('')
    }
    cats.sort()
    if (type === "des") {
      cats.reverse()
    }
    return cats
  }


  const handleSort = (type) => {
    const shouldReset = sorting === type + ".des"
    const shouldAscend = !sorting.startsWith(type)
    const shouldDescend = sorting === type + ".asc"

    if (shouldAscend) {
      // console.log("Should now ascend: " + type + ".asc")
      setSorting(type + ".asc")
      setCategories(getCategories(type, "asc"))
    } else if (shouldDescend) {
      // console.log("Should now descend: " + type + ".des")
      setSorting(type + ".des")
      setCategories(getCategories(type, "des"))
    } else if (shouldReset) {
      // console.log("Should reset.")
      type = "id"
      setSorting("")
      setCategories(getCategories(type, "res"))
    }

    feats.sort(function (a, b) {
      let textA = a[type].toString().toUpperCase();
      let textB = b[type].toString().toUpperCase();
      if (shouldAscend || shouldReset) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      }
      return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
    })
  }
  console.log(feats)
  return (
    <Main name={"Liste des Dons"} lastUnit={true}>
      {columns.map((col) => {
        return (
          <button type="button" className={"sort ve-btn ve-btn-default ve-btn-xs"}
                  onClick={() => handleSort(col.sortId)}>
            {col.id}
            <span
              className={"lst__caret" + (sorting.startsWith(col.sortId) ? " lst__caret--active" : "") + (sorting === col.sortId + ".des" ? " lst__caret--reverse" : "")}></span>
          </button>)
      })}
      {categories.length === 0 ?
        <>
          <br/>
          <br/>
          {feats.map((feat) =>
            <li style={{display: "block", width: "33%", float: "left"}}>
              <Link to={"/TTRPG-wiki/dnd/player/personalisation/dons/" + feat.id}>{feat.name}</Link>
            </li>
          )}
        </> :
        <>
          {categories.map((category) => {
            let subFeats = []
            // for (let spell of spells){
            //   console.log(spell.school.toUpperCase().replace("É","E"))
            // }
            if (sorting.startsWith("name")) {
              subFeats = structuredClone(feats).filter((a) => a.name.toUpperCase().startsWith(category.toUpperCase()))
            } else if (sorting.startsWith("level")) {
              subFeats = structuredClone(feats).filter((a) => a.level.toString() === category)
            } else if (sorting.startsWith("school")) {
              subFeats = structuredClone(feats).filter((a) => a.school.toUpperCase().replace("É", "E") === category.toUpperCase())
            }
            return (<>
              <hr style={{margin: 0, borderTop: "1px solid #fff",}}/>
              <h2 style={{marginTop: "10px"}}>- {category} -</h2>
              <ul>
                {subFeats.map((feat) =>
                  <li style={{display: "block", width: "33%", float: "left"}}><Link
                    to={"/TTRPG-wiki/dnd/player/spells/" + feat.id}>{feat.name}</Link></li>
                )}
              </ul>
            </>)
          })}
        </>
      }


    </Main>
  )
}

export const Caracteristique = () => {
  return (
    <Main name={"Utiliser les caractéristiques"} lastUnit={true}>
      <p>
        Six caractéristiques donnent une description rapide des capacités physiques et mentales de toute créature :</p>
      <ul>
        <li><Link to="#for"><strong>Force</strong></Link>, mesure la puissance physique</li>
        <li><Link to="#dex"><strong>Dextérité</strong></Link>, mesure l'agilité</li>
        <li><Link to="#con"><strong>Constitution</strong></Link>, mesure l'endurance</li>
        <li><Link to="#int"><strong>Intelligence</strong></Link>, mesure le raisonnement et la mémoire</li>
        <li><Link to="#sag"><strong>Sagesse</strong></Link>, mesure la perception et l'intuition</li>
        <li><Link to="#cha"><strong>Charisme</strong></Link>, mesurer la force de la personnalité</li>
      </ul>
      <p>
        Est-ce qu'un personnage est musclé et perspicace ? Brillant et charmant ? Agile et robuste ? Les valeurs des
        caractéristiques définissent les qualités et les faiblesses d'une créature. Les trois principaux jets de dés du
        jeu (le jet de caractéristique, le jet de sauvegarde et le jet d'attaque) se basent sur les six valeurs des
        caractéristiques. <a href="/regles/">L'introduction</a> décrit la règle de base derrière ces jets : lancer un
        d20, ajouter un modificateur de caractéristique provenant d'une des six caractéristiques, et comparer le total
        à l'objectif. Ce chapitre se concentre sur la façon d'utiliser les jets de caractéristique et les jets de
        sauvegarde, qui couvrent les activités fondamentales que les créatures tentent durant le jeu. Les règles pour
        les jets d'attaque sont dans le chapitre <a href="/regles/combat/">Combat</a>.
      </p>
      <h2><a id="modificateur"
             className="ancre"
             href="/regles/caracteristiques/#modificateur">Valeurs et modificateurs de caractéristique</a></h2><p>
      Chaque caractéristique d'une créature a une valeur, un nombre
      qui définit l'ampleur de cette caractéristique. Une valeur de caractéristique est une mesure des capacités
      innées, mais englobe également la formation et la compétence d'une créature dans les activités liées à cette
      caractéristique.
    </p>
      <p>
        Une valeur de 10 ou 11 est la moyenne humaine normale, mais les aventuriers et de nombreux monstres sont un cran
        au-dessus de la moyenne dans la plupart des caractéristiques. Une valeur de 18 est généralement la plus élevée
        qu'une personne atteint. Les aventuriers peuvent avoir des valeurs qui montent jusqu'à 20, et certains monstres
        et êtres divins peuvent avoir des valeurs qui montent jusqu'à 30. Chaque caractéristique possède également un
        modificateur, qui va de -5 (pour une valeur de caractéristique de 1) à
        +10 (pour une valeur de caractéristique de 30). La table ci-dessous donne les modificateurs de caractéristique
        suivant la valeur de celle-ci.
      </p>
      <table>
        <tbody>
        <tr>
          <td><strong>Valeur de Caractéristique</strong></td>
          <td style={{textAlign: "center"}}>2-3</td>
          <td style={{textAlign: "center"}}>4-5</td>
          <td style={{textAlign: "center"}}>6-7</td>
          <td style={{textAlign: "center"}}>8-9</td>
          <td style={{textAlign: "center"}}>10-11</td>
          <td style={{textAlign: "center"}}>12-13</td>
          <td style={{textAlign: "center"}}>14-15</td>
          <td style={{textAlign: "center"}}>16-17</td>
          <td style={{textAlign: "center"}}>18-19</td>
          <td style={{textAlign: "center"}}>20-21</td>
        </tr>
        <tr>
          <td><strong>Modificateur</strong></td>
          <td style={{textAlign: "center"}}>-4</td>
          <td style={{textAlign: "center"}}>-3</td>
          <td style={{textAlign: "center"}}>-2</td>
          <td style={{textAlign: "center"}}>-1</td>
          <td style={{textAlign: "center"}}>+0</td>
          <td style={{textAlign: "center"}}>+1</td>
          <td style={{textAlign: "center"}}>+2</td>
          <td style={{textAlign: "center"}}>+3</td>
          <td style={{textAlign: "center"}}>+4</td>
          <td style={{textAlign: "center"}}>+5</td>
        </tr>
        </tbody>
      </table>
      <p>
        Pour déterminer le modificateur d'une caractéristique sans avoir à consulter cette table, rappelez-vous
        simplement de soustraire 10 à la valeur de la caractéristique, puis de diviser le total par 2 (arrondi à
        l'inférieur). Les modificateurs de caractéristiques influant presque tous les jets d'attaque, de caractéristique
        et de sauvegarde, ils sont plus souvent utilisés en jeu que la valeur même des caractéristiques.
      </p>
      <h2><a id="avantage" className="ancre" href="/regles/caracteristiques/#avantage">Avantage et désavantage</a></h2>
      <p>
        Parfois, une capacité spéciale ou un sort vous indique que vous avez un avantage ou
        un désavantage à un jet de caractéristique, un jet de sauvegarde ou un jet d'attaque. Lorsque cela se produit,
        lancez un second d20 et utilisez le plus élevé des deux jets si vous avez un avantage, ou le plus faible des
        deux jets si vous avez un désavantage. Par exemple, si vous avez un désavantage et obtenez un 17 et un 5 aux
        jets, vous devez utiliser le 5. Si au contraire vous aviez un avantage, vous devez utiliser le 17.
      </p>
      <p>
        Si plusieurs situations affectent un jet de dé et chacune d'elles donnent un avantage ou un désavantage, vous ne
        lancez pas plus d'un d20 supplémentaire. Si deux situations donnent un avantage par exemple, vous n'obtenez
        qu'un seul d20 supplémentaire. Si les circonstances donnent en même temps un avantage et un désavantage, les
        deux s'annulent, et vous ne lancez qu'un seul d20. Cela s'applique aussi si plusieurs circonstances imposent
        plusieurs désavantages et un seul avantage, ou vice et versa. Dans une telle situation, vous n'avez ni avantage
        ni désavantage.
      </p>
      <p>
        Lorsque vous avez un avantage ou un désavantage, et quelque chose dans le jeu qui, comme la capacité Chance du
        halfelin, vous permet de relancer ou remplacer le d20, vous ne pouvez relancer ou remplacer qu'un seul des dés,
        celui que vous voulez. Par exemple, si un halfelin a un avantage à
        un jet de caractéristique et obtient un 1 et un 13, le halfelin pourrait utiliser sa chance pour relancer le 1.
      </p>
      <p>
        Vous gagnez habituellement un avantage ou un désavantage grâce à l'utilisation de capacités spéciales, d'actions
        ou de sorts. L'<a href="/regles/historiques/#inspiration">inspiration</a> peut également donner un avantage au
        personnage pour les jets liés à son trait, son idéal ou ses liens. Le MD peut également décider que les
        circonstances influent sur un jet dans un sens ou dans l'autre, et accorder en conséquence un avantage ou un
        désavantage.
      </p>
      <h2><a id="maitrise" className="ancre"
             href="/regles/caracteristiques/#maitrise">Bonus de maîtrise</a></h2>
      <p>
        Les personnages ont un bonus de maîtrise déterminé par leur niveau, comme indiqué dans le chapitre de <a
        href="/regles/creation-de-perso/">création de personnage</a>. Les monstres possèdent également ce bonus,
        lequel est intégré dans leurs blocs de stat. Ce bonus est utilisé pour les jets de caractéristique, les jets de
        sauvegarde et les jets d'attaque.
      </p>
      <p>
        Votre bonus de maîtrise ne peut s'appliquer plus d'une fois à un même jet de dés ou à un autre numéro. Par
        exemple, si deux règles différentes disent que vous pouvez ajouter votre bonus de maîtrise à un jet de
        sauvegarde de Sagesse, vous ne pouvez en fait ajouter le bonus qu'une seule fois à ce jet de sauvegarde.
        Parfois, votre bonus de maîtrise peut être modifié (doublé ou divisé par deux, par exemple) avant d'être pris en
        compte. Par exemple, la capacité Expertise du roublard double son bonus de maîtrise pour certains jets de
        caractéristique. Si une situation semble suggérer que vous pouvez appliquer ou modifier votre bonus plus d'une
        fois, n'en tenez pas compte. Le bonus de maîtrise ne s'applique,
        ne se multiplie ou ne se divise qu'une seule fois.
      </p>
      <p>
        De la même façon, si une capacité ou effet vous permet de multiplier votre bonus de maîtrise lors d'un jet de
        caractéristique pour lequel votre bonus de maîtrise ne s'applique pas, vous n'ajoutez pas le bonus. Pour ce jet,
        votre bonus de maîtrise est 0, donc le multiplier donnera toujours 0. Par exemple, si vous n'avez pas la
        maîtrise de la compétence Histoire, vous ne gagnez aucun avantage d'une capacité qui vous permet de doubler
        votre bonus de maîtrise lors d'un jet d'Intelligence (Histoire). En général, vous ne multipliez pas votre bonus
        de maîtrise pour les jets d'attaque ou de sauvegarde, mais si une capacité ou effet vous permet de le faire, ces
        mêmes règles s'appliquent.
      </p>
      <h2><a id="jets-de-carac" className="ancre" href="/regles/caracteristiques/#jets-de-carac">Jets de
        caractéristique</a></h2><p>
      <img src="/assets/regles/caracteristiques.jpg" alt="Utiliser les caractéristiques"
           width="400" height="584" className="right ss-htmleditorfield-file image"
           title="Utiliser les caractéristiques" loading="lazy"/>Un jet de
      caractéristique sert à vérifier le talent inné et la formation d'un personnage ou d'un monstre dans le but de
      relever un défi. Le MD demande un jet de caractéristique quand un personnage ou un monstre tente une action
      (autre qu'une attaque) qui a une chance d'échouer. Lorsque le résultat est incertain, les dés déterminent le
      résultat.
    </p>
      <p>
        Pour chaque jet de caractéristique, le MD décide quelle est la caractéristique la plus pertinente pour la tâche
        à accomplir, ainsi que la difficulté de la tâche, représentée par un Degré de Difficulté. Plus une tâche est
        difficile, plus son DD est haut. La table ci-dessous indique les DD les plus courants.
      </p>
      <table>
        <tbody>
        <tr>
          <td><strong> Tâche</strong></td>
          <td><strong>DD </strong></td>
        </tr>
        <tr>
          <td>Très facile</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Facile</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Moyenne</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Difficile</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Très difficile</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Quasi impossible</td>
          <td>30</td>
        </tr>
        </tbody>
      </table>
      <p>
        Pour effectuer un jet de caractéristique, lancez un d20 et ajoutez le modificateur de caractéristique adéquat.
        Comme pour les autres jets de d20, appliquez d'éventuels bonus et pénalités, et comparez le total avec le DD. Si
        ce total est égal ou supérieur au DD, le jet est un succès, la créature a réussi à surmonter le
        défi.&nbsp;Sinon, c'est un échec, ce qui signifie que le personnage ou le monstre ne progresse pas vers
        l'objectif, ou progresse mais subit aussi un revers déterminé par le MD.
      </p>
      <h3>Opposition</h3>
      <p>
        Parfois, les efforts d'un monstre ou d'un personnage sont directement opposés à un autre. Cela peut se produire
        lorsque deux créatures essaient de faire la même chose mais qu'une seule peut réussir, comme pour essayer de
        récupérer un anneau magique qui vient de tomber au sol. Cette situation s'applique également lorsque l'une
        d'elles tente d'empêcher l'autre d'accomplir quelque chose, comme quand un monstre tente d'ouvrir une porte
        qu'un aventurier tient fermée. Dans de telles situations, le résultat est déterminé par une forme spéciale de
        jet de caractéristique appelé une opposition.
      </p>
      <p>
        Les deux participants à une opposition font les jets de caractéristique adéquats en fonction de l'effort. Ils
        appliquent tous les bonus et malus appropriés, mais au lieu de comparer le total à un DD, on compare les deux
        totaux. Le participant avec le total le plus élevé
        remporte l'opposition. Ce personnage ou monstre réussit alors son action ou empêche l'autre de réussir.
      </p>
      <p>
        Si l'opposition résulte en une égalité, la situation n'évolue pas. Ainsi, un participant peut gagner
        l'opposition par défaut. Par exemple, si deux personnages terminent à égalité lors d'une opposition pour
        récupérer un anneau au sol, aucun ne le saisit, mais dans une opposition entre un monstre essayant d'ouvrir une
        porte et un aventurier essayant de la garder fermée, une égalité signifie que la porte reste fermée.
      </p>
      <h3>Compétences</h3>
      <p>
        Chaque caractéristique couvre un large éventail de capacités, y compris les compétences qu'un personnage ou un
        monstre peut maîtriser. Une compétence représente un aspect spécifique d'une valeur de caractéristique, et les
        compétences maîtrisées par un individu démontrent l'accent mis sur cet aspect spécifique (les compétences
        maîtrisées d'un personnage sont déterminées à la création de celui-ci, et les compétences maîtrisées d'un
        monstre apparaissent dans son bloc de stat).
      </p>
      <p>
        Par exemple, un jet de Dextérité peut refléter la tentative d'un personnage pour exécuter une cascade
        acrobatique, pour subtiliser un objet ou pour rester caché. Mais chacun de ces aspects de la Dextérité a une
        compétence associée : Acrobaties,
        Escamotage et Discrétion, respectivement. Ainsi, un personnage qui maîtrise la compétence Discrétion est
        particulièrement bon lors des jets liés à la Dextérité pour se faufiler et se cacher. Les compétences liées à
        chaque caractéristique sont présentées dans la liste suivante (aucune compétence n'est liée à la Constitution).
        Voir la description de la caractéristique dans les sections suivantes de ce chapitre pour savoir comment
        utiliser une compétence associée à une caractéristique.
      </p>
      <ul>
        <li><strong>Force</strong> : Athlétisme</li>
        <li><strong>Dextérité</strong> : Acrobaties, Discrétion, Escamotage</li>
        <li><strong>Intelligence</strong> : Arcanes, Investigation, Histoire, Nature, Religion</li>
        <li><strong>Sagesse</strong> : Dressage, Intuition, Médecine, Perception, Survie</li>
        <li><strong>Charisme</strong> : Intimidation, Persuasion, Représentation, Tromperie</li>
      </ul>
      <p>
        Parfois, le MD peut demander un jet de caractéristique pour une compétence spécifique, « faire un jet de Sagesse
        (Perception) ». D'autres fois, un joueur peut demander au MD si la maîtrise d'une compétence particulière
        applique au jet. Dans les deux cas, la maîtrise d'une compétence signifie qu'un individu peut ajouter son bonus
        de maîtrise aux jets de caractéristique qui impliquent cette compétence. Sans la maîtrise de la compétence, le
        jet est fait normalement. Par exemple, si un personnage tente de grimper une falaise dangereuse, le MD peut lui
        demander un jet de Force (Athlétisme). Si le personnage est compétent en Athlétisme, le bonus de maîtrise du
        personnage est ajouté au jet de Force. Si le personnage n'a pas cette compétence, il ou elle fait juste un jet
        de Force.
      </p>
      <h4>Variante : Compétences avec des caractéristiques différentes</h4>
      <p>
        Normalement, votre maîtrise d'une compétence s'applique uniquement à un type spécifique de jet de
        caractéristique. La maîtrise de l'athlétisme, par exemple, s'applique généralement aux jets de Force.
        Dans certaines situations, cependant, votre maîtrise peut raisonnablement s'appliquer à un autre type de jet.
        Dans de tels cas, le MD peut demander un jet qui utilise une combinaison inhabituelle de caractéristique et
        compétence, ou vous pouvez vous-même demander à votre MD s'il est possible d'appliquer une compétence à un jet
        différent. Par exemple, si vous devez nager d'une île au large jusqu'au continent, votre MD pourrait demander un
        jet de Constitution pour vérifier si vous avez l'endurance nécessaire pour cela. Et dans ce cas, il pourrait
        vous permettre d'appliquer votre maîtrise en Athlétisme. Donc, si vous maîtrisez la compétence Athlétisme, vous
        appliquez votre bonus de maîtrise au jet de Constitution tout comme vous le feriez normalement pour un jet de
        Force (Athlétisme). De même, lorsque votre guerrier nain utilise la force brute pour intimider un ennemi, votre
        MD pourrait demander un jet de Force (Intimidation), même si l'intimidation est normalement associée au
        Charisme.
      </p>
      <h3>Jets passifs</h3>
      <p>
        Un jet passif est un jet de caractéristique spécial qui n'implique pas de jet de dés. Ce jet peut représenter la
        moyenne des résultats pour une tâche faite à plusieurs reprises, comme rechercher de portes secrètes, encore et
        encore. Il peut également être utilisé lorsque le MD veut déterminer secrètement si les personnages réussissent
        à faire quelque chose sans lancer de dés, comme pour détecter un monstre caché. Voici comment déterminer le
        total d'un personnage pour un jet passif :</p>
      <p>
        <strong>&nbsp; &nbsp;10 + tous les modificateurs qui s'appliquent normalement au
          jet</strong>
      </p>
      <p>
        Si le personnage a un avantage au jet, ajouter 5. En cas de désavantage, soustraire 5. Le jeu considère le Total
        de jet passif comme une valeur. Par exemple, si un personnage de niveau 1 a une Sagesse de 15 et maîtrise la
        compétence Perception, il a une valeur de Sagesse (Perception) passive de 14 (10 + 2 de modificateur de Sagesse
        + 2 de bonus de maîtrise au niveau 1).
      </p>
      <h3>Travailler ensemble</h3><p>
      Parfois,
      plusieurs personnages travaillent en équipe pour réaliser une tâche. Le personnage qui conduit l'effort
      principal, ou celui avec le plus fort modificateur de caractéristique, peut alors faire un jet de
      caractéristique avec un avantage, reflétant ainsi l'aide fournie par les autres personnages. En combat, cela
      se traduit par l'action Aider (voir <a href="/regles/combat/">Combat</a>). Un personnage ne peut fournir de
      l'aide que s'il s'agit d'une tâche qu'il pourrait effectuer seul. Par exemple, tenter de crocheter une serrure
      exige la maîtrise des outils de voleur, donc un personnage qui n'a pas cette maîtrise ne peut pas aider un
      autre personnage dans cette tâche. En outre, un personnage ne peut aider que si deux ou plusieurs personnes
      travaillant ensemble sont effectivement productives. Certaines tâches, comme enfiler une aiguille, ne sont pas
      plus faciles avec de l'aide.
    </p>
      <h4>Jet de groupe</h4><p>
      Quand un certain nombre de personnes tente
      d'accomplir quelque chose en tant que groupe, le MD peut demander un jet de caractéristique pour le groupe.
      Dans une telle situation, les personnages qui sont qualifiés pour une tâche particulière peuvent couvrir ceux
      qui ne le sont pas. Pour effectuer un jet de caractéristique de groupe, tout le monde dans le groupe réalise
      le jet. Si au moins la moitié du groupe réussit, l'ensemble du groupe réussit. Sinon, tout le groupe échoue.
      Les jets de groupe ne sont pas fréquents, et sont plus utiles quand tous les personnages réussissent ou
      échouent en tant que groupe. Par exemple, si des aventuriers s'aventurent dans un marais, le MD peut demander
      un jet de Sagesse (Survie) de groupe pour voir si les personnages peuvent éviter les sables mouvants, un
      gouffre ou tout autre piège naturel de l'environnement. Si au moins la moitié du groupe réussit, les
      personnages qui réussissent sont capables de guider leurs compagnons hors du danger. Sinon, le groupe tombe
      dans l'un de ces pièges.
    </p>
      <h2><a id="utiliser-carac" className="ancre"
             href="/regles/caracteristiques/#utiliser-carac">Utiliser chaque caractéristique</a></h2><p>
      Chaque tâche qu'un personnage ou monstre peut tenter dans le jeu est couverte par
      l'une des six caractéristiques. Cette section explique plus en détail ce que signifient ces caractéristiques
      et la façon dont elles sont utilisées dans le jeu.
    </p>
      <h3><a id="for" className="ancre"
             href="/regles/caracteristiques/#for">Force</a>
      </h3><p>
      La Force détermine la puissance physique, l'entrainement sportif et la mesure dans laquelle vous pouvez
      exercer une force physique brute.
    </p>
      <h4>Jets de Force</h4><p>
      Un jet de Force peut modéliser toute tentative
      de soulever, pousser, tirer ou casser quelque chose, de faire passer votre corps à travers un espace, ou bien
      d'appliquer la force brute à une situation. La compétence Athlétisme reflète une aptitude à certains types de
      jets de Force.
    </p>
      <p>
        <strong>Athlétisme</strong>. Un jet de Force (Athlétisme) couvre les situations difficiles que vous rencontrez
        en grimpant, en sautant ou nageant. Cela inclut les activités suivantes :</p>
      <ul>
        <li>Vous essayez de grimper une falaise abrupte ou glissante, d'éviter les pièges tout en escaladant un mur,
          ou de vous accrocher à une surface alors que quelque chose essaie de vous faire lâcher.
        </li>
        <li>Vous essayez de sauter une distance inhabituellement longue</li>
        <li>&nbsp;Vous luttez pour nager ou rester à flot en présence de courants contraires, de vagues houleuses ou
          dans une zone avec d'épaisses algues. Ou bien une autre créature essaie de vous noyer ou de vous sortir de
          l'eau, ou toute autre chose qui peut interférer avec votre nage.
        </li>
      </ul>
      <p>
        <strong>Autres jets de Force</strong>. Le MD peut également demander un jet de Force lorsque vous essayez de
        réaliser l'une des tâches suivantes :</p>
      <ul>
        <li>Ouvrir par la force une porte coincée ou verrouillée</li>
        <li>Se libérer de liens</li>
        <li>Passer à travers un tunnel qui est trop petit</li>
        <li>S'accrocher à un chariot pour se faire traîner</li>
      </ul>
      <h4>Jets d'attaque et de dégâts</h4><p>
      Vous ajoutez votre modificateur de Force à votre jet d'attaque et de
      dégâts lors d'une attaque avec une arme de corps à corps comme une masse, une hache d'armes ou une javeline.
      Les armes de corps à corps sont utilisées pour faire des attaques au corps à corps, et certaines d'entre elles
      peuvent être jetées pour effectuer une attaque à distance.
    </p>
      <h4>Poids</h4><p>
      Votre Force détermine le poids
      que vous pouvez porter. Les termes suivants définissent ce que vous pouvez soulever ou transporter.
    </p>
      <p>
        <strong>Capacité de charge</strong>. Votre capacité de charge est votre valeur de Force multipliée par 7,5.
        C'est le poids (en kg) que vous pouvez porter, ce qui est suffisamment élevé pour que la plupart des personnages
        n'aient généralement pas à s'inquiéter à ce sujet.
      </p>
      <p>
        <strong>Pousser, Tirer, Soulever</strong>.
        Vous pouvez pousser, tirer ou soulever un poids en kilogrammes jusqu'à deux fois votre capacité de charge (ou 15
        fois votre valeur de Force). Pousser ou tirer un poids au-delà de votre capacité de charge fait passer votre
        vitesse à 1,50 mètre.
      </p>
      <p>
        <strong>Taille et Force</strong>. Les créatures de taille G peuvent supporter plus de poids, alors que les
        créatures de taille TP peuvent en transporter moins. Pour chaque catégorie de taille supérieure à la taille M,
        doubler la capacité de charge et le poids qu'elle peut pousser,
        tirer ou soulever. Pour une créature de taille TP, réduire de moitié ces poids.
      </p>
      <h4>Variante :
        Encombrement</h4><p>
      Les règles pour soulever ou transporter sont volontairement simples. Mais voici une
      variante si vous êtes à la recherche de règles plus détaillées pour déterminer comment un personnage est
      entravé par le poids de son équipement. Lorsque vous utilisez cette variante, ignorer la colonne Force de la
      table des <a href="/regles/equipement/armures/">armures</a>.
    </p>
      <p>
        Si vous portez un poids qui excède plus de 2,5 fois votre valeur de Force, vous êtes <strong>encombré</strong>,
        ce qui signifie que votre vitesse est diminuée de 3 mètres. Si vous portez un poids qui excède plus de 5 fois
        votre valeur de Force, sans dépasser votre capacité de charge maximale, vous êtes <strong>fortement
        encombré</strong>, ce qui signifie que votre vitesse est diminuée de 6 mètres et vous avez un désavantage aux
        jets caractéristique, d'attaque et de sauvegarde basés sur la Force, la Dextérité ou la Constitution.
      </p>
      <h3><a id="dex" className="ancre"
             href="/regles/caracteristiques/#dex">Dextérité</a>
      </h3><p>
      La Dextérité détermine l'agilité, les réflexes et l'équilibre.
    </p>
      <h4>Jets de Dextérité</h4><p
      className="encadre"><strong>SE CACHER</strong>
      <br/>
      <br/>
      En premier lieu, le MD décide si les circonstances
      sont appropriées pour se cacher. Ensuite, si vous essayez de vous cacher, faites un jet de Dextérité
      (Discrétion). Tant que vous n'êtes pas découvert ou que vous n'arrêtez pas de vous cacher, le résultat de ce
      jet est celui qui sera pris en compte pour une opposition avec le jet de Sagesse (Perception) de toute
      créature qui recherche activement des signes de votre présence.
      <br/>
      <br/>
      Vous ne pouvez pas vous cacher d'une
      créature qui peut vous voir clairement, et vous révélez votre position si vous faites du bruit, comme crier ou
      renverser un vase. Une créature invisible ne peut pas être vue, elle peut donc toujours essayer de se cacher.
      Les signes de son passage peuvent toutefois être découverts et elle doit donc rester calme.
      <br/>
      <br/>
      En
      combat, la plupart des créatures sont attentives aux signes de danger autour d'elles, donc si vous sortez de
      votre cachette pour vous approcher d'une créature, elle va normalement vous voir. Toutefois, dans certaines
      circonstances, le MD peut vous permettre de rester caché si vous vous approchez d'une créature qui est
      distraite, vous permettant ainsi de gagner un avantage lors de votre attaque avant d'être
      vu.
      <br/>
      <br/>
      <strong>Perception passive</strong>. Lorsque vous êtes caché, il y a une chance que quelqu'un
      vous remarque même s'il n'est pas à votre recherche. Pour déterminer si une créature vous remarque, le MD
      compare votre jet de Dextérité (Discrétion) avec la valeur de Sagesse (Perception) passive de la créature, qui
      est égale à 10 + le modificateur de Sagesse de la créature, plus d'éventuels bonus ou malus. Si la créature a
      un avantage, ajoutez 5. Si elle a un désavantage, soustraire 5. Par exemple, si un personnage de niveau 1
      (avec un bonus de maîtrise +2) a une Sagesse de 15 (et un modificateur +2) et maîtrise la compétence
      Perception, sa Sagesse (Perception) passive est de 14.
      <br/>
      <br/>
      <strong>Que pouvez-vous voir ?</strong> Pour
      déterminer si vous pouvez voir une créature ou un objet caché, il est important de savoir quelle est la
      visibilité dans la zone, qui peut être <strong>réduite </strong>ou <strong>nulle </strong>(voir <a
        href="/regles/aventure/">Partir à l'aventure</a>).
    </p>
      <p>
        Un jet de Dextérité peut modéliser toute tentative de se déplacer rapidement ou tranquillement, ou pour éviter
        de tomber dans un piège. Les compétences Acrobaties, Escamotage et Discrétion reflètent une aptitude à certains
        types de jets de Dextérité.
      </p>
      <p>
        <strong>Acrobaties</strong>. Un jet de Dextérité (Acrobaties) couvre votre tentative pour rester sur vos pieds
        dans une situation délicate, comme lorsque vous essayez de courir sur de la glace, de tenir en équilibre sur une
        corde raide, ou de rester debout sur le pont d'un navire chahuté. Le MD peut également demander un jet de
        Dextérité (Acrobaties) pour voir si vous pouvez effectuer des acrobaties, comme un plongeon, une roulade ou un
        saut périlleux.
      </p>
      <p>
        <strong>Discrétion</strong>. Faite un jet de Dextérité (Discrétion) lorsque vous essayez de vous cacher des
        ennemis, de vous glisser entre des gardes, filer sans vous faire remarquer, ou vous
        échapper sans être vu ou entendu.
      </p>
      <p>
        <strong>Escamotage</strong>. Chaque fois que vous tentez une manipulation ou une fourberie, comme prendre
        quelque chose à quelqu'un ou dissimuler un objet sur vous-même,
        faites un jet de Dextérité (Escamotage). Le MD peut également demander un jet de Dextérité (Escamotage) pour
        déterminer si vous pouvez dérober une bourse ou glisser quelque chose dans la poche de quelqu'un.
      </p>
      <p>
        <strong>Autres jets de Dextérité</strong>. Le MD peut également demander un jet de Dextérité lorsque vous
        essayez de réaliser l'une des tâches suivantes :</p>
      <ul>
        <li>Contrôler un chariot lourdement chargé sur une pente raide</li>
        <li>Manœuvrer un chariot dans un virage serré</li>
        <li>Crocheter une serrure</li>
        <li>Désarmer un piège</li>
        <li>Ligoter un prisonnier</li>
        <li>Détacher ses liens</li>
        <li>Jouer d'un instrument</li>
        <li>Fabriquer un petit objet ou un objet avec de petits détails</li>
      </ul>
      <h4>Jets d'attaque et de dégâts</h4><p>
      Vous ajoutez votre modificateur de Dextérité à votre jet d'attaque et de
      dégâts lors d'une attaque avec une arme à distance, comme une fronde ou un arc. Vous pouvez également ajouter
      votre modificateur de Dextérité à votre jet d'attaque et de dégâts lors d'une attaque avec une arme de corps à
      corps qui a la propriété finesse, comme une dague ou une rapière.
    </p>
      <h4>Classe d'armure</h4><p>
      Selon l'armure
      que vous portez, vous pouvez ajouter tout ou partie de votre modificateur de Dextérité à votre classe d'armure
      (voir <a href="/regles/equipement/armures/">Armures</a>).
    </p>
      <h4>Initiative</h4><p>
      Au début de chaque combat,
      vous lancez l'initiative en faisant un jet de Dextérité. L'initiative détermine l'ordre des tours des
      créatures en combat (voir <a href="/regles/combat/">Combat</a>).
    </p>
      <h3><a id="con" className="ancre"
             href="/regles/caracteristiques/#con">Constitution</a>
      </h3><p>
      La Constitution détermine la santé, l'endurance et la force vitale.
    </p>
      <h4>Jets de Constitution</h4>
      <p>
        Les jets de Constitution sont rares, et aucune compétence n'applique à un jet de Constitution, car l'endurance
        que cette caractéristique représente est généralement passive et n'implique pas un effort particulier de la part
        d'un personnage ou monstre. Un jet de Constitution peut toutefois modéliser votre tentative d'aller au-delà de
        vos limites normales.
      </p>
      <ul>
        <li>Le MD peut demander un jet de Constitution lorsque vous essayez d'accomplir des tâches comme :</li>
        <li>Retenir votre souffle</li>
        <li>Marcher ou travailler pendant des heures sans repos</li>
        <li>Ne pas dormir</li>
        <li>Survivre sans eau ni nourriture</li>
        <li>Boire une chope de bière d'un trait</li>
      </ul>
      <h4>Points de vie</h4><p>
      Votre modificateur de Constitution contribue à vos points de vie. En général, vous
      ajoutez votre modificateur de Constitution à chaque dé de vie jeté pour déterminer les points de vie.
    </p>
      <p>
        Si votre modificateur de Constitution change, votre maximum de points de vie change aussi, comme si vous aviez
        le nouveau modificateur dès le niveau 1. Par exemple, si vous augmentez votre valeur de Constitution lorsque
        vous atteignez le niveau 4 et que votre modificateur de Constitution passe de +1 à +2, vous ajustez votre
        maximum de points de vie comme si le modificateur avait toujours été +2. Vous ajoutez donc 3 points de vie pour
        vos trois premiers niveaux, puis lancez le dé pour vos points de vie du niveau 4 en utilisant votre nouveau
        modificateur. Ou bien, si vous êtes de niveau 7 et qu'un effet réduit votre valeur de Constitution avec comme
        conséquence de réduire votre modificateur de Constitution de 1, votre maximum de points de vie est réduit de 7.
      </p>
      <h3><a id="int" className="ancre" href="/regles/caracteristiques/#int">Intelligence</a></h3>
      <p>
        L'intelligence détermine l'acuité mentale, la précision de la mémoire et la capacité à raisonner.
      </p>
      <h4>Jets d'Intelligence</h4><p>
      Un jet d'Intelligence est nécessaire lorsque vous avez besoin de vous appuyer sur la
      logique, l'éducation, la mémoire, le raisonnement ou la déduction. Les compétences Arcanes, Histoire,
      Investigation, Nature, et Religion reflètent une aptitude à certains types de jets d'Intelligence.
    </p>
      <p>
        <strong>Arcanes</strong><span>. Un jet d'Intelligence (Arcanes) évalue votre aptitude à vous rappeler des choses à propos de sorts, d'objets magiques, de symboles occultes, de traditions magiques, de plans d'existence ou des habitants de ces plans.</span>
      </p>
      <p>
        <strong>Histoire</strong>. Un jet d'Intelligence (Histoire) évalue votre aptitude à vous rappeler des choses à
        propos d'événements historiques, de personnages légendaires, d'anciens royaumes, de conflits passés,
        de guerres récentes et de civilisations perdues.
      </p>
      <p>
        <strong>Investigation</strong>. Lorsque vous regardez autour de vous pour trouver des indices et faire des
        déductions sur la base de ces indices, vous faites un jet d'Intelligence (Investigation). Vous pouvez en déduire
        l'emplacement d'un objet caché, discerner en fonction de l'apparence d'une blessure le type d'arme utilisé, ou
        déterminer le point faible dans un tunnel pour causer son effondrement. Se pencher sur d'anciens manuscrits à la
        recherche d'informations cachées peut aussi demander un jet d'Intelligence (Investigation).
      </p>
      <p>
        <strong>Nature</strong>. Un jet d'Intelligence (Nature)
        évalue votre aptitude à vous rappeler des informations sur un type de terrain, des plantes ou des animaux, la
        météo et les cycles naturels.
      </p>
      <p>
        <strong>Religion</strong>. Un jet d'Intelligence (Religion) évalue votre aptitude à vous rappeler des choses à
        propos des dieux, des rites et des prières, la hiérarchie religieuse,
        les symboles sacrés et les pratiques de cultes secrets.
      </p>
      <p>
        <strong>Autres jets d'Intelligence</strong>. Le MD peut également demander un jet d'Intelligence lorsque vous
        essayez de réaliser l'une des tâches suivantes :
      </p>
      <ul>
        <li>Communiquer avec une créature sans utiliser de mots</li>
        <li>Estimer la valeur d'un objet précieux</li>
        <li>Se déguiser pour tromper un garde de la ville</li>
        <li>Falsifier un document</li>
        <li>Connaître quelque chose à propos d'un métier ou d'un commerce</li>
        <li>Gagner à un jeu de compétences</li>
      </ul>
      <h4>Capacité de lancer de sorts</h4><p>
      Les magiciens utilisent l'Intelligence comme caractéristique
      d'incantation, ce qui permet de déterminer le DD des jets de sauvegarde des sorts qu'ils lancent.
    </p>
      <h3><a id="sag" className="ancre" href="/regles/caracteristiques/#sag">Sagesse</a></h3><p>
      La Sagesse reflète la façon
      dont vous êtes à l'écoute du monde autour de vous, ainsi que la perspicacité et l'intuition.
    </p>
      <h4>Jets de Sagesse</h4><p>
      Un jet de Sagesse peut refléter l'effort pour lire le langage du corps, comprendre les
      sentiments de quelqu'un, noter quelque chose dans l'environnement ou soigner une personne blessée. Les
      compétences Dressage, Intuition, Médecine, Perception et Survie reflètent une aptitude à certains types de
      jets de Sagesse.
    </p>
      <p>
        <strong>Dressage</strong>. Quand il est question de savoir si vous pouvez calmer un animal domestique, faire
        qu'une monture ne s'effraye pas, ou deviner les intentions d'un animal, le MD peut demander un jet de Sagesse
        (Dressage). Vous pouvez également faire un jet de Sagesse (Dressage) pour contrôler votre monture lorsque vous
        tentez une manœuvre risquée.
      </p>
      <p className="encadre">
        <strong><strong>TROUVER UN OBJET CACHÉ</strong>
          <br/>
          <br/>
        </strong>Lorsque votre personnage recherche un objet caché, comme une porte secrète ou un piège, le MD vous
        demandera généralement de faire un jet de Sagesse (Perception). Ce jet peut
        être utilisé pour trouver des détails cachés ou d'autres informations et indices que vous pourriez autrement
        négliger.&nbsp;
        <br/>
        <br/>
        Dans la plupart des cas, vous devez décrire où vous cherchez afin que le MD puisse déterminer vos chances de
        succès. Par exemple, une clé est cachée sous des vêtements pliés dans le tiroir du haut d'un bureau. Si vous
        dites au MD que vous cherchez autour de la salle, en regardant les murs et les meubles pour trouver des indices,
        vous n'avez aucune chance de trouver la clé, quel que soit le résultat de votre jet de Sagesse (Perception).
        Vous devez spécifier que vous ouvrez les tiroirs ou que vous cherchez dans le bureau pour avoir une chance de
        succès.
      </p>
      <p>
        <strong>Intuition</strong>. Un jet de Sagesse (Intuition)
        détermine si vous pouvez déceler les véritables intentions d'une créature, comme lorsque vous tentez de savoir
        si elle ment ou pour prévoir son prochain mouvement. Cela implique de lire le langage du corps, détecter ses
        habitudes de langage et les changements dans ses manières.
      </p>
      <p>
        <strong>Médecine</strong>. Un jet de Sagesse
        (Médecine) permet d'essayer de stabiliser un compagnon mourant ou de diagnostiquer une maladie.
      </p>
      <p>
        <strong>Perception</strong>. Un jet de Sagesse (Perception) permet de repérer, entendre ou détecter la présence
        de quelque chose. Il mesure votre conscience de l'environnement et l'acuité de vos sens. Par exemple,
        vous pouvez essayer d'entendre une conversation à travers une porte fermée, espionner par une fenêtre ouverte,
        ou entendre des monstres se faufiler dans la forêt. Vous pouvez aussi essayer de repérer des choses qui sont
        cachées ou difficiles à déceler, que ce soient des orcs en embuscade sur une route, des voyous cachés dans
        l'ombre d'une ruelle ou la lueur d'une chandelle sous une porte secrète fermée.
      </p>
      <p>
        <strong>Survie</strong>.
        Le MD peut vous demander de faire un jet de Sagesse (Survie) pour suivre des traces, chasser du gibier sauvage,
        guider votre groupe sur un terrain gelé, identifier des traces indiquant qu'un ours-hibou vit à
        proximité, prévoir le temps ou éviter des sables mouvants et autres catastrophes naturelles.
      </p>
      <p>
        <strong>Autres
          jets de Sagesse</strong>. Le MD peut également demander un jet de Sagesse lorsque vous essayez de réaliser
        l'une des tâches suivantes :</p>
      <ul>
        <li>Avoir un pressentiment sur le plan d'action à suivre</li>
        <li>Discerner si une créature apparemment morte ou vivante est un mort-vivant</li>
      </ul>
      <h4>Capacité de lancer de sorts</h4><p>
      Les clercs, les druides et les rôdeurs utilisent la Sagesse comme
      caractéristique d'incantation, ce qui permet de déterminer le DD des jets de sauvegarde des sorts qu'ils
      lancent.
    </p>
      <h3><a id="cha" className="ancre" href="/regles/caracteristiques/#cha">Charisme</a></h3><p>
      Le
      Charisme détermine votre capacité à interagir efficacement avec les autres. Il comprend des facteurs comme la
      confiance et l'éloquence, et peut représenter une personnalité charmante ou dominante.
    </p>
      <h4>Jets de Charisme</h4><p>
      <img src="/assets/regles/caracteristiques2.jpg" alt="Utiliser les caractéristiques"
           width="348" height="800" className="rightlite ss-htmleditorfield-file image"
           title="Utiliser les caractéristiques" loading="lazy"/>Un jet de Charisme peut être
      nécessaire lorsque vous essayez d'influencer ou de divertir les autres, lorsque vous essayez de faire
      impression ou de dire un mensonge de manière convaincante, ou lorsque vous êtes au milieu d'une situation
      sociale difficile. Les compétences de Tromperie, Intimidation, Représentation et Persuasion reflètent une
      aptitude à certains types de jets de Charisme.
    </p>
      <p>
        <strong>Intimidation</strong>. Lorsque vous essayez d'influencer les gens par des menaces ouvertes, des actions
        hostiles, ou de la violence physique, le MD peut vous demander de faire un jet de Charisme (Intimidation). Cela
        peut appliquer pour essayer de soutirer des informations à un prisonnier, convaincre des voyous de renoncer à
        une confrontation, ou utiliser un tesson de bouteille pour convaincre un vizir sarcastique de réexaminer sa
        décision.
      </p>
      <p>
        <strong>Persuasion</strong>.
        Lorsque vous essayez d'influencer quelqu'un ou un groupe de personnes avec tact, grâce, ou de bonnes manières,
        le MD peut vous demander de faire un jet de Charisme (Persuasion). En règle générale, vous utilisez la
        persuasion lorsque vous agissez de bonne foi, afin de favoriser l'amitié, faire des demandes cordiales, ou
        utiliser l'étiquette appropriée. Vous pouvez utiliser la persuasion pour convaincre un chambellan de laisser
        votre groupe voir le roi, négocier la paix entre deux tribus en guerre, ou motiver une foule de citadins.
      </p>
      <p>
        <strong>Représentation</strong>. Un jet de Charisme (Représentation) détermine la façon dont vous pouvez
        enchanter un public par la musique, la danse, le théâtre, le conte ou toute autre forme de divertissement.
      </p>
      <p>
        <strong>Tromperie</strong>. Un jet de Charisme (Tromperie) détermine si vous pouvez cacher la vérité avec
        efficacité, soit verbalement, soit par vos actions. La tromperie peut englober beaucoup de choses, depuis
        l'ambiguïté de ses dires jusqu'au mensonge pur et simple. Des situations typiques sont d'essayer d'embobiner un
        garde, duper un commerçant, gagner de l'argent au jeu, vous faire passer pour quelqu'un d'autre à l'aide d'un
        déguisement, apaiser les soupçons de quelqu'un avec une fausse assurance, ou maintenir un visage impassible tout
        en racontant un mensonge flagrant.
      </p>
      <p>
        <strong>Autres jets de Charisme</strong>. Le MD peut
        également demander un jet de Charisme lorsque vous essayez de réaliser l'une des tâches suivantes :</p>
      <ul>
        <li>Trouver la meilleure personne pour obtenir des informations, des rumeurs, des ragots</li>
        <li>Se fondre dans la foule pour obtenir une idée générale des sujets de conversations</li>
      </ul>
      <h4>Capacité de lancer de sorts</h4><p>
      Les bardes, les ensorceleurs, les occultistes et les paladins utilisent
      le Charisme comme caractéristique d'incantation, ce qui permet de déterminer le DD des jets de sauvegarde des
      sorts qu'ils lancent.
    </p>
      <h2><a id="sauvegarde" className="ancre" href="/regles/caracteristiques/#sauvegarde">Jets de sauvegarde</a></h2>
      <p>
        Un jet de sauvegarde (appelé aussi sauvegarde tout court) représente une tentative
        pour résister à un sort, un piège, un poison, une maladie ou autre menace similaire. Vous ne décidez
        normalement pas de faire un jet de sauvegarde, vous êtes obligé de le faire parce que votre personnage ou
        monstre est en danger. Pour faire un jet de sauvegarde, lancez un d20 et ajoutez le modificateur de
        caractéristique adéquat. Par exemple, vous utilisez votre modificateur de Dextérité pour un jet de sauvegarde
        de Dextérité. Un jet de sauvegarde peut être modifié par un bonus ou un malus de situation, et peut être
        affecté par un avantage ou un désavantage, selon ce que détermine le MD.
      </p>
      <p>
        Chaque classe donne la maîtrise d'au moins deux jets de sauvegarde. Le magicien, par exemple, maîtrise les jets
        de sauvegarde basés sur l'Intelligence. Comme pour la maîtrise des compétences la maîtrise d'un jet de
        sauvegarde permet à un personnage d'ajouter son bonus de maîtrise aux jets de sauvegarde pour une
        caractéristique donnée. Certains monstres ont également la maîtrise d'un jet de sauvegarde.
      </p>
      <p>
        Le Degré de Difficulté pour un jet de sauvegarde est déterminé par l'effet qu'il provoque. Par exemple, le DD
        pour un jet de sauvegarde d'un sort est déterminé par la caractéristique d'incantation du lanceur et son bonus
        de maîtrise. Le résultat d'un jet de sauvegarde, réussi ou non, est également détaillé dans l'effet qui permet
        la sauvegarde. Habituellement,
        une sauvegarde réussie signifie que la créature ne souffre d'aucun dégât, ou de dégâts réduits.
      </p>
    </Main>
  )
}

export const Aventure = () => {
  return (
    <Main name={"Partir à l'aventure"} lastUnit={true}>
      <p>
        Fouiller dans l'ancien Tombeau des horreurs, se faufiler dans les sombres ruelles de Waterdeep, se frayer un
        chemin à coup de lame dans l'épaisse jungle de l'Île de la terreur, voilà de quoi sont faites les aventures de
        D&amp;D. Le personnage que vous personnifiez va explorer des ruines oubliées et des territoires jamais
        cartographiés, découvrir de sombres secrets et des complots sinistres, et occire d'horribles monstres. Si tout
        va bien, votre personnage survivra et obtiendra de riches récompenses avant de repartir pour de nouvelles
        aventures. Ce chapitre couvre les bases de la vie d'aventure, des mécaniques du mouvement aux complexités de
        l'interaction sociale. Les règles du repos se trouvent aussi ici, tout comme un survol des activités que votre
        personnage pourrait entreprendre entre les aventures.
      </p>
      <p>
        Que des aventuriers explorent un donjon poussiéreux ou qu'ils soient mêlés aux intrigues complexes d'une cour
        royale, le jeu suit un rythme naturel, comme cela est expliqué dans l'<a href="/regles/">introduction</a> :</p>
      <ol>
        <li>Le MD décrit l'environnement.</li>
        <li>Les joueurs décrivent ce qu'ils veulent faire.</li>
        <li>Le MD décrit le résultat de leurs actions.</li>
      </ol>
      <p>
        En général, le MD utilise une carte comme support pour l'aventure, suivant les déplacements des personnages au
        fur et à mesure qu'ils explorent les couloirs d'un donjon ou des contrées sauvages. Les notes du MD, qui
        incluent l'essentiel de la carte, décrivent ce que les aventuriers trouveront à mesure qu'ils entrent dans de
        nouvelles zones. Parfois, le temps écoulé et les actions des aventuriers déterminent ce qui se produit, de sorte
        que le MD peut vouloir utiliser une chronologie ou un organigramme pour retracer leur progression au lieu d'une
        carte.
      </p>
      <h2><a id="temps" className="ancre" href="/regles/aventure/#temps">Temps</a></h2><p>
      Dans
      les situations où suivre le temps écoulé est important, le MD détermine le temps qu'une tâche requiert. Le MD
      peut utiliser une échelle de temps différente suivant le contexte de la situation qui se présente. Dans
      l'environnement d'un donjon, les déplacements des aventuriers utilisent une échelle de temps
      en <strong>minutes</strong>. Il leur faudra environ une minute pour dévaler un long couloir, une autre minute
      pour examiner la porte au fond du hall à la recherche de pièges, puis dix bonnes minutes pour fouiller la
      chambre au-delà à la recherche de quelque chose d'intéressant ou ayant de la valeur.
    </p>
      <p>
        Dans une ville ou dans la nature, une échelle de temps en <strong>heures</strong> est souvent plus appropriée.
        Les aventuriers désireux de voyager jusqu'à la tour perdue au cœur de la forêt parcourront un peu plus d'une
        vingtaine de kilomètres en quatre heures.
      </p>
      <p>
        Lors de longs voyages, une échelle en <strong>jours</strong> fonctionne mieux. Suivant la route qui va de la
        Porte de Baldur à Waterdeep, les aventuriers passent quatre jours sans
        événement notable lorsqu'une embuscade de gobelins interrompt leur voyage.
      </p>
      <p>
        Lors de combats et d'autres situations qui se déroulement rapidement, le jeu repose sur un système de rounds, un
        court laps de temps de six secondes, décrits dans le chapitre <a href="/regles/combat/">Combat</a>.
      </p>
      <h2><a id="deplacements"
             className="ancre"
             href="/regles/aventure/#deplacements">Déplacement</a>
      </h2><p>
      Nager à travers une rivière torrentielle, se faufiler dans le tunnel d'un donjon, escalader l'abrupte
      falaise d'une montagne, les mouvements jouent un rôle clé dans les aventures de D&amp;D.
    </p>
      <p>
        Le MD peut résumer les déplacements des aventuriers sans forcément calculer les distances exactes durant le
        voyage :
        «&nbsp;<em>Vous voyagez dans la forêt et trouvez l'entrée du donjon en soirée, le troisième jour</em>&nbsp;».
        Même dans un donjon, particulièrement dans de gros donjons et dans des réseaux de grottes, le MD peut résumer
        les déplacements entre les rencontres : «&nbsp;<em>Après avoir tué le gardien à l'entrée de l'ancienne
        forteresse naine, vous consultez votre carte qui vous conduit à travers des kilomètres de couloirs résonants
        jusqu'à un gouffre traversé par un étroit pont arqué en pierre</em>&nbsp;».
      </p>
      <p>
        Parfois, il est important,
        de savoir combien de temps il vous faudra pour vous rendre d'un endroit à l'autre, peu importe que le temps se
        compte en jours, en heures ou en minutes. Les règles pour déterminer le temps d'un voyage dépendent de deux
        facteurs : la vitesse et le rythme de déplacement des créatures se déplaçant, et le terrain sur lequel elles se
        déplacent.
      </p>
      <h3>Vitesse</h3><p>
      <img src="/assets/regles/aventure1.jpg" alt="Partir à l'aventure"
           width="400" height="317"
           className="right ss-htmleditorfield-file image"
           title="Partir à l'aventure" loading="lazy"/>Chaque personnage et
      chaque monstre ont une vitesse spécifique, ce qui représente la distance en mètres que le personnage ou le
      monstre peut parcourir en marchant lors d'un round. Ce chiffre présuppose de brefs déplacements énergiques
      lors de situations dangereuses.
    </p>
      <p>
        Les règles qui suivent déterminent la distance qu'un personnage ou un monstre peut franchir en une minute, en
        une heure ou en une journée.
      </p>
      <h4>Rythme de déplacement</h4><p>
      En
      voyageant, un groupe d'aventuriers peut se déplacer à un rythme normal, rapide ou lent, comme le montre la
      table ci-dessous. Cette table détermine la distance que le groupe peut parcourir pour une période de temps
      donnée et si le rythme de déplacement a un effet quelconque. Un rythme de déplacement rapide aura pour effet
      de rendre votre personnage moins sensible à son environnement, alors qu'un rythme de déplacement lent lui
      permet de se faufiler dans un endroit et de le fouiller avec précaution (voir Activités lors d'un déplacement
      plus bas).
    </p>
      <p>
        <strong>Marche forcée</strong>. La table suppose que les personnages marchent 8 heures durant une journée. Ils
        peuvent repousser cette limite, mais encourent le risque d'être épuisés. Pour chaque heure de voyage
        additionnelle après la huitième, les personnages couvrent la distance notée dans la colonne Heures suivant leur
        rythme, et chaque personnage doit faire un jet de sauvegarde de Constitution à la fin de l'heure.
        Le DD est de 10 + 1 pour chaque heure après la huitième. En cas d'échec, le personnage souffrira d'un niveau
        d'épuisement (voir <a href="/regles/etats/">Épuisement</a>).
      </p>
      <p>
        <strong>Montures et véhicules</strong>.
        Pour de courts laps de temps (allant jusqu'à une heure), de nombreux animaux se déplacent beaucoup plus
        rapidement que des humanoïdes. Un personnage sur une monture peut galoper pendant une heure, couvrant le double
        de la distance habituelle à un rythme de déplacement rapide. Si une monture reposée est disponible chaque 12 à
        15 kilomètres, les personnages peuvent couvrir des distances plus grandes à ce rythme, chose qui est toutefois
        très rare, sauf dans les endroits très peuplés. Les personnages dans des chariots ou autres véhicules terrestres
        ont un rythme de déplacement normal. Les personnages dans des embarcations navales sont limités à la vitesse de
        leur embarcation (voir <a href="/regles/equipement/">Équipement</a>), et ne sont pas pénalisés lors d'un rythme
        de déplacement rapide, mais n'ont pas non plus de bonus associé à un rythme de déplacement lent. Suivant
        l’embarcation, sa grandeur et son équipage, les navires peuvent naviguer jusqu'à 24 heures par jour. Certaines
        montures spéciales, comme un pégase ou un griffon, ou des véhicules spéciaux comme un tapis volant, vous
        permettent de voyager plus rapidement encore.
      </p>
      <table>
        <tbody>
        <tr>
          <th colSpan="5">&nbsp;</th>
        </tr>
        <tr>
          <th>&nbsp;</th>
          <th colSpan="3">Distance parcourue par ...</th>
          <th>&nbsp;</th>
        </tr>
        <tr>
          <th>Rythme</th>
          <th>Minute</th>
          <th>Heure</th>
          <th>Jour</th>
          <th>Effet</th>
        </tr>
        <tr>
          <td>Rapide</td>
          <td>120 mètres</td>
          <td>6 km</td>
          <td>45 km</td>
          <td>Malus de -5 à la valeur de Sagesse (Perception) passive</td>
        </tr>
        <tr>
          <td>Normal</td>
          <td>90 mètres</td>
          <td>4,5 km</td>
          <td>36 km</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Lent</td>
          <td>60 mètres</td>
          <td>3 km</td>
          <td>27 km</td>
          <td>Discrétion possible</td>
        </tr>
        </tbody>
      </table>
      <h4>Terrain difficile</h4><p>
      La vitesse de déplacement donnée dans la table suppose un terrain relativement
      simple : routes, plaines, ou couloirs de donjons déblayés. Mais les aventuriers sont souvent confrontés à de
      denses forêts, de profonds marais, des ruines jonchées d'éboulements, des montagnes escarpées et des surfaces
      couvertes de glace. Ces étendues sont toutes considérées comme du terrain difficile.
    </p>
      <p>
        Vous vous déplacez
        à la moitié de votre vitesse en terrain difficile (se déplacer d'un mètre en terrain difficile coûte 2 mètres de
        déplacement), ce qui fait que vous couvrez seulement la moitié de la distance normale en une minute, une heure
        ou un jour.
      </p>
      <h3>Types de déplacements spéciaux</h3><p>
      Les déplacements à travers de dangereux donjons
      ou dans des contrées sauvages impliquent souvent plus que de la simple marche. Les aventuriers risquent de
      devoir escalader, ramper, nager ou sauter pour atteindre l'endroit où ils souhaitent se rendre.
    </p>
      <h4>Escalader, nager et ramper</h4><p>
      Lorsque vous escaladez ou nagez, chaque mètre de déplacement en coûte un
      autre (ou deux autres si le terrain est difficile), sauf si la créature possède une vitesse d'escalade ou de
      nage. À la discrétion du MD, escalader une paroi verticale et glissante ou dépourvue de point d'appui,
      nécessitera un jet de Force (Athlétisme) réussi. Au même titre, franchir une distance à travers des eaux
      agitées peut demander un jet de Force (Athlétisme) réussi.
    </p>
      <h4>Sauter</h4><p>
      Votre Force détermine la
      distance que vous pouvez sauter.
    </p>
      <p>
        <strong>Saut en longueur</strong>. Lorsque vous faites un saut en longueur, vous couvrez un nombre de mètres
        égal à votre valeur de Force divisée par 3 si vous prenez un élan d'au moins 3 mètres. Lorsque vous faites un
        saut en longueur sans élan, vous pouvez seulement franchir la moitié de cette distance. Dans les deux cas,
        chaque mètre franchi lors du saut coûte un mètre de déplacement.
      </p>
      <p>
        Cette règle considère que la hauteur de votre saut n'importe pas, comme lors d'un saut au-dessus d'un ruisseau
        ou d'une crevasse. À la discrétion du MD, vous pouvez devoir réussir un jet de Force (Athlétisme) DD 10 pour
        sauter au-dessus d'un petit obstacle (pas plus haut que le quart de votre distance de saut), comme une haie ou
        un petit mur. Dans le cas contraire, vous le touchez.
      </p>
      <p>
        Lorsque vous atterrissez sur un terrain difficile, vous devez réussir un jet de Dextérité (Acrobaties) DD 10
        pour retomber sur vos pieds. Dans le cas contraire, vous tombez à terre.
      </p>
      <p>
        <strong>Saut en hauteur</strong>. Lorsque vous faites un saut en hauteur, vous faites un bond d'un nombre de
        mètres égal à votre modificateur de Force divisé par 3 + 1
        (minimum 0) si vous prenez un élan d'au moins 3 mètres. Lorsque vous faites un saut sans élan, vous pouvez
        atteindre seulement la moitié de cette hauteur. Dans les deux cas, chaque mètre franchi lors du saut coûte un
        mètre de déplacement. Dans des circonstances particulières, votre MD peut vous demander un jet de Force
        (Athlétisme) pour sauter plus haut que votre capacité normale.
      </p>
      <p>
        Vous pouvez étendre vos bras de la moitié
        de votre taille au-dessus de vous durant le saut. Cela vous permettra d'atteindre un point au-dessus de vous
        situé à la hauteur du saut plus une fois et demie votre taille.
      </p>
      <h3>Activités lors d'un déplacement</h3>
      <p>
        Lorsque des aventuriers se déplacent à travers un donjon ou dans des contrées sauvages, ils doivent rester à
        l’affût du danger, et certains devront réaliser d'autres tâches afin d'aider le groupe dans son voyage.
      </p>
      <h4>Ordre de marche</h4><p>
      Il est recommandé aux aventuriers d'établir un ordre de marche. Un ordre de marche
      aide à déterminer quels personnages sont affectés par des pièges, lesquels peuvent détecter un ennemi caché et
      lesquels sont les plus proches de l'ennemi lorsque le combat éclate. Un personnage occupera la première
      position dans l'ordre de marche, un ou plusieurs autres seront au milieu, et un autre occupera la dernière
      position, à l'arrière. Plusieurs personnages à l'avant ou à l'arrière ont besoin d'assez d'espace pour pouvoir
      se déplacer côte à côte. Quand l'espace devient trop petit, l'ordre de marche doit changer, ce qui se fait
      habituellement en déplaçant des personnages vers la position du milieu.
    </p>
      <p>
        <strong>Moins de trois
          positions</strong>. Si un groupe d'aventuriers organise son ordre de marche avec seulement deux positions de
        marche, il n'y a alors que la première et la dernière position. S'il n'y a qu'une seule position, on considère
        que c'est la première.
      </p>
      <h4>Discrétion</h4><p className="encadre">
      <strong>SÉPARER LE
        GROUPE</strong>
      <br/>
      <br/>
      Parfois, il est nécessaire de séparer un groupe d'aventuriers, spécialement si vous
      voulez qu'un ou plusieurs personnages partent en éclaireurs. Vous pouvez créer plusieurs groupes, chacun se
      déplaçant à une vitesse différente. Chaque groupe a ses propres positions : avant, milieu et
      arrière.
      <br/>
      <br/>
      L'inconvénient est que le groupe d'aventuriers se retrouve séparé en plusieurs petits
      groupes en cas d'attaque. L'avantage est qu'un petit groupe de personnages discrets qui se déplace lentement
      pourra plus facilement se faufiler derrière des ennemis que des personnages moins discrets qui risqueraient de
      donner l'alerte. Un duo de roublards se déplaçant à un rythme lent est beaucoup plus difficile à détecter s'il
      laisse leur compagnon nain guerrier à l'arrière.
    </p>
      <p>
        En se déplaçant à un rythme lent, les personnages peuvent se déplacer discrètement. Aussi longtemps qu'ils ne
        sont pas à découvert, ils peuvent essayer de prendre par surprise ou de se faufiler derrière d'autres créatures
        qu'ils rencontrent (voir les règles pour <a href="/regles/caracteristiques/">se cacher</a>).
      </p>
      <h4>Remarquer des menaces</h4><p>
      Utilisez la valeur de
      Sagesse (Perception) passive des personnages pour déterminer si quelqu'un dans le groupe remarque une menace
      cachée. Le MD peut décider qu'une menace peut être remarquée seulement par les personnages d'une position
      particulière de l'ordre de marche. Par exemple, lorsque les personnages explorent un dédale de tunnels, le MD
      peut décider que seuls ceux dont les personnages sont à l'arrière ont la possibilité d'entendre ou de voir une
      créature qui suit discrètement le groupe, et que les personnages à l'avant ou au milieu ne le peuvent pas. En
      se déplaçant à un rythme rapide, les personnages ont un malus de -5 à leur valeur de Sagesse (Perception)
      passive pour remarquer des menaces cachées.
    </p>
      <p>
        <strong>Rencontres avec des créatures</strong>. Si le MD détermine que les aventuriers rencontrent d'autres
        créatures pendant qu'ils se déplacent, il incombe à chacun des deux groupes de décider ce qui se produira
        ensuite. Chacun des deux groupes peut décider d'attaquer,
        d'engager la conversation, de fuir ou de simplement attendre de voir ce que l'autre groupe fera.
      </p>
      <p>
        <strong>Prendre des ennemis par surprise</strong>. Si les aventuriers rencontrent une créature ou un groupe
        hostile, le MD détermine si les aventuriers ou leurs ennemis sont pris par surprise lorsque le combat éclate
        (voir <a href="/regles/combat/">Combat</a> pour gérer la surprise).
      </p>
      <h4>Autres activités</h4><p>
      Les
      personnages qui se concentrent sur d'autres tâches lorsque le groupe voyage ne sont pas à l’affût des dangers.
      Ces personnages ne contribuent donc pas à la valeur de Sagesse (Perception) passive du groupe pour détecter
      des menaces. Par contre, un personnage qui ne surveille pas les dangers potentiels peut accomplir une des
      activités suivantes avec la permission du MD.
    </p>
      <p>
        <strong>Naviguer</strong>. Le personnage peut essayer d'éviter au groupe de se perdre, en faisant un jet de
        Sagesse (Survie) lorsque le MD le demande.
      </p>
      <p>
        <strong>Dessiner une carte</strong>. Le personnage peut dessiner une carte qui retrace la progression du groupe
        et qui aide les personnages à revenir sur le bon chemin s'ils venaient à se perdre. Aucun jet de caractéristique
        n'est alors nécessaire.
      </p>
      <p>
        <strong>Suivre des traces</strong>. Un personnage peut suivre les traces d'une autre créature, en réalisant un
        jet de Sagesse (Survie) lorsque le MD le demande.
      </p>
      <p>
        <strong>Chercher de la nourriture</strong>. Le personnage peut rester à l’affût de sources de nourriture et
        d'eau en réalisant un jet de Sagesse (Survie) lorsque le MD le demande.
      </p>
      <h2><a id="environnement"
             className="ancre"
             href="/regles/aventure/#environnement">Environnement</a>
      </h2><p>
      De par sa nature, une aventure implique de fouiller dans des endroits sombres, dangereux et plein de
      mystères qui ne demandent qu'à être explorés. Les règles qui suivent couvrent les principales façons qu'ont
      les aventuriers pour interagir avec l'environnement.
    </p>
      <h3>Chuter</h3><p>
      Tomber d'une grande hauteur est un
      des périls les plus communs auquel les aventuriers vont faire face. À la fin d'une chute, une créature reçoit
      1d6 points de dégâts contondants pour chaque 3 mètres de chute, jusqu'à un maximum de 20d6. La créature
      termine à terre, à moins qu'elle ne réussisse à éviter les dégâts associés à la chute.
    </p>
      <h3>Suffoquer</h3>
      <p>
        Une créature peut retenir sa respiration pendant un nombre de minutes égal à 1 + son modificateur de
        Constitution (minimum 30 secondes).
      </p>
      <p>
        Lorsqu'une créature ne peut plus respirer, elle peut survivre pendant un nombre de rounds égal à son
        modificateur de Constitution (minimum 1 round). Au début de son prochain tour, elle tombe à 0 point de vie, est
        mourante, et elle ne peut regagner des points de vie ni être stabilisée jusqu'à ce qu'elle puisse respirer de
        nouveau. Par exemple, une créature avec une valeur de Constitution de 14 peut retenir sa respiration pendant
        trois minutes. Si elle commence à suffoquer, elle a deux rounds pour trouver de l'air avant de tomber à 0 point
        de vie.
      </p>
      <h3>Vision et lumière</h3><p>
      Les tâches
      les plus fondamentales d'une aventure (détecter un danger, trouver des objets cachés, frapper un ennemi durant
      un combat et lancer un sort, pour ne nommer que ceux-ci) dépendent de la capacité de l'aventurier à voir. Les
      ténèbres et autres effets qui entravent la vision peuvent s'avérer très gênants.
    </p>
      <p>
        Une zone donnée peut avoir une visibilité réduite ou nulle. Dans une zone avec une <strong>visibilité
        réduite</strong> (une lumière faible, un brouillard irrégulier ou un feuillage clairsemé) les créatures ont un
        désavantage aux jets de Sagesse (Perception) qui dépendent de la vision.
      </p>
      <p>
        Une zone avec une <strong>visibilité
        nulle</strong> (des ténèbres, un épais brouillard ou un feuillage dense) bloque entièrement le champ de vision.
        Une créature souffre en fait de l'état aveuglé lorsqu'elle essaye de voir quelque chose dans cette zone.
      </p>
      <p>
        La présence ou l'absence de lumière dans un environnement donné crée trois catégories d'illumination : lumière
        vive, lumière faible et ténèbres.
      </p>
      <p>
        Une <strong>lumière vive</strong> permet à la plupart des créatures de voir normalement. Même un jour gris
        produit une lumière vive, comme le feraient des torches, des lanternes, des feux et d'autres sources
        d'illumination avec un rayon spécifique.
      </p>
      <p>
        Une <strong>lumière faible</strong>, aussi appelée pénombre, génère une zone à visibilité réduite. Une lumière
        faible est généralement l'extension d'une source de lumière vive, comme une torche ou des ténèbres
        environnantes. La lumière du crépuscule ou de l'aube est aussi considérée comme une lumière faible. Une pleine
        lune particulièrement brillante peut éclairer la nuit d'une lumière faible.
      </p>
      <p>
        Les <strong>ténèbres</strong> créent une zone de visibilité nulle. Les personnages sont confrontés aux ténèbres
        de nuit (même la plupart des nuits avec la lune), aux confins d'un donjon sans éclairage, dans une crypte
        souterraine ou dans une zone de ténèbres magiques.
      </p>
      <h4>Vision aveugle</h4><p>
      Une créature avec
      vision aveugle peut percevoir ce qui l'entoure sans dépendre de sa vue, et ce dans un rayon spécifique. Les
      créatures sans yeux, comme les vases, et les créatures munies d'écholocalisation ou de sens accrus, comme les
      chauves-souris et les vrais dragons, possèdent ce sens.
    </p>
      <h4>Vision dans le noir</h4><p>
      Bon nombre de
      créatures dans les mondes de D&amp;D, spécialement celles qui vivent sous terre, sont dotées de vision dans le
      noir. Sur une distance donnée, une créature dotée de vision dans le noir peut voir dans une zone de lumière
      faible comme s'il s'agissait de lumière vive, et dans les ténèbres comme s'il s'agissait de lumière faible, ce
      qui fait que les ténèbres sont pour elle une zone à visibilité réduite. Une créature ne peut cependant pas
      discerner les couleurs dans les ténèbres, seulement des nuances de gris.
    </p>
      <h4>Vision véritable</h4><p>
      Une
      créature dotée de vision véritable peut, dans un rayon de portée spécifique, voir normalement dans les
      ténèbres magiques, voir les créatures et les objets invisibles, détecter automatiquement les illusions
      visuelles et réussir les jets de sauvegarde contre celles-ci, ainsi que percevoir la forme originale d'un
      métamorphe ou d'une créature transformée grâce à la magie. La créature peut même voir dans le plan éthéré.
    </p>
      <h3>Nourriture et eau</h3><p>
      Les personnages qui ne mangent ou ne boivent pas souffrent d'<a
      href="/regles/etats/">épuisement</a>. L'épuisement causé par le manque de nourriture ou d'eau ne peut être
      éliminé tant que le personnage ne mange et ne boit pas la quantité totale nécessaire.
    </p>
      <h4>Nourriture</h4>
      <p>
        Un personnage a besoin de 500 g de nourriture par jour et peut faire durer sa réserve de nourriture plus
        longtemps en ne mangeant que des demi-rations. Manger 250 g de nourriture par jour compte comme un demi-jour
        sans nourriture.
      </p>
      <p>
        Un personnage peut survivre sans nourriture pendant un nombre de jours égal à 3 + son modificateur de
        Constitution (minimum 1). À la fin de chaque jour au-delà de cette limite, un personnage souffre automatiquement
        d'un niveau d'épuisement. Un jour passé en ayant mangé normalement remet le compteur de jours sans nourriture à
        zéro.
      </p>
      <h4>Eau</h4><p>
      Un personnage a besoin de 4 litres d'eau par jour, ou du
      double (8 litres) s'il fait chaud. Un personnage qui boit seulement la moitié de cette quantité d'eau doit
      réussir un jet de sauvegarde de Constitution DD 15 ou encaisser un niveau d'épuisement à la fin du jour. Un
      personnage qui boit encore moins d'eau que cela encaisse automatiquement un niveau d'épuisement à la fin du
      jour. Si un personnage a déjà un ou plusieurs niveaux d'épuisement, le personnage encaisse deux niveaux dans
      les deux cas.
    </p>
      <h3>Interactions avec des objets</h3><p>
      Les interactions d'un personnage avec les objets dans
      un environnement sont souvent simples à résoudre dans le jeu. Le joueur dit au MD que son personnage fait
      quelque chose, comme actionner un levier, et le MD décrit ce qui se produit... si quelque chose se produit.
      Par exemple, un personnage peut décider de tirer un levier qui peut, à son tour, lever une herse, inonder une
      pièce d'eau ou ouvrir une porte secrète dans un mur tout près. Si le levier est bloqué, le personnage peut
      décider de le forcer. Dans ce cas, le MD peut demander un jet de Force pour voir si le personnage réussit à
      débloquer le levier. Le MD fixe le DD pour chacun de ces jets, en fonction de la difficulté de la tâche.
    </p>
      <p>
        Les personnages peuvent aussi endommager des objets avec leurs armes et leurs sorts. Les objets sont immunisés
        au poison et aux dégâts psychiques, mais sont affectés par les attaques physiques et magiques, tout comme les
        créatures. Le MD détermine la classe d'armure d'un objet et ses points de vie, et peut aussi décider que
        certains objets ont une résistance ou une immunité à certains types d'attaques (il est difficile de couper une
        corde avec un bâton, par exemple). Les objets ratent toujours leurs jets de sauvegarde de Force et de Dextérité
        et sont immunisés aux effets qui requièrent d'autres jets de sauvegarde. Lorsqu'un objet atteint 0 point de vie,
        il se brise. Un personnage peut aussi tenter un jet de Force afin de briser un objet. Le MD fixe le DD pour
        chacun de ces jets.
      </p>
      <h2><a id="interactions" className="ancre"
             href="/regles/aventure/#interactions">Interactions sociales</a></h2>
      <p>
        <img src="/assets/regles/aventure2.jpg" alt="Partir à l'aventure" width="339" height="600"
             className="rightlite ss-htmleditorfield-file image" title="Partir à l'aventure" loading="lazy"/>Explorer
        des donjons, outrepasser des obstacles et pourfendre des monstres sont des aspects clés des aventures de
        D&amp;D. Tout aussi importantes, toutefois, sont les interactions sociales que les aventuriers ont avec les
        autres habitants du monde. Les interactions peuvent prendre plusieurs formes. Il se peut que vous deviez
        convaincre un voleur peu scrupuleux de confesser des actions malhonnêtes ou alors que vous deviez complimenter
        un dragon pour qu'il épargne votre vie. Le MD assume les rôles de chacun des personnages qui participent aux
        interactions et qui ne sont pas ceux des joueurs à la table. N'importe lequel de ces personnages est appelé
        un<strong> personnage non-joueur</strong> (PNJ).
      </p>
      <p>
        En termes généraux, l'attitude des PNJ face à vous est décrite comme amicale, indifférente ou hostile. Les PNJ
        amicaux sont prédisposés à vous aider, alors que ceux qui sont hostiles sont plus susceptibles de vous barrer la
        route. Il est bien-sûr plus facile d'obtenir ce que vous désirez d'un PNJ amical.
      </p>
      <p>
        Les interactions sociales comportent deux principaux aspects : le jeu de rôle et les jets de caractéristique.
      </p>
      <h3>Jeu de rôle</h3><p>
      Le jeu de rôle [roleplay] est, littéralement,
      l'action de jouer un rôle. Dans ce cas, c'est vous, en tant que joueur, qui déterminez comment votre
      personnage pense, agit et parle. Le jeu de rôle est partie intégrante de tous les aspects du jeu, et il est
      mis en avant lors des interactions sociales. L’excentricité, les manières et la personnalité de votre
      personnage influencent le dénouement de vos interactions.
    </p>
      <p>
        Il y a deux styles que vous pouvez utiliser lorsque vous faites du jeu de rôle : l'approche descriptive et
        l'approche active. La plupart des joueurs utilisent une combinaison de ces deux styles. Utilisez celui qui
        fonctionne le mieux pour vous.
      </p>
      <h4>Approche descriptive</h4><p>
      Avec cette approche, vous décrivez les mots et les actions de votre personnage à
      votre MD et aux autres joueurs. En vous servant d'une image mentale de votre personnage, vous racontez à tous
      ce que votre personnage fait et comment il le fait.
    </p>
      <p>
        Par exemple, Chris joue Tordek le nain. Tordek est peu patient et blâme les elfes de Bois-Manteau pour la
        malchance de sa famille. Dans une taverne, un insupportable ménestrel elfe s'assoit à la table de Tordek et
        tente d'engager la conversation avec le nain.
        Chris dit «&nbsp;<em>Tordek crache au sol, marmonne une insulte au barde et se traîne jusqu'au bar. Il s'assoit
        sur un tabouret et fixe le ménestrel avant de commander un autre verre</em>&nbsp;». Dans cet exemple, Chris a
        transmis les humeurs de Tordek et a donné au MD une idée claire de l'attitude et des actions de son personnage.
      </p>
      <p>
        Lorsque vous utilisez le jeu de rôle descriptif, gardez en tête les choses suivantes
        :</p>
      <ul>
        <li>Décrivez l'attitude et les émotions de votre personnage.</li>
        <li>Concentrez-vous sur les intentions de votre personnage et sur comment les autres risquent de les
          percevoir.
        </li>
        <li>Fournissez autant de détails que vous voulez.</li>
      </ul>
      <p>
        Ne vous inquiétez pas concernant le fait de décrire les choses exactement comme elles sont. Concentrez-vous
        simplement sur ce que votre personnage fait et décrivez ce que vous voyez dans votre tête.
      </p>
      <h4>Approche active</h4><p>
      Si l'approche descriptive dit à votre MD et aux autres joueurs ce que votre personnage pense et
      fait, l'approche active le leur <em>montre</em>. Lorsque vous utilisez le jeu de rôle actif, vous parlez avec
      la voix de votre personnage, comme le ferait un acteur dans un rôle. Vous pouvez même mimer les mouvements et
      les mimiques de votre personnage. Cette approche est plus immersive que l'approche descriptive, toutefois vous
      devez toujours décrire ce qui ne peut être mimé.
    </p>
      <p>
        Si l'on revient à l'exemple de Chris qui jouait le rôle de Tordek plus haut, voici comment la scène peut se
        jouer si Chris choisit l'approche active de jeu de rôle.
        En parlant en tant que Tordek, Chris dit dans une voix grossière et profonde «&nbsp;<em>Je me demandais
        justement pourquoi ça sentait aussi mauvais ici. Si j'avais voulu entendre quoi que ce soit venant de toi,
        je t'aurais tordu le bras pour écouter tes cris</em>&nbsp;». Avec sa voix normale, Chris ajoute «<em> Je me lève
        et je fixe l'elfe, puis je me dirige vers le bar</em> ».
      </p>
      <h4>Résultats du jeu de rôle</h4><p>
      Le MD
      utilise les actions de votre personnage et ses comportements pour déterminer comment réagissent les PNJ. Un
      PNJ lâche pliera devant des menaces de violence. Un nain têtu refusera de laisser quiconque se moquer de lui.
      Un dragon vaniteux succombera aux flatteries. Lorsque vous interagissez avec un PNJ, soyez très attentif à
      comment le MD dépeint l'humeur, les dialogues et la personnalité du PNJ. Si vous êtes capable de déterminer
      les traits de personnalité, les idéaux, les défauts et les liens d'un PNJ, vous pouvez vous en servir afin
      d'influence son attitude.
    </p>
      <p>
        Les interactions dans D&amp;D sont très semblables aux interactions dans la vraie vie. Si vous pouvez offrir à
        des PNJ ce qu'ils veulent, si vous les menacez avec quelque chose qu'ils craignent ou que vous profitez de leur
        sympathie ou des buts qu'ils poursuivent, vous pouvez utiliser les mots pour obtenir presque tout ce que vous
        voulez. D'un autre côté, si vous insultez un fier guerrier ou parlez en mal des alliés d'un noble, vos efforts
        pour les convaincre ou les tromper tourneront à court.
      </p>
      <h3>Jets de caractéristique</h3><p>
      En plus du jeu de rôle, les jets de caractéristique sont la clé pour déterminer le
      dénouement d'une interaction. Vos efforts en jeu de rôle peuvent modifier l'attitude d'un PNJ, mais il reste
      toujours une part de chance en ce qui concerne la résolution d'une situation. Par exemple, votre MD peut
      demander un jet de Charisme à tout moment durant une interaction s'il veut que le dé joue un rôle dans la
      détermination des réactions des PNJ. D'autres jets peuvent s'avérer appropriés dans certaines situations, à la
      discrétion de votre MD.
    </p>
      <p>
        Soyez attentifs aux compétences que vous maîtrisez lorsque vous pensez à comment vous voulez interagir avec un
        PNJ et ayez toutes les cartes en main en utilisant une approche qui se base sur une utilisation optimale de vos
        bonus et de vos compétences. Si le groupe a besoin de flouer un garde pour qu'il les laisse entrer dans un
        château, le roublard qui maîtrise la Tromperie est le plus à même pour mener la discussion. Lorsque vous
        négociez la libération d'un otage, le clerc qui maîtrise la Persuasion devrait
        être celui qui parle le plus.
      </p>
      <h2><a id="repos" className="ancre" href="/regles/aventure/#repos">Repos</a>
      </h2><p>
      Aussi héroïques qu'ils puissent être, les aventuriers ne peuvent passer les 24 heures d'une journée dans
      le feu de l'action de l'exploration, des interactions ou des combats. Ils doivent se reposer, c'est-à-dire
      prendre du temps pour dormir et manger, panser leurs plaies, se reposer l'esprit pour la magie, et reprendre
      du tonus pour les prochaines aventures. Les aventuriers, comme toutes autres créatures, peuvent prendre des
      repos courts au milieu d'une journée d'aventure et un repos long en fin de journée.
    </p>
      <h3>Repos court</h3>
      <p>
        Un repos court est une période de temps mort qui dure au moins 1 heure, et durant laquelle un personnage ne fait
        rien de plus demandant que manger, boire, lire ou panser ses plaies. Un personnage peut utiliser un ou plusieurs
        dés de vie à la fin d'un repos court, à concurrence du nombre de dés de vie maximums d'un personnage, ce qui
        équivaut au niveau du personnage. Pour chaque dé de vie dépensé de cette façon, le joueur jette le dé et ajoute
        le modificateur de Constitution du personnage. Le personnage regagne un nombre de points de vie égal au total
        (minimum 0). Le joueur peut décider de dépenser un dé de vie additionnel après chaque dé
        lancé. Un personnage regagne les dés de vie ainsi dépensés après un repos long, comme expliqué ci-dessous.
      </p>
      <h3>Repos long</h3><p>
      Un repos long est une période de temps mort d'au moins 8 heures lors de laquelle un
      personnage dort au moins 6 heures et entreprend des activités légères comme lire, parler, manger ou monter la
      garde durant un maximum de 2 heures. Si le repos est interrompu par une période d'activité soutenue (au moins
      une heure de marche, de combat, d'incantation ou d'activités similaires), le personnage doit recommencer le
      repos long depuis le début pour en bénéficier.
    </p>
      <p>À la fin d'un repos long, un personnage regagne tous les points de vie qu'il a perdus. Le personnage regagne
        aussi les dés de vie qu'il a dépensés, jusqu'à concurrence d'un nombre de dés égal à la moitié des dés de vie
        maximums du personnage (minimum 1 dé). Par exemple, si un personnage a huit dés de vie, il peut en regagner
        quatre lorsqu'il termine son repos long. Un personnage ne peut bénéficier de plus d'un repos long par période de
        24 heures et doit avoir au moins un point de vie au début du repos pour en gagner ses bienfaits.
      </p>
      <h2><a id="entre-aventures" className="ancre"
             href="/regles/aventure/#entre-aventures">Entre les aventures</a></h2><p>
      Entre les explorations dans les donjons et les batailles contre d'anciens fléaux, les
      aventuriers ont besoin de temps pour se reposer, récupérer et se préparer pour leurs prochaines aventures.
      Beaucoup d'aventuriers utilisent aussi ce temps pour entreprendre d'autres tâches, comme construire une
      armure, conduire des recherches ou dépenser leur or chèrement acquis.
    </p>
      <p>
        Dans certains cas, le passage du temps est quelque chose qui se produit d'un coup par une simple description. En
        débutant une nouvelle aventure, le MD peut simplement décrire qu'un certain laps de temps s'est écoulé et vous
        permettre de décrire en termes généraux ce que votre personnage a fait durant ce temps. D'autres fois, le MD
        peut vouloir garder le décompte exact du temps qui s'est écoulé pour déterminer si des événements ne vous
        touchant directement se sont produits.
      </p>
      <h3>Coût de la vie</h3><p>
      Entre les aventures, vous choisissez une qualité de vie
      particulière et payez les coûts associés à votre train de vie, tel que décrit dans le chapitre <a
      href="/regles/equipement/">Équipement</a>. Vivre un style de vie particulier n'a pas un gros impact sur
      votre personnage, mais votre style de vie peut affecter la façon dont les individus et le groupe vous
      perçoivent. Par exemple, lorsque vous vivez la vie d'un aristocrate, il peut s'avérer plus facile d'influencer
      les nobles d'une ville que si vous vivez dans la pauvreté.
    </p>
      <h3><a id="temps-morts" className="ancre"
             href="/regles/aventure/#temps-morts">Temps morts</a></h3><p>
      Entre les aventures, le MD peut vous demander ce que votre personnage fait durant tout ce
      temps. Les périodes de temps mort peuvent varier dans leur durée, mais chaque activité de temps mort nécessite
      un certain nombre de jours pour en gagner les avantages, et au moins 8 heures par jour doivent être consacrées
      à une activité de temps mort pour compter. Les jours ne doivent pas obligatoirement être consécutifs. Si vous
      avez plus que le minimum de jours à consacrer, vous pouvez continuer à faire la même chose pour une période de
      temps plus longue, ou basculer vers une autre activité de temps mort.
    </p>
      <p>
        Des activités de temps mort autres que celles présentées ci-dessous sont possibles. Si vous voulez que votre
        personnage utilise son temps mort pour entreprendre une activité qui n'est pas présentée ici, discutez-en avec
        votre MD.
      </p>
      <h4>Artisanat</h4>
      <p>
        Vous pouvez construire des objets non magiques, ce qui inclut l'équipement d'aventurier et les œuvres d'art.
        Vous devez maîtriser les outils liés la construction de l'objet que vous tentez de construire (généralement des
        outils d'artisan). Vous pouvez aussi devoir avoir accès à des lieux ou des matériaux spéciaux et nécessaires à
        leur création. Par exemple, quelqu'un qui maîtrise les outils de forgeron aura besoin d'une forge pour
        construire une épée ou une armure.
      </p>
      <p>
        Pour chaque jour de temps mort que vous consacrez à
        l'artisanat, vous pouvez construire un ou plusieurs objets correspondants à leur valeur marchande totale tout en
        n'excédant pas 5 po, et il vous faut utiliser de la matière première équivalente à la moitié de la valeur
        marchande. Si quelque chose que vous voulez construire a une valeur marchande supérieure à 5 po, vous progressez
        chaque jour par tranche de 5 po, jusqu'à ce que vous atteigniez la valeur marchande de l'objet en question. Par
        exemple, un harnois (valeur marchande 1500 po) prendra 300 jours à construire par vous-même.
      </p>
      <p>
        Plusieurs personnages peuvent combiner leurs efforts en vue de construire un objet, à condition que tous les
        personnages maîtrisent les outils requis et qu'ils travaillent ensemble et au même endroit. Chaque personnage
        fournit un effort égal à 5 po par jour qu'il passe à aider à la construction de l'objet. Par exemple, trois
        personnages qui maîtrisent les outils requis et qui ont accès aux installations nécessaires peuvent construire
        une armure demi-plate en 100 jours, pour un coût total de 750 po.
      </p>
      <p>
        Lorsque vous faites de l'artisanat,
        vous pouvez maintenir un train de vie modeste, sans avoir à payer 1 po par jour, ou un train de vie confortable
        à la moitié du coût normal (voir <a href="/regles/equipement/depenses/">Train de vie</a>).
      </p>
      <h4>Exercer une profession</h4><p>
      Vous pouvez travailler entre les aventures, ce qui vous permet de maintenir un
      style de vie modeste sans avoir à payer 1 po par jour (voir <a href="/regles/equipement/depenses/">Train de
      vie</a>). Ces avantages continuent aussi longtemps que vous continuez à pratiquer votre profession.
    </p>
      <p>
        Si vous êtes membre d'une organisation qui peut vous fournir du travail rémunéré, comme un temple ou une guilde
        de voleurs, vous gagnez assez pour entretenir un style de vie confortable.
      </p>
      <p>
        Si vous maîtrisez la compétence Représentation et que vous mettez cette compétence à l'usage durant votre temps
        mort, vous gagnez assez pour entretenir un train de vie confortable.
      </p>
      <h4>Récupérer</h4><p>
      Vous pouvez utiliser le temps mort
      entre les aventures pour vous remettre d'une blessure, des effets d'une maladie ou d'un poison. Après trois
      jours de temps mort consacrés à récupérer, vous pouvez faire un jet de sauvegarde de Constitution DD 15. En
      cas de réussite, vous pouvez choisir un des résultats suivants :</p>
      <ul>
        <li>Mettre fin à un effet qui vous empêche de regagner des points de vie.</li>
        <li>Lors des prochaines 24 heures, gagner un avantage aux jets de sauvegarde contre les maladies ou les
          poisons qui vous affectent.
        </li>
      </ul>
      <h4>Faire des recherches</h4><p>
      Le temps entre les aventures est une excellente occasion de mener à bien des
      recherches, qui vous éclaireront sur des mystères qui se sont développés au cours de la campagne. Ces
      recherches peuvent inclure de se plonger dans les vieux grimoires poussiéreux d'une bibliothèque ou de payer
      des verres à des locaux pour être au courant des rumeurs et les potins.
    </p>
      <p>
        Lorsque vous commencez vos recherches, le MD détermine si une information est disponible ou non, combien de
        jours de temps mort sont nécessaires pour la trouver, et s'il y a une quelconque restriction à vos recherches
        (comme devoir trouver un individu, un livre ou un endroit en particulier). Le MD peut aussi vous demander de
        faire un ou plusieurs jets de caractéristique, comme un jet d'Intelligence (Investigation), pour trouver des
        indices qui vous mèneront vers l'information que vous recherchez, ou un jet de Charisme (Persuasion) pour vous
        assurer de l'aide de quelqu'un. Une fois que ces conditions sont réunies, vous apprenez l'information si elle
        est disponible.
      </p>
      <p>
        Pour chaque jour de recherche, vous devez dépenser 1 po pour couvrir vos dépenses. Ce coût est en plus du coût
        normal associé à votre style de vie.
      </p>
      <h4>Se former</h4><p>
      Vous pouvez passer du temps entre les
      aventures pour apprendre de nouvelles langues ou vous former à des outils. Votre MD peut vous permettre
      d'autres options de formation.
    </p>
      <p>
        D'abord, vous devez trouver un instructeur qui vous formera. Le MD détermine combien de temps il faudra et si un
        ou plusieurs jets de caractéristique sont nécessaires.
        L'entrainement dure 250 jours et coûte 1 po par jour. Après avoir dépensé le temps et l'argent requis, vous
        apprenez une nouvelle langue ou la maîtrise d'un nouvel outil.
      </p>
      <p className="auteur">Traduit par Maitre Menato.
      </p>
    </Main>
  )
}

export const Combat = () => {
  return (
    <Main name={"Combat"} lastUnit={true}>
      <p>
        Le fracas d'une épée frappant contre un bouclier. Le crissement déchirant de monstrueuses griffes lacérant une
        armure. L'éclair lumineux d'un sort de boule de feu qui jaillit d'un magicien.
        L'odeur métallique du sang dans l'air, couvrant la puanteur ignoble des monstres vicieux. Rugissements de
        fureur, cris de triomphe, hurlements de douleur. Le combat dans D&amp;D peut être chaotique, mortel et
        passionnant. Ce chapitre fournit les règles dont vous avez besoin pour que vos personnages et les monstres
        puissent engager le combat, qu'il s'agisse d'une brève escarmouche ou d'un conflit de plus grande envergure dans
        un donjon ou sur un champ de bataille. Tout au long de ce chapitre, les règles s'adressent à vous, joueur et MD.
        Ce dernier contrôle tous les monstres et les personnages non- joueurs impliqués dans le combat, et chaque joueur
        contrôle un aventurier. « Vous » peut également signifier le personnage ou le monstre que vous contrôlez.
      </p>
      <h2><a id="ordre" className="ancre" href="/regles/combat/#ordre">Ordre de combat</a></h2>
      <p>
        Un combat typique est un choc entre deux parties, une frénésie de coups d'armes, de feintes, de parades, de jeux
        de jambes et de jets de sorts. Le jeu organise le chaos des combats en un cycle de rounds et de tours.
        Un <strong>round</strong> représente environ six secondes dans le monde du jeu. Pendant un round, chaque
        participant à la bataille prend un <strong>tour</strong>. L'ordre des tours est déterminé au début de la
        rencontre, quand chacun lance l'initiative. Une fois que chacun a joué son tour, le combat continue avec le
        prochain round si aucun côté n'a battu l'autre.
      </p>
      <h3>Surprise</h3>
      <p className="encadre" style={{textAlign: "left"}}><strong>LE COMBAT, PAS À PAS
        <br/>
      </strong>
        <br/>
        <strong>1.
          Déterminez la surprise</strong>. Le MD détermine quels sont parmi les participants au combat ceux qui sont
        surpris.
        <br/>
        <strong>2. Établissez les positions</strong>. Le MD décide où sont les personnages et les monstres. Selon
        l'ordre de marche des aventuriers ou leur position dans la pièce ou autre lieu, le MD indique où se situent les
        adversaires - à quelle distance et dans quelle direction.
        <br/>
        <strong>3. Lancez
          l'initiative</strong>. Tous les participants au combat effectuent un jet d'initiative qui détermine l'ordre
        des tours des combattants.
        <br/>
        <strong>4. Jouez les tours</strong>. Chaque participant au combat joue son tour dans l'ordre établi de
        l'initiative.
        <br/>
        <strong>5. Commencez le prochain round</strong>. Quand tous les participants au combat ont joué leur tour, le
        round prend fin. Recommencez l'étape 4 jusqu'à ce que le combat se termine.
      </p>
      <p>
        Une bande d'aventuriers se glisse furtivement dans un camp de bandits, descendant des arbres pour les attaquer.
        Un cube gélatineux se glisse dans un passage de donjon sans se faire remarquer par les aventuriers,
        jusqu'à ce qu'il engloutisse l'un d'entre eux. Dans ces situations, un des côtés gagne l'effet de surprise sur
        l'autre.
      </p>
      <p>
        Le MD détermine qui pourrait être surpris. Si aucun des côtés n'essaie d'être discret, ils se remarquent
        automatiquement. Sinon, Le MD compare les jets de Dextérité (Discrétion) de tous ceux qui se cachent avec les
        jets de Sagesse (Perception) passive de chacune des créatures du côté opposé. Chaque personnage ou monstre qui
        n'aperçoit pas la menace sera surpris au début du combat. Si vous êtes surpris, vous ne pouvez pas bouger ou
        entreprendre une action pendant votre premier tour du combat, et vous ne pouvez pas utiliser de réaction avant
        que ce tour n'ait pris fin. Un membre d'un groupe peut être surpris même si les autres ne le sont pas.
      </p>
      <h3>Initiative</h3>
      <p>
        L'initiative détermine l'ordre des tours pendant le combat. Quand le combat commence, chaque participant fait un
        jet de Dextérité pour déterminer sa place dans l'ordre d'initiative. Le MD fait un jet pour chaque groupe de
        créatures identiques, ce qui fait que chacune d'elles agira en même temps. Le MD liste les combattants dans
        l'ordre décroissant des jets de Dextérité. C'est l'ordre dans lequel ils devront agir à chaque round. L'ordre
        d’initiative reste le même de round en round. S'il y a égalité, c'est le MD qui décide qui parmi les monstres et
        les PNJ agira en premier, et les joueurs décideront entre eux de l'ordre des personnages. Le MD choisira l'ordre
        en cas d'égalité entre un monstre et un personnage joueur. Il est aussi possible que le MD décide que le monstre
        et le joueur jetteront un d20 pour déterminer qui commencera, le jet le plus haut ayant la priorité.
      </p>
      <h3>Votre tour</h3>
      <p>
        Lors de votre tour, vous pouvez vous <strong>déplacer</strong> d'une distance égale ou inférieure à votre
        vitesse et <strong>entreprendre une action</strong>. Vous choisissez si vous voulez réaliser l'action ou bouger
        en premier. Votre vitesse (aussi appelée vitesse de marche) est marquée sur votre feuille de personnage. Les
        actions les plus communes que vous pouvez faire sont décrites dans la section « Actions en combat » plus loin
        dans ce chapitre. Certaines capacités de classes ou autres proposent plus d'options pour votre action. La
        section « Mouvement et position » plus loin dans ce chapitre présente les règles pour les déplacements.
      </p>
      <p>
        Vous pouvez aussi décider de ne rien faire durant votre tour, que ce soit de ne pas bouger ou de ne pas
        entreprendre une action. Si vous ne savez quoi faire, essayez de prendre l'action Esquiver ou Se tenir prêt,
        tel que décrit dans « Actions en combat ».
      </p>
      <h4>Actions bonus</h4>
      <p>
        Certaines capacités de classes, sorts ou autres vous permettent d'obtenir à votre tour une action additionnelle
        appelée action bonus. La capacité Ruse, par exemple, permet au roublard de prendre une action bonus. Vous pouvez
        utiliser une action bonus seulement quand une capacité spéciale, un sort ou un autre mécanisme du jeu dit que
        vous pouvez faire quelque chose en tant qu'action bonus. Autrement, vous n'avez pas d'action bonus.
      </p>
      <p>
        Vous ne pouvez prendre qu'une action bonus par tour, donc vous devez choisir laquelle utiliser quand vous en
        avez plus d'une possible. Vous choisissez quand effectuer votre action durant votre tour sauf si le moment de
        l'action bonus est spécifié. Tout ce qui vous empêche d'effectuer une action vous empêche également de réaliser
        une action bonus.
      </p>
      <h4>Autres activités pendant votre tour</h4>
      <p className="encadre">
        <strong>INTERAGIR AVEC LES OBJETS AUTOUR DE VOUS</strong>
        <br/>
        <br/>
        Voici quelques exemples du genre de choses que vous pouvez faire tout en faisant vos actions et en bougeant :
        <br/>
        <br/>
        -
        Sortir ou remettre une épée dans son fourreau
        <br/>
        - Ouvrir ou fermer une porte
        <br/>
        - Sortir une potion de votre sac à dos
        <br/>
        - Ramasser une hache par terre
        <br/>
        - Prendre une babiole sur une table
        <br/>
        - Enlever un anneau de votre doigt
        <br/>
        - Mettre de la nourriture dans sa bouche
        <br/>
        - Planter une bannière dans le sol
        <br/>
        -
        Sortir quelques pièces de votre bourse
        <br/>
        - Boire toute la bière d'une chope
        <br/>
        - Actionner un levier ou un interrupteur
        <br/>
        - Retirer une torche de son support
        <br/>
        - Prendre un livre sur une étagère à portée
        <br/>
        -
        Éteindre une petite flamme
        <br/>
        - Mettre un masque
        <br/>
        - Enfiler la capuche de votre cape sur votre tête
        <br/>
        -
        Coller votre oreille à une porte
        <br/>
        - Donner un coup de pied dans une petite pierre
        <br/>
        - Tourner une clé
        dans une serrure
        <br/>
        - Sonder le sol avec une perche de 3 mètres
        <br/>
        - Donner un objet à un autre personnage
      </p>
      <p>
        Votre tour peut inclure des activités variées qui ne nécessitent ni action ni mouvement. Vous pouvez communiquer
        autant que vous le pouvez, par des phrases courtes ou des grognements, pendant que vous jouez votre tour. Vous
        pouvez également librement interagir avec des objets ou des traits de votre environnement,
        pendant votre tour, que ce soit pendant votre mouvement ou votre action. Par exemple, vous pouvez ouvrir une
        porte durant votre mouvement pendant que vous allez vers un ennemi, ou vous pouvez sortir votre épée durant
        l'action Attaquer. Si vous voulez interagir avec un second objet, cela utilisera votre action. Certains objets
        magiques et autres objets spéciaux demandent toujours que vous utilisiez votre action, cela sera indiqué dans
        leur description.
      </p>
      <p>
        Le MD peut demander à ce que vous utilisiez une action pour toute activité qui nécessite un soin spécial ou si
        un obstacle inhabituel se présente. Par exemple, le MD peut de manière raisonnable demander à ce que vous
        utilisiez une action lorsque vous voulez ouvrir une porte qui est coincée ou si vous devez bouger un levier pour
        faire descendre un pont-levis.
      </p>
      <h3><a id="reaction" className="ancre" href="/regles/combat/#reaction">Réactions</a></h3>
      <p>
        Certaines capacités spéciales, sorts ou situations vous permettent de réaliser une action appelée réaction.
        Une réaction est une réponse instantanée à un déclencheur et peut se produire pendant votre tour ou celui de
        quelqu'un d'autre. L'attaque d'opportunité, décrite plus loin dans le chapitre, est le type de réaction le plus
        commun.
      </p>
      <p>
        Quand vous prenez une réaction, vous ne pouvez pas en prendre une autre avant le début de votre prochain tour.
        Si la réaction interrompt le tour d'une autre créature, celle-ci continue son tour juste après la réaction.
      </p>
      <h2><a id="mouvement" className="ancre" href="/regles/combat/#mouvement">Déplacement et position</a></h2>
      <p>
        En combat, les personnages et les monstres sont en mouvement constant, utilisant souvent leur position ou leur
        mouvement pour prendre l'avantage. À votre tour, vous pouvez avancer d'une distance équivalente à votre vitesse.
        Vous pouvez utiliser autant ou aussi peu de distance que vous voudrez en suivant les règles suivantes.
      </p>
      <p>
        Vos mouvements peuvent être également des sauts, de l'escalade ou de la natation. Ces différents types de
        mouvements peuvent être combinés à la marche ou peuvent constituer tout votre mouvement. Cependant, si vous
        bougez, vous devez déduire la distance de chaque mouvement de votre vitesse, jusqu'à ce qu'elle soit à zéro ou
        que vous ayez fini vos mouvements. La section « Type de déplacements spéciaux » du chapitre <a
        href="/regles/aventure/">Déplacements</a> donne les indications pour les sauts, l'escalade et la natation.
      </p>
      <h3>Interrompre vos mouvements</h3>
      <p>
        Vous pouvez séparer votre mouvement durant votre tour en utilisant une partie de votre vitesse avant votre
        action et le reste après. Par exemple, si vous avez une vitesse de 9 mètres, vous pouvez vous déplacer de 3
        mètres, faire votre action, et vous déplacer des 6 mètres restants.
      </p>
      <h4>Se déplacer entre vos attaques</h4>
      <p>
        Si vous effectuez une action qui inclut plus d'une attaque avec arme, vous pouvez diviser votre mouvement encore
        plus en bougeant entre chaque attaque. Par exemple, un combattant qui peut réaliser deux attaques grâce
        à la capacité Attaque supplémentaire et qui a une vitesse de 7,50 mètres peut avancer de 3 mètres, faire une
        attaque, avancer de 4,50 mètres, et faire sa seconde attaque.
      </p>
      <h4>Utiliser des vitesses différentes</h4>
      <p>
        Si vous avez plusieurs vitesses, par exemple une vitesse de marche et une vitesse de vol, vous pouvez alterner
        entre les vitesses durant votre mouvement. À chaque fois que vous changez de vitesse, il faut enlever la
        distance déjà parcourue de votre nouvelle vitesse. Le résultat détermine la distance que vous pouvez encore
        parcourir. Si le résultat inférieur ou égal à 0, vous ne pouvez plus utiliser la nouvelle vitesse durant ce
        déplacement. Par exemple, si vous avez une vitesse de 9 et une vitesse de vol de 18 (car un magicien vous a
        lancé le sort <em>vol</em>), vous pouvez voler sur 6 mètres, puis marcher sur 3 mètres, puis voler de nouveau 9
        mètres de plus.
      </p>
      <h3>Terrain difficile</h3>
      <p>
        Les combats ont rarement lieu dans des pièces nues ou dans des plaines sans rien de spécial. Que ce soient dans
        des cavernes remplies de rochers, des forêts étouffées de bruyères ou sur des escaliers traîtres, les combats
        typiques se passent souvent sur des terrains difficiles. Chaque mètre sur un terrain difficile coûte un mètre
        supplémentaire. Cette règle ne change pas même si les obstacles se cumulent sur un terrain difficile.
      </p>
      <p>
        Des meubles bas, des gravats, des sous-bois, des escaliers raides, de la neige et des tourbières sont des
        exemples de terrains difficiles. L'espace occupé par une autre créature, qu'elle soit hostile ou non, compte
        également comme un terrain difficile.
      </p>
      <h3>Être à terre</h3>
      <p>
        Les combattants se retrouvent souvent couchés au sol, soit parce qu'ils sont renversés pendant le combat ou
        parce qu'ils se jettent par terre. Dans le jeu, on dit qu'ils sont <a href="/regles/etats/">à terre</a>. Vous
        pouvez vous <strong>jeter à terre</strong> sans utiliser votre vitesse. Vous <strong>relever</strong> demande
        plus d'effort, et coûte la moitié de votre vitesse. Par exemple, si votre vitesse est de 9 mètres, vous devez
        utiliser 4,50 mètres pour vous lever. Vous ne pouvez pas vous relever si vous n'avez pas assez de mouvement
        restant ou si votre vitesse est de 0.
      </p>
      <p>
        Pour bouger quand vous êtes à terre, vous devez <strong>ramper</strong> ou utiliser la magie comme la
        téléportation. Chaque mètre avancé en rampant coûte un mètre supplémentaire. Chaque mètre avancé en rampant en
        terrain difficile coûte 3 mètres.
      </p>
      <h3>Se déplacer autour d'autres créatures</h3>
      <p>
        Vous pouvez vous déplacer à travers l'espace occupé par une créature non hostile. En revanche, vous ne pouvez
        pas vous déplacer dans l'espace occupé par une créature hostile, à moins que la créature ne soit deux tailles
        plus grandes ou plus petites que vous. Dans tous les cas, souvenez-vous que cet espace reste un terrain
        difficile pour vous.
      </p>
      <p>
        Que cette créature soit amie ou ennemie, vous ne pouvez pas volontairement arrêter votre mouvement dans son
        espace. Si vous quittez l'allonge d'une créature hostile pendant que vous bougez, vous provoquez une attaque
        d'opportunité, comme expliqué plus bas dans ce chapitre.
      </p>
      <h3>Déplacement en vol</h3>
      <p>
        <img src="/assets/regles/combat.jpg" alt="Combat" width="400" height="589"
             className="right ss-htmleditorfield-file image" title="Combat" loading="lazy"/>Les créatures volantes ont
        beaucoup d'avantages de mobilité, mais doivent aussi faire attention au risque de chute. Si une créature volante
        est mise à terre, voit sa vitesse réduite à 0 ou est privée de sa capacité à bouger, la créature tombe, à moins
        qu'elle n'ait la capacité Vol stationnaire ou qu'elle puisse rester en l'air par un moyen magique, comme avec le
        sort <a href="dnd/sorts.php?vf=vol"><em>vol</em></a>.
      </p>
      <h3>Taille des créatures</h3>
      <p>
        Chaque créature occupe un espace différent. Le tableau ci-dessous indique quel espace une créature contrôle en
        combat. Les objets utilisent parfois la même échelle de taille.
      </p>
      <table>
        <tbody>
        <tr>
          <td><strong>Taille</strong></td>
          <td><strong>Espace</strong></td>
        </tr>
        <tr>
          <td>Très Petite (TP)</td>
          <td>75 cm x 75 cm</td>
        </tr>
        <tr>
          <td>Petite (P)</td>
          <td>1,50 m x 1,50 m</td>
        </tr>
        <tr>
          <td>Moyenne (M)</td>
          <td>1,50 m x 1,50 m</td>
        </tr>
        <tr>
          <td>Grande (G)</td>
          <td>3 m x 3 m</td>
        </tr>
        <tr>
          <td>Très Grande (TG)</td>
          <td>4,50 m x 4,50 m</td>
        </tr>
        <tr>
          <td>Gigantesque (Gig)</td>
          <td>6 m x 6 m ou plus</td>
        </tr>
        </tbody>
      </table>
      <h4>Espace</h4>
      <p>
        L'espace d'une créature est la surface en mètre qui est effectivement sous son contrôle durant le combat ; ce
        n'est pas une mesure de sa dimension physique. Une créature moyenne n'est pas large de 1,50 mètre, mais elle
        contrôle un espace de cette taille. Si un hobgobelin est dans un couloir large de 1,50 mètre, d'autres créatures
        ne peuvent passer que si l'hobgobelin les laisse faire.
      </p>
      <p>
        L'espace d'une créature reflète également l'espace dont elle a besoin pour combattre de manière efficace.
        Pour cela, il y a une limite au nombre de créatures qui peuvent entourer une autre créature durant un combat.
        Si on suppose un combattant de taille Moyenne, huit créatures peuvent tenir dans un rayon de 1,50 mètre autour
        de celle-ci. Parce que des créatures plus grandes prennent plus d'espace, elles seront moins nombreuses à
        pouvoir entourer une créature. Si quatre créatures de taille G entourent un personnage de taille M ou plus
        petit, il y a peu de places pour d'autres. Par contre, jusqu'à 20 créatures de taille M peuvent entourer une
        créature Gigantesque.
      </p>
      <h4>Passer dans un espace étroit</h4>
      <p>
        Une créature peut passer dans un espace qui est assez large pour une créature une taille plus petite qu'elle.
        Ainsi, des créatures de taille G peuvent se faufiler à travers un passage qui mesure 1,50 mètre de large. Dans
        ce cas, chaque mètre dans un passage étroit de ce type coûte un mètre supplémentaire, et la créature a un
        désavantage à ses jets d'attaque et ses jets de sauvegarde de Dextérité. Les jets d'attaque contre cette
        créature ont un avantage tant qu'elle se trouve dans cet espace étroit.
      </p>
      <h2><a id="actions" className="ancre" href="/regles/combat/#actions">Actions en combat</a></h2>
      <p>
        Quand vous faites des actions lors de votre tour, vous pouvez réaliser les actions qui sont présentées ici,
        des actions que vous gagnez grâce à votre classe ou une capacité spéciale, ou bien une action que vous
        improvisez. Beaucoup de monstres ont des options d'actions qui leur sont propres et qui sont décrites dans leurs
        caractéristiques. Quand vous décrivez une action qui n'est pas détaillée ailleurs dans les règles, le MD vous
        dit si cette action est possible et quel type de jets vous devrez faire, le cas échéant, pour déterminer le
        succès ou l’échec.
      </p>
      <h3><a id="aider" className="ancre" href="/regles/combat/#aider">Aider</a> [Help]</h3>
      <p className="encadre">
        <strong>VARIANTE : JOUER SUR UNE GRILLE</strong>
        <br/>
        <br/>
        Si vous jouez les combats en utilisant une grille quadrillée et des figurines ou des jetons, suivez les règles
        qui suivent.
        <br/>
        <br/>
        <strong>Cases.</strong> Chaque case de la grille représente 1,50 mètre.
        <br/>
        <strong>Vitesse.</strong> Plutôt que de bouger mètre par mètre, bougez case par case sur la grille.
        Cela veut dire que la vitesse est utilisée par section de 1,50 mètre. C'est très facile si vous divisez votre
        vitesse par 1,5. Par exemple une vitesse de 9 mètres équivaudra à 6 cases. Si vous utilisez souvent une grille,
        il est même pratique de noter votre vitesse en case au lieu de la noter en mètres sur votre fiche de personnage.
        <br/>
        <strong>Entrer dans une case.</strong> Pour entrer dans une case, vous devez avoir au moins une case de
        mouvement restante, même si la case est adjacente de manière diagonale à la vôtre (la règle du mouvement en
        diagonal sacrifie le réalisme dans le but de rendre le jeu plus fluide. Le <em>Guide du
        Maître</em> donnera des règles pour une approche plus réaliste). Si une case coûte un mouvement supplémentaire,
        comme les cases de terrain difficile, vous devez avoir assez de mouvement restant pour payer l'entrée. Par
        exemple, vous devez avoir au moins deux cases restantes pour entrer sur un terrain difficile.
        <br/>
        <strong>Coins.</strong> Les mouvements en diagonales ne permettent pas de traverser le coin d'un mur, d'un gros
        arbre ou d'autres caractéristiques qui remplissent l'espace.
        <br/>
        <strong>Distance.</strong> Pour déterminer la distance sur la grille entre deux choses, que ce soient des
        créatures ou des objets, il faut commencer à compter à partir de la première case vide adjacente au premier
        objet et arrêter de compter dans l'espace du second objet. Comptez par le chemin le plus court.
      </p>
      <p>
        Vous pouvez aider d'autres créatures dans l'accomplissement d'une tâche. Quand vous choisissez l'action Aider,
        la créature que vous aidez a un avantage au prochain jet de caractéristique qu'elle fera pour accomplir la tâche
        pour laquelle vous l'aidez, à condition que le jet soit effectué avant le début de votre prochain tour.
      </p>
      <p>
        Vous pouvez aussi Aider une créature amicale à attaquer une créature qui est dans un rayon de 1,50 mètre autour
        de vous. Vous feintez ou distrayez la cible, ou de toutes autres façons vous travaillez en équipe pour rendre
        l'attaque de vos alliés plus efficace. Si votre allié attaque la cible avant votre prochain tour, le premier jet
        d'attaque qu'il fait a un avantage.
      </p>
      <h3><a id="attaquer" className="ancre" href="/regles/combat/#attaquer">Attaquer</a> [Attack]</h3>
      <p>
        L'action la plus commune que vous pouvez faire en combat est l'action Attaquer, que ce soit en faisant
        virevolter une épée, en décochant une flèche ou avec ses propres poings. Grâce à cette action, vous pouvez faire
        une attaque au corps à corps ou une attaque à distance. Voir « <a href="/regles/combat/#realiser-une-attaque">Effectuer
        une attaque</a> » pour les règles qui s'appliquent.
        Certaines capacités comme l'Attaque supplémentaire du guerrier vous permettent d'attaquer plusieurs fois.
      </p>
      <h3><a id="chercher" className="ancre" href="/regles/combat/#chercher">Chercher</a> [Search]</h3>
      <p>
        Quand vous utilisez l'action Chercher, vous consacrez votre attention à la recherche de quelque chose.
        Suivant ce que vous cherchez, le MD peut vous faire un jet de Sagesse (Perception) ou d'Intelligence
        (Investigation).
      </p>
      <h3><a id="esquiver" className="ancre" href="/regles/combat/#esquiver">Esquiver</a> [Dodge]</h3>
      <p>
        Quand vous choisissez l'action Esquiver, vous vous concentrez uniquement sur le fait d'éviter les attaques.
        Jusqu'au début de votre prochain tour, chaque jet d'attaque lancé contre vous à un désavantage si vous voyez
        l'attaquant, et vos jets de sauvegarde de Dextérité ont un avantage. Vous perdez cet avantage si vous êtes <a
        href="/regles/etats/">incapable d'agir</a> ou si votre vitesse tombe à 0.
      </p>
      <h3><a id="courir" className="ancre" href="/regles/combat/#courir">Foncer</a> [Dash]</h3>
      <p>
        Quand vous entreprenez l'action Foncer, vous gagnez un mouvement supplémentaire pour le tour en cours. La
        distance supplémentaire est égale à votre vitesse à laquelle on ajoute vos éventuels modificateurs. Avec une
        vitesse de 9 mètres par exemple, vous pouvez vous déplacer de 18 mètres lors de votre tour si vous courez.
        Chaque augmentation ou diminution de votre vitesse change la distance additionnelle de la même quantité. Si
        votre vitesse de 9 mètres est réduite à 4,50 mètres par exemple, vous pouvez alors vous déplacer de 9 mètres en
        courant pour ce tour.
      </p>
      <h3><a id="lancer-un-sort" className="ancre" href="/regles/combat/#lancer-un-sort">Lancer un sort</a> [Cast a
        spell]</h3>
      <p>
        Les lanceurs de sorts comme les magiciens ou les clercs, de même que de nombreux monstres, ont accès à des sorts
        et peuvent les utiliser pour provoquer des effets en combat. Chaque sort possède un temps d'incantation qui
        détermine si le lanceur doit utiliser une action, une réaction, des minutes voire même des heures pour lancer le
        sort. Lancer un sort n'est donc pas systématiquement une action, même si la plupart des sorts ont un temps
        d'incantation d'une action donc un lanceur de sorts utilise souvent son action à cet effet (voir <a
        href="/regles/magie/">Magie</a>).
      </p>
      <h3><a id="se-cacher" className="ancre" href="/regles/combat/#se-cacher">Se cacher</a> [Hide]</h3>
      <p>
        Quand vous décidez d'utiliser l'action Se cacher, vous devez faire un jet de Dextérité (Discrétion) pour tenter
        de vous cacher, suivant les règles pour <a href="/regles/caracteristiques/">se cacher</a>. Si vous réussissez,
        vous gagnez certains avantages, comme décrit dans la section « Attaquants et cibles non visibles »
        plus loin dans ce chapitre.
      </p>
      <h3><a id="se-desengager" className="ancre" href="/regles/combat/#se-desengager">Se désengager</a> [Disengage]
      </h3>
      <p>
        Si vous vous Désengagez, votre mouvement ne provoque pas d'attaques d'opportunités pour le reste du tour.
      </p>
      <h3><a id="se-tenir-pret" className="ancre" href="/regles/combat/#se-tenir-pret">Se tenir prêt</a> [Ready]</h3>
      <p className="encadre">
        <strong>IMPROVISER UNE ACTION</strong>
        <br/>
        <br/>
        Votre personnage peut faire des choses qui ne sont pas décrites dans ces règles, comme enfoncer des portes,
        intimider des ennemis, chercher les faiblesses de défenses magiques ou demander à pouvoir dialoguer avec un
        ennemi. Les seules limites dans vos actions sont votre imagination et les capacités de votre personnage. Voir la
        description des <a
        href="/regles/caracteristiques/">caractéristiques </a>pour vous en inspirer lorsque vous improvisez.
        <br/>
        <br/>
        Quand vous décrivez une action qui n'est pas décrite dans les règles, le MD vous dit si l'action est possible et
        le jet de dé que vous aurez besoin de faire, le cas échéant, pour en déterminer le succès ou l'échec.
      </p>
      <p>
        Parfois, vous voulez agir juste avant un ennemi ou attendre une circonstance particulière avant d'agir. Pour
        faire ceci, vous pouvez utiliser à votre tour l'action Se tenir prêt, qui vous permet d'agir en utilisant votre
        réaction avant le début de votre prochain tour. En premier lieu, vous devez décider quelle circonstance
        perceptible déclenchera votre réaction, puis choisir l’action en réponse au déclencheur ou un déplacement
        supplémentaire au plus égal à votre vitesse. Exemples : « Si le cultiste marche sur le piège, je lève le levier
        qui le déclenchera » ou « si le gobelin s'approche de moi, je m'en éloigne ». Quand le déclencheur est activé,
        vous pouvez soit utiliser votre réaction dès qu'il se termine, soit l'ignorer. Souvenez-vous que vous n'avez
        droit qu'à une seule réaction par tour.
      </p>
      <p>
        Quand vous préparez un sort, vous le lancez normalement puis retenez son énergie, que vous ne relâchez par votre
        réaction que lorsque le déclencheur est activé. Pour être prêt, le sort doit avoir un temps d'incantation d'une
        action, et il est nécessaire d'être <a href="/regles/magie/">concentré</a> pour contenir la magie du sort. Si
        votre concentration est interrompue, le sort se dissipe sans aucun effet. Par exemple, si vous êtes concentré
        sur le sort <em>toile d’araignée</em> et que vous préparez <em>projectile magique</em>,
        votre sort <em>toile d’araignée</em> se termine, et si vous êtes touché avant de lancer le sort <em>projectile
        magique</em>, votre concentration peut être interrompue.
      </p>
      <h3><a id="utiliser-un-objet" className="ancre" href="/regles/combat/#utiliser-un-objet">Utiliser un
        objet</a> [Use an object]</h3>
      <p>
        Vous interagissez normalement avec les objets lorsque vous faites certaines actions, par exemple quand vous
        dégainez votre épée lors d'une attaque. Mais certains objets nécessitent que vous utilisiez l'action Utilisez un
        objet. Cette action est également utile si vous voulez utiliser plus d'un objet durant votre tour.
      </p>
      <h2><a id="realiser-une-attaque" className="ancre" href="/regles/combat/#realiser-une-attaque">Effectuer une
        attaque</a></h2>
      <p>
        Que vous frappiez avec une arme de corps à corps, que vous attaquiez à distance ou que votre jet d'attaque fasse
        partie d'un sort, chaque attaque à une structure simple :</p>
      <ol>
        <li><strong>Choisissez votre cible.</strong> Choisissez une cible qui est à votre portée : une créature, un
          objet, un lieu.
        </li>
        <li><strong>Déterminez les modificateurs.</strong> Le MD détermine si la cible a un abri et si vous avez un
          avantage ou un désavantage sur elle. De plus, les sorts, les capacités spéciales et d'autres effets peuvent
          donner des bonus ou des malus à votre jet d'attaque.
        </li>
        <li><strong>Résolvez l'attaque.</strong> Lancez le jet d'attaque. Si vous touchez, lancez les dégâts, à moins
          que l'attaque soit particulière et que les règles spécifient le contraire. Certaines attaques causent des
          effets particuliers en plus ou à la place des dégâts.
        </li>
      </ol>
      <p>
        S'il y a un doute sur le fait que ce que vous faites compte comme une attaque, la règle est simple : si vous
        faites un jet d'attaque, vous êtes en train d'attaquer.
      </p>
      <h3>Jet d'attaque</h3>
      <p>
        Quand vous faites une attaque, votre jet d'attaque détermine si l'attaque touche ou rate. Pour faire un jet
        d'attaque, lancez un d20 et ajoutez les modificateurs appropriés. Si le total du jet avec les modificateurs est
        égal ou dépasse la classe d'armure (CA) de la cible, l'attaque touche. La CA d'un personnage est déterminée lors
        de la création du personnage alors que la CA d'un monstre fait partie de ses statistiques.
      </p>
      <h4>Modificateurs du jet</h4>
      <p>
        Quand un personnage fait un jet d'attaque, les deux modificateurs du jet les plus fréquents sont les
        modificateurs de caractéristique et le bonus de maîtrise. Quand un monstre fait un jet d'attaque, il utilise les
        modificateurs indiqués dans ses statistiques.
      </p>
      <p>
        <strong>Modificateur de caractéristique</strong>. Le modificateur de caractéristique utilisé pour les attaques
        au corps à corps est celui de la Force, et le modificateur de caractéristique utilisé pour les attaques à
        distance est celui de Dextérité. Les armes qui ont la propriété finesse ou lancer cassent cette règle. Certains
        sorts demandent également un jet d'attaque. Le modificateur de caractéristique utilisé pour un sort dépend de la
        caractéristique d'incantation du lanceur, comme expliqué dans le chapitre sur la <a
        href="/regles/magie/">Magie</a>.
      </p>
      <p>
        <strong>Bonus de maîtrise</strong>. Vous ajoutez votre bonus au jet d'attaque si vous attaquez avec une arme que
        vous maîtrisez, ainsi que lorsque vous attaquez avec un sort.
      </p>
      <h4>Faire 1 ou 20</h4>
      <p>
        Parfois le destin bénit ou maudit un combattant, faisant toucher le débutant ou rater le vétéran. Si le jet du
        d20 pour une attaque est un 20, l’attaque touche quels que soient les modificateurs ou la CA de la cible.
        De plus, l'attaque est un coup critique, comme cela est expliqué plus loin dans ce chapitre. Si le jet est un 1,
        l'attaque rate, quels que soient les modificateurs ou la CA de la cible.
      </p>
      <h3>Attaquants et cibles non visibles</h3>
      <p>
        Les combattants essaient souvent de se dérober du regard de leurs ennemis en se cachant, en utilisant le
        sort <em>invisibilité</em> ou en se fondant dans l'ombre. Quand vous attaquez une cible que vous ne voyez pas,
        vous avez un désavantage à vos jets d'attaque. C'est le cas si vous attaquez une cible que vous entendez mais
        que vous ne voyez pas, ou si vous devinez l'emplacement de votre cible. Si la cible n'est pas à l'endroit que
        vous visez, vous ratez automatiquement, mais le MD vous dira juste que votre attaque rate, pas que vous n'avez
        pas trouvé la cible. Quand une créature ne peut pas vous voir, vous avez un avantage à vos jets d'attaque contre
        elle. Si vous êtes caché, qu'on ne vous voit pas et qu'on ne vous entend pas, votre position est dévoilée
        lorsque vous attaquez, que l'attaque touche ou non.
      </p>
      <h3>Attaques à distance</h3>
      <p>
        Quand vous faites une attaque à distance, que ce soit en utilisant un arc ou une arbalète, ou en lançant une
        hachette, vous lancez un projectile pour toucher un ennemi à distance. Un monstre peut envoyer des épines de sa
        queue. Beaucoup de sorts incluent une attaque à distance.
      </p>
      <h4>Portée</h4>
      <p>
        Vous pouvez faire des attaques à distance seulement contre des cibles à votre portée. Si une attaque à
        distance, comme celle que vous pourriez faire avec un sort, possède une seule portée, vous ne pouvez attaquer
        une cible au-delà de cette portée.
      </p>
      <p>
        Certaines attaques de distance, comme celles faites avec un arc long ou court, ont deux portées. Le nombre le
        plus petit est la portée normale et le plus grand est la portée longue. Votre jet d'attaque a un désavantage
        quand votre cible est au-delà de la portée normale, et vous ne pouvez attaquer une cible au-delà de la portée
        longue.
      </p>
      <h4>Attaques à distance dans un combat au corps à corps</h4>
      <p>
        Viser pour une attaque à distance est plus difficile quand un ennemi est proche de vous. Quand vous faites une
        attaque à distance avec une arme, un sort ou autre, vous avez un désavantage au jet d'attaque si vous êtes 1,50
        mètre ou moins d'une créature hostile qui peut vous voir et qui n'est pas incapable d'agir.
      </p>
      <h3>Attaques au corps à corps</h3>
      <p>
        Utilisée dans les combats de contact, une attaque au corps à corps vous autorise à attaquer un ennemi dans votre
        zone d'allonge. Une attaque au corps à corps utilise généralement une arme tenue en main comme une épée,
        un marteau ou une hache. Un monstre typique effectue une attaque au corps à corps quand il frappe avec ses
        griffes, ses cornes, ses dents, ses tentacules ou autre partie de son corps. Certains sorts sont aussi
        considérés comme des attaques au corps à corps.
      </p>
      <p>
        La plupart des créatures ont une <strong>allonge</strong> de 1,50 mètre et peuvent donc attaquer des cibles dans
        un rayon de 1,50 mètre autour d'elles quand elles font une attaque au corps à corps. Certaines créatures
        (généralement celles de taille supérieure à M) ont toutefois une allonge supérieure à 1,50 mètre, comme indiqué
        dans leur description.
      </p>
      <p>
        Au lieu d'utiliser une arme pour faire une attaque au corps à corps avec une arme, vous pouvez utiliser
        une <strong>attaque à mains nues</strong> : un coup de poing, un coup de pied, un coup de tête ou tout autre
        coup de force similaire (aucun ne compte comme une arme). Si vous touchez, une attaque à mains nues inflige des
        dégâts contondants égaux à <span className="bulle"
                                         title="Jeremy Crawford a confirmé qu'il n'y a aucun minimum">1 + votre modificateur de Force</span>.
        Vous maîtrisez vos attaques à mains nues.
      </p>
      <h4><a id="opportunite" className="ancre" href="/regles/combat/#opportunite">Attaques d'opportunité</a></h4>
      <p>
        En combat, tout le monde attend une chance de pouvoir frapper un ennemi qui fuit ou qui passe à proximité. Ce
        type d'attaque s'appelle une attaque d'opportunité.
      </p>
      <p>
        Vous pouvez effectuer une attaque d'opportunité quand une créature hostile que vous pouvez voir sort de votre
        zone d'allonge. Pour exécuter l'attaque d'opportunité, vous utilisez votre réaction pour faire une attaque au
        corps à corps contre la créature qui la provoque. L'attaque <span className="bulle"
                                                                          title="Jeremy Crawford a confirmé que la créature peut reprendre le mouvement une fois l'attaque résolue">interrompt le mouvement</span> de
        la créature qui la provoque juste avant que la créature ne quitte votre zone d'allonge.
      </p>
      <p>
        Vous pouvez éviter de provoquer une attaque d'opportunité en utilisant l'action Se désengager. Vous ne provoquez
        pas non plus d'attaque d'opportunité lorsque vous vous téléportez ou quand quelqu'un ou quelque chose vous
        déplace sans utiliser votre mouvement, action ou réaction. Par exemple, vous ne provoquez pas d'attaque
        d'opportunité si une explosion vous projette hors de la zone d'allonge d'un ennemi ou si la gravité
        vous fait tomber à côté de celui-ci.
      </p>
      <h4><a id="deux-armes" className="ancre" href="/regles/combat/#deux-armes">Combat à deux armes</a></h4>
      <p>
        Lorsque vous utilisez l'action Attaquer et que vous attaquez avec une arme de corps à corps légère que vous
        portez dans une main, vous pouvez utiliser une action bonus pour attaquer avec une autre arme de corps à corps
        légère que vous portez dans l'autre main. Vous n'ajoutez cependant pas votre modificateur de caractéristique aux
        dégâts de l'attaque bonus, sauf si ce modificateur est négatif. Si l'une des armes possède la propriété
        lancer, vous pouvez la lancer au lieu de faire une attaque au corps à corps.
      </p>
      <h4><a id="lutte" className="ancre" href="/regles/combat/#lutte">Lutte</a></h4>
      <p>
        Lorsque vous voulez attraper une créature ou lutter avec elle, vous pouvez utiliser l'action Attaquer pour faire
        une attaque au corps à corps spéciale, une lutte. Si vous pouvez faire plusieurs attaques avec l'action
        Attaquer, cette action remplace l'une d'entre elles.
      </p>
      <p>
        La cible de votre lutte ne doit pas être plus d'une taille supérieure à la vôtre, et elle doit être dans votre
        zone d'allonge. En utilisant au moins une main libre, vous essayez d'attraper la cible en réalisant un jet de
        lutte, qui est un jet de Force (Athlétisme) opposé à un jet de Force (Athlétisme) ou de Dextérité
        (Acrobaties) de la cible (au choix de celle-ci). Vous réussissez automatiquement si la cible est incapable
        d'agir. Si vous réussissez, la cible est <a href="/regles/etats/">agrippée</a>. La description de cet état
        spécifie comment y mettre fin, et vous pouvez relâcher votre cible quand vous le voulez (aucune action requise).
      </p>
      <p>
        <strong>Échapper d'une lutte</strong>. Une créature agrippée peut utiliser son action pour s'échapper. Pour
        cela, elle doit réussir un jet de Force (Athlétisme) ou de Dextérité (Acrobaties) opposé à votre jet de Force
        (Athlétisme).
      </p>
      <p>
        <strong>Déplacer une créature agrippée</strong>. Quand vous vous déplacez, vous pouvez traîner ou porter la
        créature que vous avez agrippée, mais votre vitesse est diminuée par deux, à moins que la créature ne soit plus
        petite que vous d'au moins deux tailles.
      </p>
      <h4>Bousculer une créature</h4>
      <p className="encadre">
        <strong>OPPOSITIONS EN COMBAT</strong>
        <br/>
        <br/>
        Les batailles amènent souvent à comparer vos prouesses avec celles de votre ennemi. Ce type de défi est
        représenté par une opposition. Cette section présente les oppositions qui demandent une action en combat les
        plus fréquentes : la lutte et bousculer une créature. Le MD peut utiliser ces oppositions comme modèle pour en
        improviser d'autres.
      </p>
      <p>
        En utilisant l'action Attaquer, vous pouvez faire une attaque au corps à corps spéciale pour bousculer une
        créature afin de la faire tomber à terre ou bien de la faire reculer. Si vous pouvez faire plusieurs attaques
        avec l'action Attaquer, cette action remplace l'une d'entre elles.
      </p>
      <p>
        La cible de cette action ne doit pas être plus d'une taille plus grande que vous et doit être dans votre zone
        d'allonge. Faites un jet de Force (Athlétisme) opposé à un jet de Force (Athlétisme) ou de Dextérité
        (Acrobaties) de la cible (au choix de celle-ci). Vous réussissez automatiquement si la cible est incapable
        d'agir. Si vous réussissez, vous faites tomber à terre la cible ou bien la faites reculer de 1,50 mètre.
      </p>
      <h2><a id="abris" className="ancre" href="/regles/combat/#abris">Abri</a></h2>
      <p>
        Les murs, les arbres, les créatures et autres obstacles peuvent permettre de se mettre à couvert durant un
        combat, rendant une cible plus difficile à blesser. Une cible peut bénéficier d'un abri seulement lorsqu'une
        attaque ou un autre effet a son origine du côté opposé à cet abri. Il y a trois types d'abris. Si une cible est
        derrière des sources multiples, c'est le type le plus élevé qui s'applique ; les types d'abris ne se cumulent
        pas. Par exemple, si une cible est derrière une créature qui lui donne un abri partiel et derrière un tronc
        d'arbre qui lui donne un abri important, la cible bénéficie de l'abri important.
      </p>
      <p>
        Une cible qui a un <strong>abri partiel</strong> (50%) obtient un bonus de +2 à la CA et aux jets de sauvegarde
        de Dextérité. Une cible a un abri partiel si l'obstacle bloque au moins la moitié de son corps.
        L'obstacle peut être un mur bas, un meuble large, un tronc d'arbre étroit ou une créature, que ce soit un ennemi
        ou un allié.
      </p>
      <p>
        Une cible avec un <strong>abri important</strong> (75%) obtient un bonus de +5 à la CA et aux jets de sauvegarde
        de Dextérité. Une cible a un abri important si environ les trois-quarts de celle-ci sont abrités par un
        obstacle. L'obstacle peut être une herse, une meurtrière ou un tronc d'arbre épais.
      </p>
      <p>
        Une cible avec un <strong>abri total</strong> (100%) ne peut être visée directement par une attaque ou un sort,
        mais certains sorts peuvent toutefois l'atteindre en l'incluant dans la zone d'effet. Une cible a un abri total
        si elle est complètement cachée par un obstacle.
      </p>
      <h2><a id="degats" className="ancre" href="/regles/combat/#degats">Dégâts et guérison</a></h2>
      <p>
        Les blessures et le risque de mort sont des compagnons constants de ceux qui explorent les mondes de D&amp;D.
        Un coup d'épée, une flèche bien placée ou l'explosion de flammes du sort <em>boule de feu</em> ont le potentiel
        de blesser voire même tuer les créatures les plus robustes.
      </p>
      <h3>Points de vie</h3>
      <p>
        Les points de vie représentent une combinaison de résistance physique et mentale, de volonté de vivre et de
        chance. Les créatures qui ont plus de points de vie sont plus difficiles à tuer. Celles avec moins de points de
        vie sont plus fragiles.&nbsp;Les points de vie actuels d’une créature (généralement appelés points de vie)
        se situent entre 0 et le maximum de points de vie d’une créature. Ce nombre change fréquemment quand les
        créatures prennent des dégâts ou se font soigner.
      </p>
      <p>
        Quand une créature prend des dégâts, ceux-ci sont soustraits de ses points de vies. La perte de points de vie
        n'a aucun effet sur les capacités d'une créature tant que ses points de vie restent supérieurs à 0.
      </p>
      <h3><a id="jets-degats" className="ancre" href="/regles/combat/#jets-degats">Jets de dégâts</a></h3>
      <p>
        Chaque arme, sort ou capacité offensive de monstre décrit le type de dégâts qu'il inflige. Lancez le ou les dés
        de dégâts, ajoutez les éventuels modificateurs et appliquez les dégâts à votre cible. Des armes magiques,
        capacités spéciales ou autres facteurs peuvent accorder des bonus aux dégâts.
      </p>
      <p>
        Quand vous attaquez avec une <strong>arme</strong>, ajoutez votre modificateur de caractéristique (le même
        modificateur que celui utilisé pour faire le jet d'attaque) aux dégâts. Les <strong>sorts</strong> indiquent
        quels dés utiliser pour les dégâts et s'il convient d'ajouter un quelconque modificateur. Si un sort ou un autre
        effet inflige des dégâts à plus d'une cible à la fois, lancez une seule fois les dégâts pour le total d'entre
        elles. Par exemple, quand un magicien lance <em>boule de feu</em> ou un clerc <em>colonne de flamme</em>, le jet
        de dégâts est effectué une seule fois pour l'ensemble des cibles prises dans l'explosion.
      </p>
      <h4><a id="critique" className="ancre" href="/regles/combat/#critique">Coups critiques</a></h4>
      <p>
        Quand vous faites un coup critique, vous pouvez lancer des dés supplémentaires pour les dégâts de l'attaque
        contre la cible. Lancez deux fois tous les dés de dégâts de l'attaque et additionnez-les, puis ajoutez les
        modificateurs habituels. Pour accélérer le jeu, vous pouvez lancer tous les dés en une seule fois. Par exemple,
        si vous faites un coup critique avec une dague, lancez 2d4 en guise de dégâts, au lieu de 1d4, et ajoutez le
        modificateur de caractéristique utilisé pour l'attaque. Si l'attaque implique d'autres dés, comme ceux de
        l’attaque sournoise du roublard, vous lancez aussi deux fois les dés.
      </p>
      <h4><a id="types-degats" className="ancre" href="/regles/combat/#types-degats">Types de dégâts</a></h4>
      <p className="encadre">
        <strong>DÉCRIRE LES EFFETS DES DÉGÂTS</strong>
        <br/>
        <br/>
        Le MD peut décrire la perte de points de vie de différentes manières. Quand votre total de point de vie est
        au-dessus de la moitié de votre maximum, vous ne montrez pas particulièrement de signe de blessure. Quand vous
        tombez en dessous de la moitié
        de votre total de point de vie, vous commencez à avoir des plaies comme des coupures ou des contusions. Une
        attaque qui réduit vos points de vie à 0 vous touche directement, infligeant une blessure profonde ou d'autres
        traumatismes, ou simplement vous met hors de combat.
      </p>
      <p>
        Les attaques, sorts de dégâts ou autres effets offensifs infligent différents types de dégâts. Les types de
        dégâts n'ont pas de règles propres, mais d'autres règles comme la résistance sont basées sur ces types. Voici
        une liste des types de dégâts avec des exemples pour aider le MD à assigner un type de dégât pour un nouvel
        effet.
      </p>
      <p>
        <strong>Acide.</strong> Le jet corrosif du souffle d'un dragon noir et les enzymes dissolvantes sécrétées par
        une gelée noire infligent des dégâts d'acides.
        <br/>
        <strong>Contondant.</strong> Les attaques de force brute
        (marteaux, chute, constriction et effets similaires) infligent des dégâts contondants.
        <br/>
        <strong>Feu.</strong> Les dragons rouges crachent du feu et de nombreux sorts invoquent des flammes qui
        infligent des dégâts de feu.
        <br/>
        <strong>Force.</strong> La Force est l'énergie magique pure concentrée sous une forme offensive. La plupart des
        effets qui infligent des dégâts de force sont des sorts,
        incluant <em>projectile magique</em> et <em>arme spirituelle</em>.
        <br/>
        <strong>Foudre.</strong> Le sort <em>éclair</em> et le souffle d'un dragon bleu infligent des dégâts de foudre.
        <br/>
        <strong>Froid.</strong> La froideur mortelle irradiant de la lance de glace d'un diable et le souffle glacial
        d'un dragon blanc infligent des dégâts de froid.
        <br/>
        <strong>Nécrotique.</strong> Les dégâts nécrotiques, infligés par certains morts-vivants et sorts, flétrissent
        la matière et même l'âme.
        <br/>
        <strong>Perforant.</strong> Les attaques de perforation et d'empalement, incluant les lances et les morsures de
        monstres, infligent des dégâts perforants.
        <br/>
        <strong>Poison.</strong> Les dards venimeux et le gaz toxique du souffle du dragon vert infligent des dégâts de
        poison.
        <br/>
        <strong>Psychique.</strong> Les capacités mentales comme l'attaque psionique d'un illithid infligent des dégâts
        psychiques.
        <br/>
        <strong>Radiant.</strong> Les dégâts radiants, infligés le sort <em>colonne de flamme</em> du clerc ou le
        châtiment angélique d'une arme, brûlent la chair comme le feu et surchargent l'esprit de pouvoir.
        <br/>
        <strong>Tonnerre.</strong> Le son commotionnant d'une explosion sonore, comme l'effet du sort <em>vague
        tonnante</em>, inflige des dégâts de tonnerre.
        <br/>
        <strong>Tranchant.</strong> Les épées, les haches et les griffes des monstres infligent des dégâts tranchants.
      </p>
      <h3><a id="resistance" className="ancre" href="/regles/combat/#resistance">Résistance et vulnérabilité aux
        dégâts</a></h3>
      <p>
        Certaines créatures et objets sont extrêmement difficiles ou inhabituellement faciles à blesser ou à détruire
        avec certains types de dégâts. Si une créature ou un objet possède une <strong>résistance</strong> à un type de
        dégât, les dégâts de ce type sont réduits de moitié contre lui. À l'inverse, si une créature ou un objet
        présente une <strong>vulnérabilité</strong> contre un type de dégâts, les dégâts de ce type sont doublés contre
        lui.
      </p>
      <p>
        La résistance puis la vulnérabilité sont appliquées après tout autre modificateur de dégâts. Par exemple, une
        créature possède une résistance aux dégâts contondants est frappée par une attaque infligeant 25 dégâts
        contondants. Cette créature est également protégée par une aura magique réduisant tous les dégâts subis de 5.
        Les 25 points de dégâts sont d'abord réduits de 5 puis divisés par deux. La créature subit donc 10 dégâts.
      </p>
      <p>
        Plusieurs résistances ou vulnérabilités qui affectent le même type de dégâts ne se cumulent pas. Par exemple,
        si une créature a une résistance au feu ainsi qu'une résistance à tous les dégâts non magiques, les dégâts non
        magiques de feu subis par la créature sont réduits de moitié et non de trois-quarts.
      </p>
      <h3>Guérison</h3>
      <p>À moins qu'ils ne provoquent la mort, les dégâts ne sont pas permanents, et même la mort peut être vaincue à
        l'aide d'une magie puissante. Le repos peut restaurer des points de vie à une créature (voir <a
          href="/regles/aventure/">Partir à l'aventure</a>), et des méthodes magiques comme le
        sort <em>soins</em>&nbsp;ou une <em>potion de guérison</em>&nbsp;peuvent soigner en un instant. Quand une
        créature reçoit des soins de tout type, les points de vie regagnés sont ajoutés au montant des points de vie
        actuels. Les points de vie d'une créature ne peuvent excéder son maximum de points de vie. Ainsi tout excès de
        points de vie soignés est perdu. Par exemple, un druide soigne 8 points de vie à un rôdeur. Si le rôdeur avait
        14 points de vie actuels pour un maximum de 20, le rôdeur ne gagne que 6 points de vie et non 8. Une créature
        morte ne peut pas regagner de points de vie tant qu'elle n'a pas été ramenée à la vie.
      </p>
      <h3><a id="0-pv" className="ancre" href="/regles/combat/#0-pv">Tomber à 0 point de vie</a></h3>
      <p>
        Quand vous avez 0 point de vie, vous pouvez soit mourir directement, soit devenir inconscient.
      </p>
      <h4>Mort instantanée</h4>
      <p>
        D'énormes dégâts peuvent vous tuer instantanément. Quand des dégâts vous amènent à 0 point de vie, qu'il reste
        des points de dégâts et que ceux-ci sont supérieurs ou égaux à votre maximum de points de vie, vous mourrez. Par
        exemple, un clerc avec un maximum de 12 points a 6 points de vie restants. S'il prend 18 points de dégâts d'une
        attaque, il n'a plus de points de vie, et comme les dégâts restants sont égaux à son maximum de points de vie,
        le clerc meurt.
      </p>
      <h4>Tomber inconscient</h4>
      <p>
        Si les dégâts vous amènent à 0 point de vie sans vous tuer, vous devenez <a
        href="/regles/etats/">inconscient</a>. Cette inconscience se termine si vous regagnez des points de vie.
      </p>
      <h4>Jets de sauvegarde contre la mort</h4>
      <p>
        Quand vous commencez votre tour avec 0 point de vie, vous devez faire un jet de sauvegarde spécial, appelé
        jet de sauvegarde contre la mort, pour déterminer si vous vous approchez de la mort ou si vous vous raccrochez
        à la vie. À la différence des autres jets de sauvegarde, celui-là n'est pas lié à vos caractéristiques. Vous
        êtes entre les mains du destin maintenant, et n'êtes aidé que par des sorts ou des capacités qui augmentent vos
        chances de réussir votre jet de sauvegarde.
      </p>
      <p>
        Lancez un dé 20. Si le résultat est supérieur ou égal à 10, vous réussissez. Sinon vous ratez. Un succès ou un
        échec en lui-même ne change rien. Au troisième succès vous serez stabilisé (voir ci-dessous). Au troisième
        échec, vous mourrez. Les succès et les échecs n'ont pas besoin d'être consécutifs ; notez tous les essais
        jusqu'à ce que vous ayez trois résultats identiques. Ces deux « compteurs » sont remis à 0 si vous gagnez des
        points de vie ou devenez stabilisé.
      </p>
      <p>
        <strong>Résultat de 1 ou 20</strong>. Lorsque vous faites un jet de sauvegarde contre la mort et que vous
        obtenez un 1 au d20, le résultat compte comme deux échecs. Si vous obtenez un 20 au d20, vous regagnez 1 point
        de vie.
      </p>
      <p>
        <strong>Dégâts à 0 point de vie</strong>. Si vous êtes touché par des dégâts alors que vous avez 0 point de vie,
        cela compte comme un échec au jet de sauvegarde contre la mort. Si les dégâts sont d'un coup critique,
        cela compte comme deux échecs. Si les dégâts sont égaux ou supérieurs à votre maximum de points de vie, vous
        mourrez instantanément.
      </p>
      <h4>Stabiliser une créature</h4>
      <p>
        Le meilleur moyen de sauver une créature qui a 0 point de vie est de la soigner. Si cela n'est pas possible,
        la créature peut au moins être stabilisée afin de ne pas être tuée par un jet de sauvegarde contre la mort raté.
        Vous pouvez utiliser votre action pour administrer les premiers soins à une créature inconsciente et essayer de
        la stabiliser, ce qui requiert un jet de Sagesse (Médecine) DD 10. Une créature <strong>stable</strong> ne fait
        plus de jet de sauvegarde contre la mort, même si elle a 0 point de vie, mais elle reste inconsciente. La
        créature n'est plus stable si elle subit d'autres dégâts et doit alors recommencer à faire des jets de
        sauvegarde contre la mort. Une créature stable qui n'est pas soignée regagne un point de vie après 1d4 heures.
      </p>
      <h4>Les monstres et la mort</h4>
      <p>
        La plupart des MD font mourir un monstre dès lors qu'il est à 0 point de vie, plutôt que de le faire devenir
        inconscient et de lui faire faire des jets de sauvegarde. Les ennemis épiques et les PNJ spéciaux sont des
        exceptions communes ; le MD peut les faire devenir inconscients et suivre les mêmes règles que les personnages
        des joueurs.
      </p>
      <h3>Assommer une créature</h3>
      <p>
        Parfois un attaquant veut handicaper un ennemi plutôt que de le tuer. Quand un attaquant réduit les points de
        vie d'une créature à 0 avec une attaque au corps à corps, l'attaquant peut la mettre KO. L'attaquant peut faire
        ce choix au moment d'appliquer les dégâts. La créature tombe alors inconsciente et stable.
      </p>
      <h3><a id="pv-temporaires" className="ancre" href="/regles/combat/#pv-temporaires">Points de vie temporaires</a>
      </h3>
      <p>
        Certains sorts et capacités spéciales confèrent des points de vie temporaires à une créature. Ces points de vie
        temporaires ne sont pas les points de vie courants ; ils représentent un tampon contre les dégâts, une réserve
        de points de vie qui vous protègent des blessures. Lorsque vous avez des points de vie temporaires et que vous
        subissez des dégâts, ces points temporaires sont perdus en premier, et tous les dégâts restants sont infligés à
        vos points de vie normaux. Par exemple, si vous avez 5 points de vie temporaires et que vous prenez 7 points de
        dégâts, vous perdez tous les points temporaires et deux de vos points de vie normaux.
      </p>
      <p>
        Les points de vie temporaires étant séparés de vos points de vie normaux, ils peuvent être supérieurs à votre
        maximum de points de vie. Un personnage peut donc être à son maximum de points de vie et avoir des points de vie
        temporaires. Les soins ne redonnent pas de points de vie temporaires, et ils ne peuvent pas se cumuler. Si vous
        avez déjà des points de vie temporaires et que vous en recevez de nouveaux, vous décidez si vous préférez garder
        ceux que vous avez ou si vous prenez les nouveaux. Par exemple, si un sort vous donne 12 points de vie
        temporaires et que vous en aviez déjà 10, vous pouvez en avoir soit 10, soit 12, mais pas 22.
      </p>
      <p>
        Si vous avez 0 point de vie, recevoir des points de vie temporaires ne vous fait pas redevenir conscient ou
        stable. Ils peuvent toujours absorber les dégâts si vous êtes dans un de ces états, mais seul un vrai soin peut
        vous sauver. À moins qu’une aptitude ne vous en accorde pour une durée donnée, les points de vie temporaires
        persistent jusqu'à ce qu'ils soient réduits ou que vous terminiez un repos long.
      </p>
      <h2><a id="combat-monte" className="ancre" href="/regles/combat/#combat-monte">Combat monté</a></h2>
      <p>
        Un chevalier qui charge sur un champ de bataille monté sur un cheval de combat, un magicien qui lance un sort
        depuis le dos d'un griffon ou un clerc qui traverse le ciel sur un pégase, ont des bonus de vitesse et de
        mobilité que seule une monture peut donner. Une créature consentante qui est au moins une taille plus grande que
        vous, et dont l'anatomie le permet, peut servir en tant que monture en suivant les règles qui suivent.
      </p>
      <h3>Monter et descendre d'une monture</h3>
      <p>
        Une fois par mouvement, vous pouvez monter ou descendre d’une créature située à 1,50 mètre ou moins de vous.
        Cela représente un déplacement égal à la moitié de votre vitesse. Par exemple, si vous avez une vitesse de 9
        mètres, vous devez utiliser 4,50 mètres pour monter à cheval. De ce fait, vous ne pouvez pas le faire s'il vous
        reste moins de 4,50 mètres de mouvement ou si votre vitesse est de 0.
      </p>
      <p>
        Si un effet déplace votre monture contre son gré pendant que vous la montez, vous devez réussir un jet de
        sauvegarde de Dextérité DD 10 pour ne pas tomber de votre monture et vous retrouver à terre dans un rayon de
        1,50 mètre autour d'elle. Si vous subissez l'effet tomber à terre alors que vous êtes sur une monture, vous
        devez faire le même jet de sauvegarde. Si votre monture tombe à terre, vous pouvez utiliser votre réaction pour
        sauter durant sa chute et atterrir sur vos pieds. Sinon vous tombez à terre dans un rayon de 1,50 mètre autour
        d'elle.
      </p>
      <h3>Contrôler une monture</h3>
      <p>
        Quand vous êtes en selle, vous avez deux options. Vous pouvez soit contrôler votre monture, soit l'autoriser
        à faire ses propres actions. Les créatures intelligentes comme les dragons agissent indépendamment.
      </p>
      <p>
        Vous pouvez contrôler votre créature uniquement si elle a été dressée pour accepter les cavaliers. Les chevaux,
        les ânes ou autres créatures similaires domestiquées ont déjà eu un dressage. L'initiative d'une monture
        contrôlée est la même que la vôtre quand vous la montez. Elle bouge comme vous la dirigez, et a droit seulement
        à trois actions : Foncer, Se désengager et Esquiver. Une monture contrôlée peut bouger et agir durant le tour où
        vous la montez.
      </p>
      <p>
        Une monture indépendante garde sa place dans l'ordre d'initiative. Être montée ne l'empêche pas d'agir et elle
        bouge et agit comme elle le souhaite. Elle peut fuir le combat, charger à l'attaque et dévorer un ennemi blessé,
        voire agir contre vos souhaits. Dans tous les cas, si la monture provoque une attaque d'opportunité
        pendant que vous la montez, l'attaquant peut vous cibler vous ou la monture.
      </p>
      <h2><a id="combat-aquatique" className="ancre" href="/regles/combat/#combat-aquatique">Combat subaquatique</a>
      </h2>
      <p>
        Quand les aventuriers poursuivent des sahuagins jusqu'à dans leurs maisons sous l'eau, affrontent des requins
        dans une ancienne épave ou se trouvent dans une pièce de donjon inondée, ils doivent combattre dans un
        environnement hostile. Sous l'eau, les règles suivantes s'appliquent.
      </p>
      <p>
        Quand elle réalise une <strong>attaque au corps à corps avec une arme</strong>, une créature qui n'a pas de
        vitesse de nage (soit naturelle, soit magique) a un désavantage aux jets d'attaque, à moins que l'arme ne soit
        une dague, une javeline, une épée courte, une lance ou un trident. Une <strong>attaque à distance avec une
        arme</strong> rate automatiquement une cible qui est plus loin que la portée normale de l'arme. Même contre une
        cible dans la portée normale, le jet d'attaque a un désavantage, sauf si l'arme est une arbalète, un filet ou
        une arme qui est lancée comme la javeline (ce qui inclut la lance, le trident et les fléchettes).
      </p>
      <p>
        Les créatures et objets qui sont complètement immergés ont une résistance aux dégâts de feu.
      </p>
      <p className="auteur">Traduit par Xirui et Jya.
      </p>
    </Main>
  )
}

export const Incantation = () => {
  return (
    <Main name={"Incantation"} lastUnit={true}>
      <p>
        La magie imprègne le monde de D&amp;D et apparaît le plus souvent sous la forme d'un sort. Ce chapitre fournit
        les règles pour lancer des sorts. Les différentes classes de personnages ont des manières différentes pour
        apprendre et préparer leurs sorts, et les monstres utilisent les sorts d'une façon unique. Mais indépendamment
        de sa source, un sort répond aux règles suivantes.
      </p>
      <h2>Qu'est-ce qu'un sort
        ?</h2><p>
      Un sort est un effet magique, discret, une mise en forme unique de l'énergie magique qui imprègne le
      multivers en une expression spécifique limitée. En lançant un sort, un personnage cueille prudemment un brin de
      magie brute et invisible qui imprègne le monde, le fixe en un motif particulier et le met dans un état de
      vibration spécifique, puis relâche le tout pour libérer l'effet désiré, tout ceci dans la plupart des cas en
      quelques secondes.
    </p>
      <p>
        Les sorts peuvent être des outils polyvalents, des armes ou des barrières de protection. Ils peuvent infliger
        des dégâts ou les annuler, imposer ou supprimer des <a href="/regles/etats/">états</a>, drainer de l'énergie ou
        rendre la vie aux morts. Des milliers de sorts ont
        été créés au cours de l'histoire du multivers, et beaucoup d'entre eux sont oubliés depuis longtemps. Certains
        sont peut-être encore écrits dans des livres de sorts effrités cachés dans d'anciennes ruines, ou piégés dans
        les esprits de divinités disparues. Ils pourraient aussi tout simplement être un jour réinventés par un
        personnage qui aurait accumulé suffisamment de puissance et de sagesse pour le faire.
      </p>
      <h3>Niveau de sort</h3>
      <p>
        <img src="/assets/regles/magie.jpg" alt="Incantations" width="400" height="541"
             className="rightlite ss-htmleditorfield-file image" title="Incantations" loading="lazy"/>Chaque sort
        possède un niveau qui va de 0 à 9. Le niveau d'un sort est un indicateur général de la puissance de celui-ci,
        de l'humble (mais toujours impressionnant) <a href="dnd/sorts.php?vf=projectile-magique"><em>projectile
        magique</em></a> du niveau 1 à l'impressionnant <a href="dnd/sorts.php?vf=arret-du-temps"><em>arrêt du
        temps</em></a> du niveau 9. Les sorts mineurs sont des sorts simples mais puissants de niveau 0 que le lanceur
        de sorts peut utiliser presque par cœur. Plus le niveau d'un sort est élevé, plus le lanceur de sorts doit être
        d'un niveau élevé pour pouvoir le lancer.
      </p>
      <p>
        Le niveau d'un lanceur de sorts et le niveau du personnage ne correspondent pas directement. Normalement, un
        personnage doit être au moins au niveau 17 pour pouvoir lancer un sort de niveau 9.
      </p>
      <h3>Sorts connus et préparés</h3><p>
      Avant qu'un lanceur de sorts ne
      puisse utiliser un sort, il doit l'avoir fermement mémorisé dans son esprit, ou y avoir accès à l'aide d'un
      objet magique. Les membres de certaines classes ont une liste de sorts limités qu'ils connaissent et qui sont
      toujours mémorisés dans leur esprit. Il en est de même pour un grand nombre de monstres utilisant la magie.
      Les autres lanceurs de sorts, comme les clercs et les magiciens, doivent passer par le processus
      d'apprentissage des sorts. Ce processus varie en fonction des classes, comme détaillé dans leurs descriptions.
      Dans tous les cas, le nombre de sorts qu'un lanceur peut avoir mémorisé dans son esprit à un moment donné
      dépend du niveau du personnage.
    </p>
      <h3><a id="emplacement" className="ancre"
             href="/regles/magie/#emplacement">Emplacements de sort</a>s</h3>
      <p>
        Indépendamment du nombre de sorts qu'un lanceur connait ou prépare, il ne peut lancer qu'un nombre limité de
        sorts avant de se reposer. La manipulation de la toile de la magie et la canalisation de son énergie en un sort
        sont physiquement et mentalement éprouvantes, et les sorts de hauts niveaux le sont encore plus. Ainsi,
        chaque classe qui lance des sorts possède une table qui indique pour chaque niveau de sorts combien
        d'emplacements le personnage peut utiliser en fonction de son propre niveau. Par exemple, le magicien Oumara de
        niveau 3 a accès à quatre sorts du niveau 1 et à deux sorts du niveau 2.
      </p>
      <p>
        Quand un personnage lance un sort, il dépense un emplacement d'un niveau équivalent ou supérieur au niveau du
        sort, « remplissant »
        l'emplacement avec le sort. Vous pouvez imaginer qu'un emplacement de sort est comme une rainure d'une certaine
        taille, petite pour les sorts de niveau 1 et plus importante pour les sorts de niveaux supérieurs. Un sort de
        niveau 1 s'insère dans un emplacement de n'importe quelle taille, mais un sort de niveau 9 ne peut s'insérer que
        dans un emplacement de niveau 9. Alors, quand Oumara lance <a href="dnd/sorts.php?vf=projectile-magique"><em>projectile
        magique</em></a>, un sort de niveau 1, elle dépense un de ses quatre emplacements de niveau 1, ce qui lui en
        laisse trois de disponibles.
      </p>
      <p>
        Un repos long restaure les emplacements de sorts dépensés (voir <a href="/regles/aventure/">Repos</a>). Certains
        personnages et monstres ont des capacités spéciales qui permettent de lancer des sorts sans utiliser
        d'emplacements de sorts.&nbsp;Par exemple, un moine qui suit la Voie des quatre éléments, un occultiste qui
        choisit certaines manifestations occultes et un&nbsp;diantrefosse des Neuf enfers peuvent tous lancer des sorts
        de cette manière.
      </p>
      <h4>Lancer un sort à un niveau supérieur</h4><p>
      Quand un lanceur de sorts lance un
      sort à l'aide d'un emplacement de sort qui est d'un niveau supérieur à celui du sort, le sort adopte alors le
      niveau de l'emplacement pour le lancement. Par exemple, si Oumara lance <em>projectile magique</em> en
      utilisant l'un de ses emplacements de niveau 2, alors le <em>projectile magique</em> est de niveau 2. En
      effet, le sort s'étend pour remplir cet emplacement.
    </p>
      <p>
        Certains sorts, tels <em><a href="dnd/sorts.php?vf=projectile-magique">projectile magique</a></em> et <em><a
        href="https://www.aidedd.org/dnd/sorts.php?vf=soins">soins</a></em>, ont des effets plus puissants lorsque le
        sort est lancé à un niveau supérieur. Ceci est indiqué dans la description du sort.
      </p>
      <h3><a id="sort-mineur"
             className="ancre"
             href="/regles/magie/#sort-mineur">Sorts mineurs</a></h3><p>
      Un sort mineur est un sort qui peut être lancé à volonté, sans utiliser d'emplacement de
      sort, et sans avoir à être préparé à l'avance. Une pratique répétée a permis la mémorisation du sort dans
      l'esprit du lanceur, et a imprégné celui-ci de la magie nécessaire pour produire l'effet maintes fois. Un sort
      mineur est un sort de niveau 0.
    </p>
      <h3><a id="rituel" className="ancre"
             href="/regles/magie/#rituel">Rituels</a></h3><p>
      Certains sorts ont
      une étiquette spéciale : rituel. Un tel sort peut être lancé selon les règles normales de lancement de sort,
      ou comme un rituel. La version rituel d'un sort prend 10 minutes de plus que la normale pour être lancé mais
      ne consomme pas d'emplacement de sort. Cela signifie que la version rituel d'un sort ne peut être lancée à un
      niveau supérieur.
    </p>
      <p>
        Pour lancer un rituel, un lanceur de sorts doit avoir la capacité pour le faire. Le clerc et le druide, par
        exemple, y ont accès. Le lanceur doit également avoir le sort préparé ou sur sa liste de sorts connus, à moins
        que la capacité de rituel du personnage ne spécifie le contraire, comme c'est le cas pour le magicien.
      </p>
      <h2>Lancer un sort</h2><p>
      Quand un personnage lance un sort, les mêmes règles de base
      s'appliquent, indépendamment de la classe du personnage ou de l'effet du sort. Chaque <a
      href="/regles/sorts/">description de sort</a> commence par un bloc d'information, comprenant le nom du sort,
      le niveau, l'école de magie, le temps d'incantation, la portée, les composantes et la durée. Le reste du texte
      décrit les effets du sort.
    </p>
      <h3><a id="temps-incantation" className="ancre"
             href="/regles/magie/#temps-incantation">Temps d'incantation</a></h3><p>
      La
      plupart des sorts nécessitent une seule action pour être lancé, mais certains sorts nécessitent une action
      bonus, une réaction, ou beaucoup plus de temps.
    </p>
      <h4>Action bonus</h4><p>
      Un sort jeté à l'aide d'une action
      bonus est particulièrement rapide. Vous devez utiliser une action bonus durant votre tour pour lancer le sort,
      à condition que vous ne l'ayez pas déjà prise durant ce tour. Vous ne pouvez pas lancer d'autre sort dans le
      même tour, à l'exception d'un sort mineur avec un temps d'incantation d'une action.
    </p>
      <h4>Réactions</h4>
      <p>
        Certains sorts peuvent être lancés en tant que réaction. Ces sorts prennent une fraction de seconde pour être
        invoqués et sont généralement employés en réponse à un événement. Si un sort peut être lancé en réaction, la
        description du sort indique précisément quand vous pouvez le faire.
      </p>
      <h4>Temps d'incantation plus long</h4>
      <p>
        Certains sorts (y compris les sorts lancés comme des rituels) nécessitent plus de temps pour être lancés :
        des minutes voire parfois des heures. Lorsque vous lancez un sort avec un temps d'incantation plus long qu'une
        action simple ou qu'une réaction, vous devez dépenser votre action à chaque tour pour lancer le sort, et vous
        devez également maintenir votre concentration pendant tout ce temps (voir Concentration ci-dessous). Si votre
        concentration est brisée, le sort échoue, mais l'emplacement du sort n'est pas dépensé. Si vous voulez essayer
        à nouveau de lancer le sort, vous devez recommencer.
      </p>
      <h3><a id="portee" className="ancre"
             href="/regles/magie/#portee">Portée</a></h3><p
      className="encadre"><strong>PORT D'ARMURE</strong>
      <br/>
      <br/>
      Lancer des sorts demande une forte concentration
      mentale et des gestes précis. Vous devez également maîtriser l'armure que vous portez afin de pouvoir lancer
      un sort. Autrement, vous êtes trop distrait et physiquement trop entravé par votre armure pour pouvoir lancer
      des sorts.
    </p>
      <p>
        La cible d'un sort doit être dans la portée du sort. Par exemple, pour un sort comme <a
        href="dnd/sorts.php?vf=projectile-magique"><em>projectile magique</em></a>, la cible est une créature. Pour un
        sort comme <a href="dnd/sorts.php?vf=boule-de-feu"><em>boule de feu</em></a>, la cible est un point dans
        l'espace ou la boule de feu explose. La plupart des sorts ont des portées exprimées en mètres. Certains sorts
        peuvent ne cibler qu'une créature (vous y compris) que vous devez toucher. D'autres sorts, comme le sort <a
        href="dnd/sorts.php?vf=bouclier"><em>bouclier</em></a>, n'affectent que vous. Ces sorts indiquent que la portée
        est personnelle.
      </p>
      <p>
        Les sorts qui créent des effets en cônes ou en lignes et qui ont pour origine vous-même ont aussi une portée
        personnelle, indiquant que le point d'origine de l'effet du sort doit être vous
        (voir Zones d'effet plus bas).
      </p>
      <p>
        Une fois qu'un sort est jeté, ses effets ne se limitent pas à sa portée,
        à moins que la description du sort n'indique le contraire.
      </p>
      <h3><a id="composantes" className="ancre"
             href="/regles/magie/#composantes">Composantes</a>
      </h3><p>
      Les composantes d'un sort sont les conditions physiques que vous devez respecter pour pouvoir le lancer.
      La description de chaque sort indique s'il nécessite des composantes verbales (V), somatiques (S) ou
      matérielles (M). Si vous ne pouvez pas fournir une ou plusieurs composantes d'un sort, vous êtes incapable de
      lancer le sort.
    </p>
      <h4>Verbales (V)</h4><p className="encadre">
      <strong>LES ÉCOLES DE MAGIE</strong>
      <br/>
      <br/>
      Les
      académies de magie regroupent les sorts en huit catégories appelées des écoles de magie. Les érudits, en
      particulier les magiciens, appliquent ces catégories à tous les sorts, car ils pensent que toutes les magies
      fonctionnent basiquement de la même manière, qu'elles soient le fruit d'une étude rigoureuse ou qu'elles
      soient accordées par une divinité. Les écoles de magie aident à décrire les sorts ; elles n'ont pas de règles
      propres, mais certaines règles s'appliquent aux écoles.
      <br/>
      <br/>
      Les sorts d'<strong>abjuration</strong> sont
      en règle générale des sorts de protection, même si certains d'entre eux ont des utilisations agressives. Ils
      créent des barrières magiques, annulent des effets nocifs, endommagent les intrus, ou bannissent des créatures
      sur un autre plan d'existence.
      <br/>
      <br/>
      Les sorts de <strong>divination</strong> révèlent des informations,
      que ce soit sous la forme de secrets oubliés depuis longtemps, d'aperçus du futur, d'emplacements de choses
      cachées, de vérité derrière les illusions, ou de visions de personnes ou de lieux éloignés.
      <br/>
      <br/>
      Les sorts
      d'<strong>enchantement</strong> affectent l'esprit des autres, en influençant ou en contrôlant leur
      comportement. Ces sorts peuvent faire en sorte que les ennemis perçoivent le lanceur de sorts comme un ami,
      forcer des créatures à prendre une action, ou même contrôler une autre créature comme une
      marionnette.
      <br/>
      <br/>
      Les sorts d'<strong>évocation</strong> manipulent l'énergie magique jusqu'à produire
      l'effet désiré. Certaines évoquent des explosions de feu ou de foudre. D'autres canalisent l'énergie positive
      afin de guérir les blessures.
      <br/>
      <br/>
      Les sorts d'<strong>illusion</strong> trompent les sens ou l'esprit des
      autres. Ils amènent les gens à percevoir des choses qui ne sont pas là, à manquer des choses qui sont là, à
      entendre des bruits fantômes, ou à se souvenir de choses qui n'ont jamais eu lieu. Certaines illusions créent
      des images fantômes que les créatures peuvent voir, mais les illusions les plus insidieuses sont les illusions
      qui implantent directement une image dans l'esprit d'une créature.
      <br/>
      <br/>
      Les sorts
      d'<strong>invocation</strong>&nbsp;touchent au transport d'objets et des créatures d'un endroit à un autre.
      Certains sorts invoquent des créatures ou des objets aux côtés du lanceur de sorts, alors que d'autres
      permettent au lanceur de sorts de se téléporter vers un autre lieu. Certaines invocations créent des objets ou
      des effets à partir de rien.
      <br/>
      <br/>
      Les sorts de <strong>nécromancie</strong> manipulent les énergies de la
      vie et de la mort. Certains sorts peuvent accorder une réserve supplémentaire de force de vie, drainer
      l'énergie de la vie d'une autre créature, créer des morts-vivants, ou même ramener les morts à la vie. La
      création de morts-vivants grâce à l'utilisation de sorts de nécromancie comme <a
      href="dnd/sorts.php?vf=animation-des-morts"><em>animations des morts</em></a>, n'est pas un acte de nature
      bonne, et seuls les lanceurs de sorts mauvais utilisent ces sorts fréquemment.
      <br/>
      <br/>
      Les sorts
      de <strong>transmutation</strong> modifient les propriétés d'une créature, d'un objet ou d'un environnement.
      Ils peuvent transformer un ennemi en une créature inoffensive, améliorer la force d'un allié, faire qu'un
      objet puisse se déplacer sur commande du lanceur de sorts, ou augmenter les capacités innées de guérison d'une
      créature afin qu'elle puisse récupérer plus rapidement d'une blessure.
    </p>
      <p>
        La plupart des sorts exigent de psalmodier des mots mystiques. Les mots en eux-mêmes ne sont pas la source de la
        puissance du sort ; c'est plutôt la combinaison particulière de sons avec un terrain et une résonance spécifique
        qui fixe les toiles de la magie en mouvement. Ainsi, un personnage qui est bâillonné ou est dans une zone de
        silence, comme celle créée par le sort <a href="dnd/sorts.php?vf=silence"><em>silence</em></a>, ne peut pas
        lancer un sort à
        composante verbale.
      </p>
      <h4>Somatiques (S)</h4><p>
      Le lancement de sort à l'aide de gestes peut inclure une
      gesticulation forte ou un ensemble complexe de gestes. Si un sort nécessite une composante somatique, le
      lanceur doit pouvoir bouger librement au moins une main pour effectuer ces gestes.
    </p>
      <h4>Matérielles (M)</h4>
      <p>
        Le lancement de certains sorts nécessite des objets particuliers, spécifiés entre parenthèses dans le champ
        Composantes. Un personnage peut utiliser une <strong>sacoche à composantes</strong> ou un <strong>focaliseur
        d'incantation</strong>&nbsp;(voir <a href="/regles/equipement/materiel/">Équipement d'aventurier</a>) à la place
        des composantes spécifiées pour un sort. Mais si un coût est indiqué pour une composante, un personnage doit
        impérativement avoir cette composante spécifique pour pouvoir lancer le sort.
      </p>
      <p>
        Si la description d'un sort indique que la composante matérielle est consommée par le sort, le lanceur doit
        fournir cette composante chaque fois qu'il veut lancer ce sort. Un lanceur de sorts doit avoir une main libre
        pour accéder aux composantes matérielles d'un sort (ou pour tenir un focaliseur d'incantation), mais cela peut
        être la même main qu'il utilise pour la composante somatique.
      </p>
      <h3><a id="duree" className="ancre"
             href="/regles/magie/#duree">Durée</a></h3><p>
      La
      durée d'un sort est la durée pendant laquelle le sort persiste. Une durée peut être exprimée en rounds,
      minutes, heures, voire années. Certains sorts précisent que leurs effets durent jusqu'à ce que le sort soit
      dissipé ou détruit.
    </p>
      <h4>Instantanée</h4><p>
      De nombreuses durées de sorts sont instantanées. Le sort
      endommage, guérit, crée ou modifie une créature ou un objet d'une manière qui ne peut être dissipée, car sa
      magie n'existe que pendant un court instant.
    </p>
      <h4>Concentration</h4><p>
      Certains sorts vous obligent à
      maintenir une concentration afin de maintenir leur magie active. Si vous perdez la concentration, alors le
      sort se termine. Si un sort doit être maintenu par concentration, cela est indiqué dans le champ Durée, et le
      sort spécifie combien de temps vous pouvez vous concentrer sur lui. Vous pouvez mettre fin à une concentration
      à tout moment (aucune action n'est requise). Une activité normale, comme se déplacer ou attaquer, n'interfère
      pas avec la concentration. Les facteurs suivants peuvent par contre briser une concentration :</p>
      <ul>
        <li><strong>Lancer un autre sort qui nécessite de la concentration</strong>. Vous perdez la concentration d'un
          sort si vous lancez un autre sort qui nécessite également de la concentration. Vous ne pouvez pas vous
          concentrer sur deux sorts en même temps.
        </li>
        <li><strong>Prendre des dégâts</strong>. Chaque fois que vous subissez des dégâts alors que vous êtes
          concentré sur un sort, vous devez faire un jet de sauvegarde de Constitution pour maintenir votre
          concentration. Le DD est égal à 10 ou à la moitié des dégâts que vous subissez, si ce chiffre est supérieur.
          Si vous subissez des dégâts de plusieurs sources, comme d'une flèche et d'un souffle de dragon, vous devez
          faire un jet de sauvegarde séparé pour chaque source de dégât.
        </li>
        <li><strong>Être incapable d'agir ou mort</strong>. Vous perdez automatiquement la concentration de votre sort
          si vous êtes incapable d'agir ou si vous êtes mort.
        </li>
      </ul>
      <p>
        Le MD peut également décider que certains phénomènes environnementaux, comme une vague s'écrasant sur vous
        pendant que vous êtes sur un navire ballotté par la tempête, impliquent de réussir un jet de sauvegarde de
        Constitution DD 10 pour réussir à maintenir la concentration du sort.
      </p>
      <h3><a id="cibles" className="ancre"
             href="/regles/magie/#cibles">Cibles</a>
      </h3><p>
      Un sort typique requiert que vous sélectionniez une ou plusieurs cibles qui seront affectées par la
      magie du sort. La description du sort vous indique si le sort cible des créatures, des objets, ou s'il cible
      un point ayant pour origine une zone d'effet (décrit ci-dessous). Mis à part si un sort a un effet
      perceptible, une créature peut ne pas savoir qu'elle a été ciblée par un sort. Un effet comme un éclair
      fissurant l'air est évident, mais un effet plus subtil comme une tentative de lecture de la pensée d'une
      créature va généralement passer inaperçu, sauf si le sort indique le contraire.
    </p>
      <h4>Une voie dégagée jusqu'à la cible</h4><p>
      Pour cibler quelque chose, vous devez avoir un chemin clair jusqu'à l'objectif, ce qui
      signifie qu'il ne peut pas avoir un abri total. Si vous situez une zone d'effet en un point que vous ne pouvez
      pas voir et qu'une obstruction, comme un mur, se trouve entre vous et ce point, le point d'origine sera défini
      le plus près possible de l'obstruction.
    </p>
      <h4>Se cibler soi-même</h4><p>
      Si un sort peut cibler une créature
      de votre choix, vous pouvez également vous choisir comme cible, à moins que le sort ne spécifie que ladite
      créature doit être hostile ou autre que vous. Si vous êtes dans la zone d'effet d'un sort que vous avez lancé,
      vous pouvez vous cibler vous-même.
    </p>
      <h3><a id="zone" className="ancre" href="/regles/magie/#zone">Zones d'effet</a></h3><p>
      Un sort comme <a href="dnd/sorts.php?vf=mains-brulantes"><em>main brûlante</em></a> ou <a
      href="dnd/sorts.php?vf=cone-de-froid"><em>cône de froid</em></a> couvre une zone, ce qui permet d'affecter
      plusieurs créatures à la fois. La description d'un sort précise sa zone d'effet, qui est typiquement une des
      cinq formes suivantes : cône, cube, cylindre, sphère ou ligne droite. Chaque zone d'effet a un <strong>point
      d'origine</strong>, un emplacement d'où l'énergie du sort émane. Les règles spécifient pour chaque forme
      comment est positionné son point d'origine. Typiquement, un point d'origine est un point dans l'espace, mais
      certains sorts ont une zone d'effet qui a pour origine une créature ou un objet.
    </p>
      <p className="encadre">
        <strong>LA TOILE DE LA MAGIE</strong>
        <br/>
        <br/>
        Les mondes du multivers de D&amp;D sont des lieux magiques.
        Toutes les existences sont imprégnées de pouvoir magique, et de l'énergie inexploitée se trouve dans chaque
        pierre, ruisseau, créature vivante, et même dans l'air lui-même. La magie brute est la substance de la création,
        la volonté muette et aveugle de l'existence, imprégnant chaque morceau de matière et présente dans chaque
        manifestation de l'énergie au sein du multivers.
        <br/>
        <br/>
        Les mortels ne peuvent pas directement définir cette magie brute. Au lieu de cela, ils font usage d'une étoffe
        de magie, une sorte d'interface entre la volonté d'un lanceur de sorts et la substance de magie brute. Les
        lanceurs de sorts des Royaumes Oubliés appellent cela la Toile et reconnaissent son essence comme étant la
        déesse <a href="/univers/pantheon/mystra/">Mystra</a>, mais les lanceurs de sorts ont diverses façons de nommer
        et de visualiser cette interface. De quelque façon que ce soit, sans la Toile, la magie brute est bloquée et
        inaccessible ; même l'archimage le plus puissant ne peut allumer une bougie sans la magie d'une zone où la Toile
        est inaccessible. Mais baigné dans la Toile, un lanceur de sorts peut façonner la foudre pour pourfendre ses
        ennemis, se transporter sur des centaines de miles en un clin d'œil, ou même repousser sa propre mort.
        <br/>
        <br/>
        Toute la magie dépend de la Toile, mais chaque type de magie y accède de différentes manières.
        Les sorts des magiciens, occultistes, ensorceleurs et bardes sont communément appelés <strong>magie des
        arcanes</strong>. Ces sorts reposent sur une compréhension (apprise ou intuitive) du fonctionnement de la Toile.
        Le lanceur puise directement depuis les fils de la Toile pour créer l'effet désiré. Les chevaliers occultes et
        les escrocs arcaniques utilisent également la magie des arcanes. Les sorts de clercs, druides,
        paladins et rôdeurs sont appelés <strong>magie divine</strong>. Ces lanceurs de sorts accèdent à la Toile par
        l'intermédiaire de la puissance divine : des dieux, les forces divines de la nature ou le poids sacré du serment
        d'un paladin.
        <br/>
        <br/>
        À chaque fois qu'un effet magique est créé, les fils de la Toile s'entremêlent,
        se tordent, et se replient pour rendre l'effet possible. Lorsque des personnages utilisent des sorts de
        divination comme <em>détection de la magie</em> ou <em>identification</em>, ils entrevoient la Toile. Un sort
        comme <em>dissipation de la magie</em> aplanit la Toile. Un sort comme <em>champ antimagie</em> réorganise la
        Toile afin que la magie s'écoule tout autour, plutôt que par la zone affectée par le sort. Et dans les endroits
        où la Toile est endommagée ou déchirée, la magie fonctionne de façon imprévisible... voire pas du tout.
      </p>
      <p>
        L'effet d'un sort se développe en ligne droite depuis le point d'origine. Si aucune ligne droite non bloquée ne
        peut s'étendre du point d'origine vers un emplacement dans la zone d'effet, alors cet emplacement n'est pas
        compris dans la zone d'effet du sort. Pour bloquer l'une de ces lignes imaginaires,
        l'obstruction doit fournir un abri total (voir <a href="/regles/combat/">Combat</a>).
      </p>
      <h4>Cône</h4><p>
      Un
      cône s'étend dans la direction que vous choisissez à partir de son point d'origine. La largeur d'un cône en un
      point donné le long de sa longueur est égale à la distance de ce point depuis le point d'origine. La zone
      d'effet d'un cône précise sa longueur maximale. Le point d'origine d'un cône n'est pas compris dans la zone
      d'effet du cône, à moins que vous n'en décidiez autrement.
    </p>
      <h4>Cube</h4><p>
      Vous sélectionnez le point
      d'origine d'un cube, qui peut être n'importe où sur une face du cube. La taille du cube est exprimée par la
      longueur de chaque arête. Le point d'origine d'un cube n'est pas compris dans la zone d'effet du cube, à moins
      que vous n'en décidiez autrement.
    </p>
      <h4>Cylindre</h4><p>
      Le point d'origine d'un cylindre est le centre d'un
      rayon particulier du cercle, comme indiqué dans la description du sort. Le cercle doit être soit sur le sol,
      soit à hauteur de l'effet de sort. L'énergie dans un cylindre s'étend en ligne droite depuis le point
      d'origine vers le périmètre du cercle, formant la base du cylindre. L'effet du sort s'étend alors de la base
      ou depuis le haut, à une distance égale à la hauteur du cylindre. Le point d'origine d'un cylindre est inclus
      dans la zone d'effet du cylindr.
    </p>
      <h4>Ligne</h4><p>
      Une ligne s'étend depuis son point d'origine sur toute sa
      longueur et couvre une zone définie par sa largeur. Le point d'origine d'une ligne n'est pas compris dans la
      zone d'effet de la ligne, à moins que vous n'en décidiez autrement.
    </p>
      <h4>Sphère</h4><p>
      Vous sélectionnez le
      point d'origine d'une sphère, et la sphère s'étend vers l'extérieur depuis ce point. Le rayon de la sphère est
      exprimé en mètres et s'étend à partir de ce point. Le point d'origine d'une sphère est compris dans la zone
      d'effet de la sphère.
    </p>
      <h3><a id="sauvegarde" className="ancre" href="/regles/magie/#sauvegarde">Jets de sauvegarde</a></h3><p>
      De nombreux sorts précisent que la cible peut faire un jet de sauvegarde pour éviter
      tout ou partie des effets d'un sort. Le sort précise la caractéristique que la cible utilise pour réaliser son
      jet de sauvegarde, et ce qui se passe en cas d'échec ou de succès.
    </p>
      <p>
        Le degré de difficultés pour résister
        à l'un de vos sorts est égal à 8 + le modificateur de votre caractéristique d'incantation + votre bonus de
        maîtrise + tout modificateur spécial.
      </p>
      <h3><a id="attaque" className="ancre" href="/regles/magie/#attaque">Jets d'attaque</a></h3><p>
      Certains sorts exigent que le lanceur lance un jet d'attaque afin de déterminer si la
      cible visée a été touchée par l'effet du sort. Votre bonus d'attaque pour un sort offensif est égal au
      modificateur de votre caractéristique d'incantation + votre bonus de maîtrise.
    </p>
      <p>
        La plupart des sorts qui nécessitent un jet d'attaque impliquent des attaques à distance. Rappelez-vous que vous
        avez un désavantage aux jets d'attaque à distance si vous êtes à 1,50 mètre ou moins d'une créature hostile qui
        peut vous voir et qui n'est pas incapable d'agir (voir <a href="/regles/combat/">Combat</a>).
      </p>
      <h3><a id="combination"
             className="ancre"
             href="/regles/magie/#combination">Combiner les effets magiques</a></h3><p>
      Les effets de différents sorts s'additionnent tant que leur durée se
      chevauchent, mais les effets d'un même sort lancé plusieurs fois ne se combinent pas. Au lieu de cela, le plus
      puissant effet (comme le bonus le plus élevé par exemple) de ces sorts s'applique tant que leur durée se
      chevauchent. Si les effets sont aussi puissants l'un que l'autre et que leur durée se chevauchent, appliquez
      l'effet le plus récent.
    </p>
      <p>
        Par exemple, si deux clercs lancent <a href="dnd/sorts.php?vf=benediction"><em>bénédiction</em></a> sur la même
        cible, le personnage a le bénéfice seulement d'un des deux sorts ; il ne peut pas lancer deux fois les dés de
        bonus.
      </p>
      <p className="auteur">Traduit par lord annilhu.
      </p>
    </Main>
  )
}

export const SpellList = () => {
  const [spells, setSpells] = useState(require("../../../resources/spells.json"))
  const [sorting, setSorting] = useState("")
  const [categories, setCategories] = useState([])

  const columns = [
    {id: "Alphabetically", sortId: "name", categories: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    {id: "By Level", sortId: "level", categories: "0123456789"},
    {
      id: "By School",
      sortId: "school",
      categories: ["Abjuration", "Conjuration", "Divination", "Enchantement", "Evocation", "Illusion", "Necromancie", "Transmutation"]
    },
    // {id: "By Caster", sortId: "caster", categories: [""]}
  ]

  const getCategories = (sort, type) => {

    if (type === "res") {
      return []
    }
    let cats = columns.filter((a) => a.sortId.startsWith(sort))[0].categories
    if (typeof cats === typeof "") {
      cats = cats.split('')
    }
    cats.sort()
    if (type === "des") {
      cats.reverse()
    }
    return cats
  }


  const handleSort = (type) => {
    const shouldReset = sorting === type + ".des"
    const shouldAscend = !sorting.startsWith(type)
    const shouldDescend = sorting === type + ".asc"

    if (shouldAscend) {
      // console.log("Should now ascend: " + type + ".asc")
      setSorting(type + ".asc")
      setCategories(getCategories(type, "asc"))
    } else if (shouldDescend) {
      // console.log("Should now descend: " + type + ".des")
      setSorting(type + ".des")
      setCategories(getCategories(type, "des"))
    } else if (shouldReset) {
      // console.log("Should reset.")
      type = "id"
      setSorting("")
      setCategories(getCategories(type, "res"))
    }

    spells.sort(function (a, b) {
      let textA = a[type].toString().toUpperCase();
      let textB = b[type].toString().toUpperCase();
      if (shouldAscend || shouldReset) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      }
      return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
    })
  }

  return (
    <Main name={"Liste des Sorts"} lastUnit={true}>
      {columns.map((col) => {
        return (
          <button type="button" className={"sort ve-btn ve-btn-default ve-btn-xs"}
                  onClick={() => handleSort(col.sortId)}>
            {col.id}
            <span
              className={"lst__caret" + (sorting.startsWith(col.sortId) ? " lst__caret--active" : "") + (sorting === col.sortId + ".des" ? " lst__caret--reverse" : "")}></span>
          </button>)
      })}
      {categories.length === 0 ?
        <>
          <br/>
          <br/>
          {spells.map((spell) =>
            <li style={{display: "block", width: "33%", float: "left"}}>
              <Link to={"/TTRPG-wiki/dnd/player/spells/" + spell.id}>{spell.name}</Link>
            </li>
          )}
        </> :
        <>
          {categories.map((category) => {
            let subSpells = []
            // for (let spell of spells){
            //   console.log(spell.school.toUpperCase().replace("É","E"))
            // }
            if (sorting.startsWith("name")) {
              subSpells = structuredClone(spells).filter((a) => a.name.toUpperCase().startsWith(category.toUpperCase()))
            } else if (sorting.startsWith("level")) {
              subSpells = structuredClone(spells).filter((a) => a.level.toString() === category)
            } else if (sorting.startsWith("school")) {
              subSpells = structuredClone(spells).filter((a) => a.school.toUpperCase().replace("É", "E") === category.toUpperCase())
            }
            return (<>
              <hr style={{margin: 0, borderTop: "1px solid #fff",}}/>
              <h2 style={{marginTop: "10px"}}>- {category} -</h2>
              <ul>
                {subSpells.map((spell) =>
                  <li style={{display: "block", width: "33%", float: "left"}}><Link
                    to={"/TTRPG-wiki/dnd/player/spells/" + spell.id}>{spell.name}</Link></li>
                )}
              </ul>
            </>)
          })}
        </>
      }


    </Main>
  )
}

export const Conditions = () => {
  return (
    <Main name={"Conditions"} lastUnit={true}>
      <div className="captionImage rightlite" style={{width: "140px"}}><a href="dnd/etats.php"><img
        className="rightlite"
        src="assets/adj/conditionsFR.jpg"
        alt="Cartes d'états"
        width="140"
        height="180"/></a>
        <p className="caption rightlite">Cartes d'état.
        </p>
      </div>
      <p>
        Les états modifient les capacités d'une créature de différentes manières, et peuvent résulter d'un sort,
        d'une capacité de classe, de l'attaque d'un monstre ou d'un autre effet. La plupart des états, comme aveuglé,
        sont préjudiciables, mais quelques-uns, comme invisible, peuvent être des avantages. Un état ​​dure jusqu'à ce
        qu'il soit contré (l'état À terre est contré par le fait de se relever par exemple) ou pour une durée déterminée
        par l'effet qui a imposé l'état.
      </p>
      <p>
        Si plusieurs effets imposent le même état à ​​une créature,
        chaque instance de l'état conserve sa durée propre, mais les effets de l'état ​​ne se cumulent pas. Une créature
        est soumise à un état ou ne l'est pas. Les définitions qui suivent précisent ce qui arrive à une créature
        sujette à un état.
      </p>
      <h4>À terre [Prone]</h4>
      <ul>
        <li>La seule option de mouvement possible pour une créature à terre est de ramper, à moins qu'elle ne se
          relève et mette alors un terme à son état.
        </li>
        <li>La créature a un désavantage aux jets d'attaque.</li>
        <li>Un jet d'attaque contre la créature a un avantage si l'attaquant est à 1,50 mètre ou moins de la créature.
          Sinon, le jet d'attaque a un désavantage.
        </li>
      </ul>
      <h4>Agrippé [Grappled]</h4><p className="encadre">
      <strong>ÉPUISEMENT</strong>
      <br/>
      <br/>
      Certaines capacités
      spéciales et dangers naturels, comme la famine et les effets d'une exposition prolongée au froid ou à la
      chaleur, peuvent conduire à un état spécial appelé l'épuisement. L'épuisement se mesure en six niveaux. Un effet
      peut donner à une créature un ou plusieurs niveaux d'épuisement, comme mentionné dans la description de
      l'effet.
      <br/>
      <br/>
      <strong>Niveau - Effet</strong>
      <br/>
      1 - Désavantage aux jets de caractéristique
      <br/>
      2 - Vitesse diminuée de moitié
      <br/>
      3 -
      Désavantage aux jets d'attaque et de sauvegarde
      <br/>
      4 - Maximum de points de vie diminué de moitié
      <br/>
      5 -
      Vitesse réduite à 0
      <br/>
      6 - Mort
      <br/>
      <br/>
      Si une créature déjà épuisée subit un autre effet qui cause
      l'épuisement, son niveau actuel d'épuisement augmente par le nombre mentionné dans l'effet
      d'épuisement.
      <br/>
      <br/>
      Une créature subit les effets de son niveau d'épuisement plus ceux des niveaux
      inférieurs. Par exemple, une créature qui souffre d'un épuisement de niveau deux voit sa vitesse diminuée de
      moitié et a un désavantage aux jets de caractéristique.
      <br/>
      <br/>
      Un effet qui supprime l'épuisement réduit son
      niveau tel que mentionné dans la description de l'effet, et tous les effets reliés à l'épuisement disparaissent
      si le niveau d'épuisement d'une créature est réduit à moins de 1.
      <br/>
      <br/>
      Terminer un repos long réduit le
      niveau d'épuisement d'une créature de 1, à condition que la créature ait aussi mangé et bu. De même, être
      rappelé à la vie réduit le niveau d'épuisement d'une créature de 1.
    </p>
      <ul>
        <li>La vitesse d'une créature agrippée passe à 0, et elle ne peut bénéficier d'aucun bonus à sa vitesse.</li>
        <li>L'état prend fin si la créature qui agrippe est incapable d'agir (voir l'état).</li>
        <li>L'état se termine également si un effet met la créature agrippée hors de portée de la créature ou de
          l'effet qui l'agrippe, comme par exemple lorsqu'une créature est projetée par le sort <em>vague
            tonnante</em>.
        </li>
      </ul>
      <h4>Assourdi [Deafened]</h4>
      <ul>
        <li>Une créature assourdie n'entend pas et rate automatiquement tout jet de caractéristique qui nécessite
          l’ouïe.
        </li>
      </ul>
      <h4>Aveuglé [Blinded]</h4>
      <ul>
        <li>Une créature aveuglée ne voit pas et rate automatiquement tout jet de caractéristique qui nécessite la
          vue.
        </li>
        <li>Les jets d'attaque contre la créature ont un avantage, et les jets d'attaque de la créature ont un
          désavantage.
        </li>
      </ul>
      <h4>Charmé [Charmed]</h4>
      <ul>
        <li>Une créature charmée ne peut pas attaquer le charmeur ou le cibler avec des capacités ou des effets
          magiques nuisibles.
        </li>
        <li>Le charmeur a un avantage à ses jets de caractéristique pour interagir socialement avec la créature.</li>
      </ul>
      <h4>Effrayé [Frightened]</h4>
      <ul>
        <li>Une créature effrayée a un désavantage aux jets de caractéristique et aux jets d'attaque tant que la
          source de sa peur est dans sa ligne de vue.
        </li>
        <li>La créature ne peut se rapprocher volontairement de la source de sa peur.</li>
      </ul>
      <h4>Empoisonné [Poisoned]</h4>
      <ul>
        <li>Une créature empoisonnée a un désavantage aux jets d'attaque et aux jets de caractéristique.</li>
      </ul>
      <h4>Entravé [Restrained]</h4>
      <ul>
        <li>La vitesse d'une créature entravée passe à 0, et elle ne peut bénéficier d'aucun bonus à sa vitesse.</li>
        <li>Les jets d'attaque contre la créature ont un avantage, et les jets d'attaque de la créature ont un
          désavantage.
        </li>
        <li>La créature a un désavantage à ses jets de sauvegarde de Dextérité.</li>
      </ul>
      <h4>Étourdi [Stunned]</h4>
      <ul>
        <li>Une créature étourdie est incapable d'agir (voir l'état), ne peut plus bouger et parle de manière
          hésitante.
        </li>
        <li>La créature rate automatiquement ses jets de sauvegarde de Force et de Dextérité.</li>
        <li>Les jets d'attaque contre la créature ont un avantage.</li>
      </ul>
      <h4>Incapable d'agir / Neutralisé [Incapacitated]</h4>
      <ul>
        <li>Une créature incapable d'agir ne peut effectuer aucune action ni aucune réaction.</li>
      </ul>
      <p>
        <img className="rightlite" title="Illustration d'Eric Belisle" src="assets/regles/conditions.jpg"
             alt="demi-orc" width="317" height="600"/>
      </p>
      <h4>Inconscient [Unconscious]</h4>
      <ul>
        <li>Une créature inconsciente est incapable d'agir (voir l'état), ne peut plus bouger ni parler, et n'est plus
          consciente de ce qui se passe autour d'elle.
        </li>
        <li>La créature lâche ce qu'elle tenait et tombe à terre.</li>
        <li>La créature rate automatiquement ses jets de sauvegarde de Force et de Dextérité.</li>
        <li>Les jets d'attaque contre la créature ont un avantage.</li>
        <li>Toute attaque qui touche la créature est un coup critique si l'attaquant est à 1,50 mètre ou moins de la
          créature.
        </li>
      </ul>
      <h4>Invisible</h4>
      <ul>
        <li>Une créature invisible ne peut être vue sans l'aide de la magie ou un sens particulier. En ce qui concerne
          le fait de se cacher, la créature est considérée dans une zone à visibilité nulle. L'emplacement de la
          créature peut être détecté par un bruit qu'elle fait ou par les traces qu'elle laisse.
        </li>
        <li>Les jets d'attaque contre la créature ont un désavantage, et les jets d'attaque de la créature ont un
          avantage.
        </li>
      </ul>
      <h4>Paralysé [Paralyzed]</h4>
      <ul>
        <li>Une créature paralysée est incapable d'agir (voir l'état) et ne peut plus bouger ni parler.</li>
        <li>La créature rate automatiquement ses jets de sauvegarde de Force et de Dextérité.</li>
        <li>Les jets d'attaque contre la créature ont un avantage.</li>
        <li>Toute attaque qui touche la créature est un coup critique si l'attaquant est à 1,50 mètre ou moins de la
          créature.
        </li>
      </ul>
      <h4>Pétrifié [Petrified]</h4>
      <ul>
        <li>Une créature pétrifiée est transformée, ainsi que tout objet non magique qu'elle porte, en une substance
          inanimée solide (généralement en pierre). Son poids est multiplié par dix et son vieillissement cesse.
        </li>
        <li>La créature est incapable d'agir (voir l'état), ne peut plus bouger ni parler, et n'est plus consciente de
          ce qui se passe autour d'elle.
        </li>
        <li>Les jets d'attaque contre la créature ont un avantage.</li>
        <li>La créature rate automatiquement ses jets de sauvegarde de Force et de Dextérité.</li>
        <li>La créature obtient la résistance contre tous les types de dégâts.</li>
        <li>La créature est immunisée contre le poison et la maladie, mais un poison ou une maladie déjà dans son
          organisme est seulement suspendu, pas neutralisé.
        </li>
      </ul>
    </Main>
  )
}