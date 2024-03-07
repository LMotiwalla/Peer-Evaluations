/* Expects (in sequence):
 * - Course
 * - Team Number
 * - Student Email
 */

const memberCSVData = 
`MIST.6010-081,Team_0,test_user1@student.uml.edu,Luvai, Motiwa
MIST.6010-081,Team_0,test_user2@student.uml.edu, Sunder, Pinchai
MIST.6010-081,Team_1,peter_miller@student.uml.edu,Peter,Miller
MIST.6010-081,Team_1,erik_eriksen@student.uml.edu,Erik,Eriksen
MIST.6010-081,Team_1,anexis_sanchez@student.uml.edu,Anexis,Sanchez
MIST.6010-081,Team_1,dylan_bedder@student.uml.edu,Dylan,Bedder
MIST.6010-081,Team_1,abraham_parker@student.uml.edu,ABRAHAM,PARKER
MIST.6010-081,Team_1,john_frederick@student.uml.edu,John,Frederick
MIST.6010-081,Team_2,judy_marshall@student.uml.edu,Judy,Marshall
MIST.6010-081,Team_2,joyce_lafond@student.uml.edu,Joyce,LaFond
MIST.6010-081,Team_2,shashank_amin@student.uml.edu,Shashank,Amin
MIST.6010-081,Team_2,lucy_cantu@student.uml.edu,Lucy,Cantu
MIST.6010-081,Team_2,ashley_williams@student.uml.edu,Ashley,Williams
MIST.6010-081,Team_2,melissa_carmine@student.uml.edu,Melissa,Carmine
MIST.6010-081,Team_3,jazmine_scamman@student.uml.edu,Jazmine,Scamman
MIST.6010-081,Team_3,aung_min@student.uml.edu,Aung,Min
MIST.6010-081,Team_3,mardy_mangalus@student.uml.edu,Mardy,Mangalus
MIST.6010-081,Team_3,keijiro_wada@student.uml.edu,Keijiro,WADA
MIST.6010-081,Team_3,masamichi_sakao@student.uml.edu,Masamichi,Sakao
MIST.6010-081,Team_3,risa_hara@student.uml.edu,Risa,Hara
MIST.6010-081,Team_4,warren_wong@student.uml.edu,Warren,Wong
MIST.6010-081,Team_4,akiko_yamanaka@student.uml.edu,Akiko,Yamanaka
MIST.6010-081,Team_4,yuki_kamiya@student.uml.edu,Yuki,Kamiya
MIST.6010-081,Team_4,ayumi_nakamura@student.uml.edu,Ayumi,Nakamura
MIST.6010-081,Team_4,yuri_kodama@student.uml.edu,Yuri,Kodama
MIST.6010-081,Team_4,shintaro_ito@student.uml.edu,Shintaro,Ito
MIST.6010-081,Team_5,kraig_norment@student.uml.edu,Kraig,Norment
MIST.6010-081,Team_5,ryo_nakamura@student.uml.edu,Ryo,Nakamura
MIST.6010-081,Team_5,maki_noiri@student.uml.edu,Maki,Noiri
MIST.6010-081,Team_5,ken_hisada@student.uml.edu,Ken,Hisada
MIST.6010-081,Team_5,tomoki_tanigawa@student.uml.edu,Tomoki,Tanigawa
MIST.6010-081,Team_5,ian_jeffery@student.uml.edu,Ian,Jeffery
MIST.6010-081,Team_5,kristen_howden@student.uml.edu,Kristen,Howden
MIST.6010-081,Team_6,david_brouillette@student.uml.edu,David,Brouillette
MIST.6010-081,Team_6,saki_maruyama@student.uml.edu,Saki,Maruyama
MIST.6010-081,Team_6,takahito_imai@student.uml.edu,Takahito,Imai
MIST.6010-081,Team_6,motoharu_watari@student.uml.edu,Motoharu,Watari
MIST.6010-081,Team_6,kyoko_asaumi@student.uml.edu,Kyoko,Asaumi
MIST.6010-081,Team_6,takuhiro_nakamura@student.uml.edu,Takuhiro,Nakamura
MIST.6010-081,Team_6,hiroyuki_onaya@student.uml.edu,Hiroyuki,Onaya
MIST.6010-083,Team_1,vanitha_thadvai@student.uml.edu,Vanitha,Thadvai
MIST.6010-083,Team_1,megan_barnesneal@student.uml.edu,Megan,Barnes-Neal
MIST.6010-083,Team_1,rashmi_chandra@student.uml.edu,Rashmi,ChandraStudent Email
MIST.6010-083,Team_1,john_ramos@student.uml.edu,John,Ramos
MIST.6010-083,Team_1,al_bagiro@student.uml.edu,Al,Bagiro
MIST.6010-083,Team_1,jean_ferreiro@student.uml.edu,Jean,Ferreiro
MIST.6010-083,Team_2,aaron_kennen@student.uml.edu,Aaron,Kennen
MIST.6010-083,Team_2,scott_phillips1@student.uml.edu,Scott,Phillips
MIST.6010-083,Team_2,sagar_joshi@student.uml.edu,Sagar,Joshi
MIST.6010-083,Team_2,matthew_breen1@student.uml.edu,Matthew,Breen
MIST.6010-083,Team_2,dharti_vaghela@student.uml.edu,Dharti,Vaghela
MIST.6010-083,Team_2,mina_lam@student.uml.edu,Mina,Lam
MIST.6010-083,Team_3,hitoshi_ono@student.uml.edu,Hitoshi,Ono
MIST.6010-083,Team_3,kana_iimuro@student.uml.edu,Kana,Iimuro
MIST.6010-083,Team_3,tszyin_cheung@student.uml.edu,Ryan,Cheung
MIST.6010-083,Team_3,yosuke_tsujimura@student.uml.edu,Yosuke,Tsujimura
MIST.6010-083,Team_3,yukiko_nomura@student.uml.edu,Yukiko,Nomura
MIST.6010-083,Team_3,kiarra_bell@student.uml.edu,Kiarra,Bell
MIST.6010-083,Team_4,kashie_araki@student.uml.edu,Kashie,Araki
MIST.6010-083,Team_4,ryoko_taniguchi@student.uml.edu,Ryoko,Taniguchi
MIST.6010-083,Team_4,mari_yamamoto@student.uml.edu,Mari,Yamamoto
MIST.6010-083,Team_4,tatsuya_kasumi@student.uml.edu,Tatsuya,Kasumi
MIST.6010-083,Team_4,yukie_teraoka@student.uml.edu,Yukie,Teraoka
MIST.6010-083,Team_4,barbara_harrison@student.uml.edu,Barbi,Harrison
MIST.6010-083,Team_5,risa_morimoto@student.uml.edu,Risa,Morimoto
MIST.6010-083,Team_5,tomoko_narita@student.uml.edu,Tomoko,Narita
MIST.6010-083,Team_5,ryosuke_inoue@student.uml.edu,Ryosuke,Inoue
MIST.6010-083,Team_5,sogen_masumoto@student.uml.edu,Sogen,Masumoto
MIST.6010-083,Team_5,hana_mukai@student.uml.edu,Hana,Mukai
MIST.6010-083,Team_5,thomas_damelio@student.uml.edu,Thomas,Damelio
MIST.6010-083,Team_6,ashley_bettencourt@student.uml.edu,Ashley,Bettencourt
MIST.6010-083,Team_6,koji_chono@student.uml.edu,Koji,Chono
MIST.6010-083,Team_6,william_parsons@student.uml.edu,Will,Parsons
MIST.6010-083,Team_6,mitchel_pulaski@student.uml.edu,Mitchel,Pulaski
MIST.6010-083,Team_6,aubrey_billittier@student.uml.edu,Aubrey,Billittier
MIST.6010-083,Team_6,jared_greenberg@student.uml.edu,Jared,Greenberg
MIST.6010-083,Team_6,bhanu_moligi@student.uml.edu,Bhanu,Moligi
MIST.6010-083,Team_2,Jaden_Smith@student.uml.edu, Smith, Jaden`
