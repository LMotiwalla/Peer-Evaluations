/* Expects (in sequence):
 * - Course
 * - Team Number
 * - Student Email
 */

const memberCSVData = 
`MIST.6010-081,Team_0,test_user1@student.uml.edu,Luvai,Motiwalla
MIST.6010-081,Team_0,test_user2@student.uml.edu, Sunder,Pinchai
MIST.6010-081,Team_1,Atsumi_Goto@student.uml.edu,Goto, Atsumi
MIST.6010-081,Team_1,Naoya_Kobayashi@student.uml.edu,Kobayashi, Naoya
MIST.6010-081,Team_1,Yuki_Shimotsu@student.uml.edu,Shimotsu, Yuki
MIST.6010-081,Team_1,Mayu_Shinohara@student.uml.edu,Shinohara, Mayu
MIST.6010-081,Team_1,Ayumi_Tomizawa@student.uml.edu,Tomizawa, Ayumi
MIST.6010-081,Team_1,Utae_Kawakita@student.uml.edu,Yamada Kawakita, Utae
MIST.6010-081,Team_2,Melissa_Burns@student.uml.edu,Burns, Melissa
MIST.6010-081,Team_2,John_DAngelo@student.uml.edu,D'Angelo, John
MIST.6010-081,Team_2,Marissa_Elliott@student.uml.edu,Elliott, Marissa
MIST.6010-081,Team_2,Michael_Farago@student.uml.edu,Farago, Michael
MIST.6010-081,Team_2,Andrew_Fuller@student.uml.edu,Fuller, Andrew
MIST.6010-081,Team_2,Paulina_Giampietro1@student.uml.edu,Giampietro, Paulina
MIST.6010-081,Team_3,Kaori_Hasegawa@student.uml.edu,Hasegawa, Kaori
MIST.6010-081,Team_3,Daiki_Kishikawa@student.uml.edu,Kishikawa, Daiki
MIST.6010-081,Team_3,Masanori_Matsuda@student.uml.edu,Matsuda, Masanori
MIST.6010-081,Team_3,Takashi_Ohyama@student.uml.edu,Ohyama, Takashi
MIST.6010-081,Team_3,Shinsuke_Tsujita@student.uml.edu,Tsujita, Shinsuke
MIST.6010-081,Team_3,Makoto_Waseda@student.uml.edu,Waseda, Makoto
MIST.6010-081,Team_3,Taiki_Yamaguchi@student.uml.edu,Yamaguchi, Taiki
MIST.6010-081,Team_4,Mia_Jones1@student.uml.edu,Jones, Mia
MIST.6010-081,Team_4,Rae_Nathanson@student.uml.edu,Nathanson, Rae
MIST.6010-081,Team_4,Eliana_Ramirez@student.uml.edu,Ramirez, Eliana
MIST.6010-081,Team_4,Jack_Sharon@student.uml.edu,Sharon, Jack
MIST.6010-081,Team_4,Kate_Siepert@student.uml.edu,Siepert, Kate
MIST.6010-081,Team_4,Leah_Thomson@student.uml.edu,Thomson, Leah
MIST.6010-081,Team_4,Nathan_Wood2@student.uml.edu,Wood, Nathan
MIST.6010-081,Team_5,Nono_Arai@student.uml.edu,Arai, Nono
MIST.6010-081,Team_5,Maki_Hirai@student.uml.edu,Hirai, Maki
MIST.6010-081,Team_5,Jumpei_Kondo@student.uml.edu,Kondo, Jumpei
MIST.6010-081,Team_5,Hiroki_Nakanishi@student.uml.edu,Nakanishi, Hiroki
MIST.6010-081,Team_5,Kazuki_Onishi@student.uml.edu,Onishi, Kazuki
MIST.6010-081,Team_5,Akiko_SAKAI@student.uml.edu,SAKAI, Akina
MIST.6010-081,Team_5,Masaru_Shirouzu@student.uml.edu,Shirouzu, Masaru
MIST.6010-081,Team_6,Tara_Coates@student.uml.edu,Coates, Tara
MIST.6010-081,Team_6,Samantha_Gambino@student.uml.edu,Gambino, Samantha
MIST.6010-081,Team_6,Courtney_Koran@student.uml.edu,Koran, Courtney
MIST.6010-081,Team_6,Michael_Manser@student.uml.edu,Manser, Michael
MIST.6010-081,Team_6,Maruthiravindrasarma_Pinnelli@student.uml.edu,Pinnelli, Ravi
MIST.6010-081,Team_6,Rebecca_Young@student.uml.edu,Young, Rebecca`
