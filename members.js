/* Expects (in sequence):
 * - Team Number
 * - Student Email
 * - Student First Name
 * - Student Last Name
 * - Class Code
 */

const memberCSVData = 
`Team_1, test_user1@student.uml.edu, Test, User1,052
Team_1, test_user2@student.uml.edu, Test, User2,052
Team_1,megan_lazaro@student.uml.edu,Megan,Lazaro,052
Team_1,kristin_mcleod1@student.uml.edu,Kristin,McLeod,052
Team_1,kelly_quackenbos@student.uml.edu,Kelly,Quackenbos,052
Team_1,alexander_mcconaghy@student.uml.edu,Alexander,McConaghy,052
Team_1,preet_bhavsar@student.uml.edu,Preet,Bhavsar,052
Team_1,charles_thrasher@student.uml.edu,Charles,Thrasher,052
Team_2,aleczander_stith@student.uml.edu,Aleczander,Stith,052
Team_2,rifah_rahman@student.uml.edu,Rifah,Rahman,052
Team_2,pradhyumna_ravikirthi@student.uml.edu,Pradhyumna,Ravikirthi,052
Team_2,mesha_franco@student.uml.edu,Mesha,Franco,052
Team_2,kunal_mukherjee@student.uml.edu,Kunal,Mukherjee,052
Team_3,sean_glavin@student.uml.edu,Sean,Glavin,052
Team_3,john_duran@student.uml.edu,John,Duran,052
Team_3,brian_hertel@student.uml.edu,Brian,Hertel,052
Team_3,dalia_tayebi@student.uml.edu,Dalia,Tayebi,052
Team_3,jason_meneses@student.uml.edu,Jason,Meneses,052
Team_3,sherard_pooler@student.uml.edu,Sherard,Pooler,052
Team_4,joseph_chartier@student.uml.edu,Joseph,Chartier,052
Team_4,juan_cid@student.uml.edu,Juan,Cid,052
Team_4,andrea_alarcon@student.uml.edu,Andrea,Alarcon,052
Team_4,brijesh_melikadan@student.uml.edu,Brijesh,Melikadan,052
Team_4,dinesh_abraham@student.uml.edu,Dinesh,Abraham,052
Team_4,matthew_naarden@student.uml.edu,Matthew,Naarden,052
Team_5,kassandre_danger@student.uml.edu,Kassandre,Danger,052
Team_5,christopher_holtkamp@student.uml.edu,Christopher,Holtkamp,052
Team_5,brandon_thompson@student.uml.edu,Brandon,Thompson,052
Team_5,jean_doresca@student.uml.edu,Jean,Doresca,052
Team_5,daoming_qin@student.uml.edu,Daoming,Qin,052
Team_5,ehtasham_choudhari@student.uml.edu,Ehtasham,Choudhari,052
Team_6,eduartina_uttaro@student.uml.edu,Eduartina,Uttaro,052
Team_6,jeffrey_shilo@student.uml.edu,Jeffrey,Shilo,052
Team_6,stephanie_patel@student.uml.edu,Stephanie,Patel,052
Team_6,grant_santos@student.uml.edu,Grant,Santos,052
Team_6,maricely_perez@student.uml.edu,Maricely,Perez,052
Team_6,habtemariam_waktola@student.uml.edu,Habte,Waktola,052
Team_1,michael_foley@student.uml.edu,Michael,Foley,201
Team_1,puja_singh@student.uml.edu,Puja,Singh,201
Team_1,william_hubbard@student.uml.edu,William,Hubbard,201
Team_2,henry_serwanga@student.uml.edu,Henry,Serwanga,201
Team_2,courtney_coleman@student.uml.edu,Courtney,Coleman,201
Team_2,andrew_dickinson@student.uml.edu,Andrew,Dickinson,201
Team_3,haley_warringer@student.uml.edu,Haley,Warringer,201
Team_3,shaun_mckenna@student.uml.edu,Shaun,McKenna,201
Team_3,christopher_wilson2@student.uml.edu,Christopher,Wilson,201
Team_3,kevin_vispoli@student.uml.edu,Kevin,Vispoli,201
Team_4,shailja_patel@student.uml.edu,Shailja,Patel,201
Team_4,chhounneang_seng@student.uml.edu,June,Seng,201`
