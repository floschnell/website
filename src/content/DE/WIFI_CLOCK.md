# Remembrall: Arduino Wifi Wecker

Remembrall war mein zweites Projekt mit dem Arduino Board. Zuerst hatte ich mit einem Freund zusammen eine Art Ambilight zusammengebaut, welches auch mit dem Computermonitor verwendet werden kann.

## Motivation

In diesem Projekt wollte ich das Wifi-Shield ausprobieren und da ich als Stundent ständig wechselnde Stundenpläne hatte, musste ich regelmäßig meinen Wecker anpassen. Die Stundenpläne trug ich ohnehin bereits in meinen Google Kalender ein. Daher fand ich, wäre es doch schön, wenn mein Wecker sich immer an meinen online gepflegten Stundenplan anpassen würde. Auch untertags hätte ich mir des öfteren mal einen Hinweis gewünscht, ob ich gleich in einer Vorlesung sitzen sollte.

## Umsetzung

<figure style="max-width:480px;float:left;margin-right:2em">
![Geöffneter Wecker](/img/wifi-alarm-clock/wifi-alarm-clock1.png)
<figcaption>Der Wecker ohne Deckel mit bereits angeschlossener Peripherie.</figcaption>
</figure>

Zuerst bohrte ich ein Loch in eine quadratische Holzplatte und setzte einen alten Computerlautsprecher hinein. Zu den Seiten klebte ich LED-Strips, somit konnte der Wecker schonmal visuell und auditiv auf sich aufmerksam machen. Über den Lautsprecher platzierte ich dann das Arduino Board mit Wifi-Shield. Im Baumarkt kaufte ich mir dann noch eine Plexiglasplatte, welche ich in fünf quadratische gleich große Stücke zerschnitt. Aus den Quadraten baute ich einen nach unten hin geöffneten Würfel, welchen ich mit Stahlwolle abrieb, um ihn milchig transparent erscheinen zu lassen. Später kaufte ich mir noch ein E-Ink Display und setzte es in eine der Würfelseiten ein. Display, Lautsprecher und LED-Strips musste ich dann noch über die IO-Pins mit dem Arduino verbinden und teilweise auch über Transistoren mit höherer Spannung ansteuern (Lautsprecher und LEDs). Probleme gab es zum einen bei der geringen Anzahl der steuerbaren Ausgänge des Arduino Boards, bei der größe des RAMs und bei den Treibern für das Wifi-Shield. Der RAM war so klein, dass ich, um das Display verwenden zu können, sogar auf ein neues Board wechseln musste und mein Arduino gegen einen [chipKIT Uno32](http://chipkit.net/wpcproduct/chipkit-uno32/) eintauschte.

## Ergebnis

Die letzte Version des Weckers umfasste folgende Funktionen:
- leuchtet in jeglicher Farbe
- verbindet sich mit dem Wlan und synchronisiert die aktuelle Uhrzeit, Wettervorhersage und Termine aus dem Google Kalender
- besitzt mehrere Modi, welche durch Antippen des Weckers gewechselt werden können:
    - Uhr
        - Übersicht über aktuelle Uhrzeit und Termine
        - leuchtet umso mehr, je näher ein Termin rückt
    - Alarm
        - weckt über Geräusch und Licht, wenn ein Termin bevorsteht
        - Antippen deaktiviert den Alarm
    - Wetter
        - Zeigt detaillierte Wettervorhersage an
        - leuchtet umso mehr, je näher ein Termin rückt
    - Demo
        - Wechselt zwischen leicht lesbaren Ansichten: Zeit, Termine und Wetter
        - leuchtet umso mehr, je näher ein Termin rückt

<figure style="max-width:480px">
[![Video mit Funktionsübersicht](https://img.youtube.com/vi/iJd8Pvlnlzw/0.jpg)](https://www.youtube.com/watch?v=iJd8Pvlnlzw)
<figcaption>Dieses Video zeigt den Wecker und all seine Funktionen in Aktion. Zum Abspielen einfach auf das Bild oder [hier klicken](https://www.youtube.com/watch?v=iJd8Pvlnlzw).</figcaption>
</figure>
