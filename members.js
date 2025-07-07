/* Expects (in sequence):
 * - Course
 * - Team Number
 * - Student Email
 */

const memberCSVData = 
`MIST.6010-081,Team_0,test_user1@student.uml.edu,Luvai,Motiwalla
MIST.6010-081,Team_0,test_user2@student.uml.edu, Sunder,Pinchai
MIST.6010-081,Team_3,Malaz_Abdelrahman@student.uml.edu,Abdelrahman, Malaz
MIST.6010-081,Team_1,Isabel_Albert@student.uml.edu,Albert, Isabel
MIST.6010-081,Team_1,Brittney_Beauchene@student.uml.edu,Beauchene, Brittney
MIST.6010-081,Team_2,Patricia_Chieh@student.uml.edu,Chieh, Patricia
MIST.6010-081,Team_1,Emma_Curley@student.uml.edu,Curley, Emma
MIST.6010-081,Team_2,Tiffany_Gundler@student.uml.edu,Gundler, Tiffany
MIST.6010-081,Team_5,Reshmi_Gurusamy@student.uml.edu,Gurusamy, Reshmi
MIST.6010-081,Team_3,Cameron_Hale@student.uml.edu,Hale, Cameron
MIST.6010-081,Team_4,Yuki_Hirose@student.uml.edu,Hirose, Yuki
MIST.6010-081,Team_6,Julia_Hovasse@student.uml.edu,Hovasse, Julia
MIST.6010-081,Team_3,Alfredo_JimenezDamas@student.uml.edu,Jimenez Damas, Alfredo
MIST.6010-081,Team_4,Takashi_Kato@student.uml.edu,Kato, Takashi
MIST.6010-081,Team_3,Dorothy_Kauffman@student.uml.edu,Kauffman, Dorothy
MIST.6010-081,Team_5,Fumiaki_Kobayashi@student.uml.edu,Kobayashi, Fumiaki
MIST.6010-081,Team_3,Natalie_Lopez@student.uml.edu,Lopez, Natalie
MIST.6010-081,Team_2,Daniel_McHugh2@student.uml.edu,McHugh, Daniel
MIST.6010-081,Team_2,Michael_Moorhead@student.uml.edu,Moorhead, Michael
MIST.6010-081,Team_6,Devinne_Moran@student.uml.edu,Moran, Devinne
MIST.6010-081,Team_6,Michael_Murphy9@student.uml.edu,Murphy, Michael
MIST.6010-081,Team_5,Kazunori_Nakayama@student.uml.edu,Nakayama, Kazunori
MIST.6010-081,Team_6,Hoyama_Narumi@student.uml.edu,Narumi, Hoyama
MIST.6010-081,Team_4,Eriko_Niino@student.uml.edu,Niino, Eriko
MIST.6010-081,Team_4,Takeshi_Okamoto@student.uml.edu,Okamoto, Takeshi
MIST.6010-081,Team_6,Purusharth_Pandya@student.uml.edu,Pandya, Purusharth
MIST.6010-081,Team_2,Jenavi_Rojas@student.uml.edu,Rojas, Jenavi
MIST.6010-081,Team_5,Francis_Sargent@student.uml.edu,Sargent, Bill
MIST.6010-081,Team_5,Takahisa_SHIRATORI@student.uml.edu,SHIRATORI, Takahisa
MIST.6010-081,Team_1,Christian_Sotelo@student.uml.edu,Sotelo, Christian
MIST.6010-081,Team_4,Momo_Suzuki@student.uml.edu,Suzuki, Momo
MIST.6010-081,Team_5,Tetsuro_Tateyama@student.uml.edu,Tateyama, Tetsuro
MIST.6010-081,Team_1,Carolyn_Tetley@student.uml.edu,Tetley, Carolyn
MIST.6010-081,Team_4,Tsutomu_Tsuboi@student.uml.edu,Tsuboi, Tsutomu`
