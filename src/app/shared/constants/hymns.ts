import { ChorusModel } from "../models/chorus.model";
import { HymnModel } from "../models/hymn.model";
import { StanzaModel } from "../models/stanza.model";

export const HYMNS: HymnModel[] = [
  // new HymnModel(1, "some title", [new StanzaModel("verse1"),], "key"),
  new HymnModel
  (1, "ONLY BELIEVE",
    [
      new StanzaModel("Fear not, little flock, from the cross to the throne,\nFrom death into life He went for His own;\nAll power in earth, all power above,\nIs given to Him for the flock of His love."),
      new StanzaModel("Fear not, little flock, He goeth ahead,\nYour Shepherd selecteth the path you must tread;\nThe waters of Marah He'll sweeten for thee,\nHe drank all the bitter in Gethsemane."),
      new StanzaModel("Fear not, little flock, whatever your lot,\nHe enters all rooms, \"the doors being shut;\"\nHe never forsake, He never is gone,\nSo count on His presence in darkness and dawn.")
    ], "C",
    new ChorusModel("Only believe, only believe,\nAll things are possible, only believe;\nOnly believe, only believe\nAll things are possible, only believe.\n(Lord, I believe …)\n(Lord, I receive …)\n(Jesus is here …)")
  ),

  new HymnModel(
    2, "AMAZING GRACE",
    [
      new StanzaModel("Amazing Grace! How sweet the sound,\nThat saved a wretch like me!\nI once was lost but now am found,\nWas blind, but now I see."),
      new StanzaModel("'Twas grace that taught my heart to fear,\nAnd Grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!"),
      new StanzaModel("Through many dangers, toils and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home."),
      new StanzaModel("When we've been there ten thousand years,\nBright shining as the sun;\nWe've no less days to sing God's praise\nThan when we first begun.")
    ], "Ab"
  ),
  new HymnModel(
    3, "THEY COME",
    [
      new StanzaModel("They come from the East and West,\nThey come from the lands afar,\nTo feast with the King, to dine as His guest;\nHow blessed these pilgrims are!\nBeholding His hallowed face\nAglow with light divine;\nBlest partakers of His grace,\nAs gems in His crown to shine."),
      new StanzaModel("I look on the great white throne,\nBefore it the ransom'd stand;\nNo longer are tears, no sorrow is known\nNor death in that goodly land\nMy Saviour has gone before,\nPreparing the way for me;\nSoon we'll meet to part no more\nThru time or eternity."),
      new StanzaModel("The gates of that holy place\nStand open by night and day;\nO look to the Lord who \"giveth more grace,\"\nWhose love has prepared the way.\nA home in those mansions fair\nHis hand hath reserved for all.\nFor the wedding feast prepare,\nObeying the gracious call."),
      new StanzaModel("Oh, Jesus is coming soon,\nOur trials will then be o'er.\nWhat if our Lord this moment should come\nFor those who are free from sin?\nThen would it bring you joy,\nOr Sorrow and deep despair?\nWhen Our Lord in glory comes,\nWe'll meet Him up in the air.")
    ], "Eb",
    new ChorusModel("Since Jesus has set me free,\nI'm happy as heart can be;\nNo longer I bear the burdens of care.\nHis yoke is so sweet to me.\nMy soul was as black as night,\nBut darkness has taken flight;Now I shout the victory,\nFor Jesus has set me free.")
  ),
  new HymnModel(
    4, "I LOVE HIM",
    [
      new StanzaModel("Gone from my heart the world and all it charms;\nNow, through the blood, I'm saved from all alarms;\nDown at the cross my heart is bending low;\nThe precious blood of Jesus cleanses white as snow."),
      new StanzaModel("Once I was lost, and 'way down deep in sin;\nOnce was a slave to passions fierce within;\nOnce was afraid to trust a loving God;\nBut now I'm cleansed from every stain through Jesus' blood."),
      new StanzaModel("Once I was bound, but now I am set free;\nOnce I was blind, but now the light I see;\nOnce I was dead, but now in Christ I live,\nTo tell the world around the peace that He doth give.")
    ], "C",
    new ChorusModel("I love Him, I love Him\nBecause He first love me\nAnd purchased my salvation\nOn Calvary's tree.")
    ),
  new HymnModel(
    5, "SWEET HOUR OF PRAYER",
    [
      new StanzaModel("Sweet Hour of prayer, sweet hour of prayer,\nThat calls me from a world of care,\nAnd bids me, at my Father's throne,\nMake all my wants and wishes known;\nIn seasons of distress and grief,\nMy soul has often found relief,\nAnd oft escaped the tempter's snare.\nBy Thy return, sweet hour of prayer."),
      new StanzaModel("Sweet hour of prayer, sweet hour of prayer,\nThe joy I feel, the bliss I share,\nOf those whose anxious spirits burn\nWith strong desires for Thy return!\nWith such I hasten to the place\nWhere God, my Saviour, shows His face,\nAnd gladly take my station there,\nAnd wait for Thee, sweet hour of prayer."),
      new StanzaModel("Sweet hour of prayer, sweet hour of prayer,\nThy wings shall my petition bear\nTo Him whose truth and faithfulness\nEngage the waiting soul to bless;\nAnd since He bids me seek His face,\nBelieve His Word and trust His grace,\nI'll cast on Him my every care,\nAnd wait for Thee, sweet hour of prayer.")
    ], "Eb"
  ),
  new HymnModel(
    6, "OH, HOW I LOVE JESUS",
    [
      new StanzaModel("There is a name I love to hear,\nI love to sing its worth;\nIt sounds like music in mine ear,\nThe sweetest name on earth."),
      new StanzaModel("It tells me of a Saviour's love,\nWho died to set me free;\nIt tells me of His precious blood;\nThe sinner's perfect plea."),
      new StanzaModel("It tells me what my Father hath\nIn store for every day,\nAnd though I tread a darksome path,\nYields sunshine all the way."),
      new StanzaModel("It tells of One whose loving heart\nCan feel my deepest woe,\nWho in each sorrow bears a part,That none can bear below.")
    ], "Ab",
    new ChorusModel("Oh, how I love Jesus,\nOh, how I love Jesus,\nOh, how I love Jesus,\nBecause He first loved me.\n(I'll never forsake Him …)\n(To me He is so wonderful…)")
  ),
  new HymnModel(7, "WHEN THE REDEEMED ARE GATHERING IN",
    [
      new StanzaModel("I am thinking of the rapture\nIn our blessed home on high,\nWhen the redeemed are gathering in;\nHow we'll raise the heavenly\nanthem in that city in the sky,\nWhen the redeemed are gathering in."),
      new StanzaModel("There will be a great procession\nOver on the street of gold,\nWhen the redeemed are gathering in;\nO what music, O what singing,\no'er the city will be rolled,\nWhen the redeemed are gathering in."),
      new StanzaModel("Saints will sing redemption's\nStory with their voices clear and strong,\nWhen the redeemed are gathering in;\nThen the angles all will listen,\nFor they cannot join that song,\nWhen the redeemed are gathering in."),
      new StanzaModel("Then the Saviour will give orders\nTo prepare the banquet board,\nWhen the redeemed are gathering in;\nAnd we'll hear His invitation,\n\"Come, ye blessed of the Lord,\"\nWhen the redeemed are gathering in.")
    ], "G",
    new ChorusModel("When the redeemed are gathering in,\nWashed like the snow, and free from all sin;\nHow we will shout, and how we will sing,\nWhen the redeemed are gathering in.")
  ),
  new HymnModel(8, "OH, I WANT TO SEE HIM",
    [
      new StanzaModel("AS I journey through the land, singing as I go,\nPointing souls to Calvary, to the crimson flow,\nMany arrows pierce my soul from without, within;\nBut my Lord leads me on, through Him I must win."),
      new StanzaModel("When in service for my Lord, dark may be the night,\nBut I'll cling more close to Him, He will give me light;\nSatan's snares may vex my soul, turn my thoughts aside;\nBut my Lord goes ahead, leads whate'er betide."),
      new StanzaModel("When in valleys low I look toward the mountain height,\nAnd behold my Saviour there, leading in the fight,\nWith a tender hand outstretched toward the valley low;\nGuiding me, I can see, as I onward go."),
      new StanzaModel("When before me billows rise from the mighty deep.\nThen my Lord directs my bark, He doth safely keep,\nAnd He leads me gently on through this world below;\nHe's a real Friend to me, O I love Him so.")
    ], "Ab",
    new ChorusModel("Oh, I want to see Him, look upon His face.\nThere to sing forever of His saving grace;\nOn the streets of Glory let me lift my voice;\nCares all past, home at last, ever to rejoice.")
  ),
  new HymnModel(9, "FEELING SO MUCH BETTER",
    [
      new StanzaModel("Feeling So much better talking about this good old Way,\nFeeling so much better talking about the Lord;\n Let's go on, Let's go on talking about this good old Way.\nLet's go on, let's go on talking about the Lord"),
      new StanzaModel("The devil he don't like it, talking about this good old Way,\nThe devil he don't like it talking about the Lord;\nSo, Let's go on, Let's go on talking about this good old Way,\nLet's go on, let's go on talking about the Lord.")
    ], "F"
  ),
  new HymnModel(10, "TEACH ME, LORD, TO WAIT",
    [
      new StanzaModel("Teach Me, Lord, to wait down on my knees,\nTill in Your own good time You answer my pleas;\nTeach me not to rely on what others do,\nBut to wait in prayer for an answer from you."),
      new StanzaModel("Teach me, Lord, to wait while hearts are aflame,\nHelp me humble my pride and call on Your Name;\nKeep my faith renewed, Keep my eyes on Thee,\nHelp me be on this earth what You want me to be.")
    ], "F",
    new ChorusModel("They that wait upon the Lord, shall renew their strength,\nThey shall mount up with wings as an eagle,\nThey shall run and not be weary, they shall walk and not faint;\nTeach me, Lord, teach me, Lord, to wait.")
  ),
  new HymnModel(11, "HALLELUJAH, WE SHALL RISE",
    [
      new StanzaModel("In the resurrection morning,\nWhen the trump of God shall sound,\nWe shall rise, (Hallelujah!) we shall rise!\nThen the saints will come rejoicing\nAnd no tears will e'er be found,\nWe shall rise, (Hallelujah!) we shall rise."),
      new StanzaModel("In the resurrection morning,\nWhat a meeting it will be,\nWe shall rise, (Hallelujah!) we shall rise!\nWhen our fathers and our mothers,\nAnd our loved ones we shall see,\nWe shall rise, (Hallelujah!) we shall rise."),
      new StanzaModel("In the resurrection morning,\nBlessed thought it is to me,\nWe shall rise, (Hallelujah!) we shall rise!\nI shall see my blessed Saviour,\nWho so freely died for me,\nWe shall rise, (Hallelujah!) we shall rise."),
      new StanzaModel("In the resurrection morning,\nWe shall meet Him in the air,\nWe shall rise, (Hallelujah!) we shall rise!\nAnd be carried up to glory,\nTo our home so bright and fair,\nWe shall rise, (Hallelujah!) we shall rise.")
    ], "Bb",
    new ChorusModel("We shall rise, (Hallelujah!)\nWe shall rise! (Amen)\nWe shall rise, (Hallelujah!)\nIn the resurrection morning,\nWhen death's prison bars are broken.\nWe shall rise, (Hallelujah!) we shall rise")
  ),
  new HymnModel(12, "WEAR A CROWN",
    [
      new StanzaModel("Am I a soldier of the cross,\nA follower of the Lamb,\nAnd shall I fear to own His cause,\nOr blush to speak His Name?"),
      new StanzaModel("Must I be carried to the skies\nOn flow'ry beds of ease,\nWhile others fought to win the prize,\nAnd sailed through bloody seas?"),
      new StanzaModel("Are there no foes for me to face?\nMust I not stem the flood?\nIs this vile world a friend to grace\nTo help me on to God?"),
      new StanzaModel("Sure, I must fight if I would reign,\nIncrease my courage, Lord;\nI'll bear the toil, endure the pain.\nSupported by Thy Word.")
    ], "Ab",
    new ChorusModel("And when the battle's over, we shall wear a crown!\nYes, we shall wear a crown! Yes we shall wear a crown.\nAnd when the battle's over! we shall wear a crown\nIn the new Jerusalem.\nWear a crown, wear a crown,\nWear a bright and shining crown.\nAnd when the battle's over, we shall wear a crown\nIn the New Jerusalem.")
  ),
  new HymnModel(13, "MARVELOUS GRACE",
    [
      new StanzaModel("Marvelous Grace of our loving Lord,\nGrace that exceeds our sin and our guilt.\nYonder on Calvary's mount outpoured,\nThere where the Blood of the Lamb was spilt."),
      new StanzaModel("Sin and despair like the sea waves cold,\nThreaten the soul with infinite loss;\nGrace that is greater, yes grace untold,\nPoints to the Refuge, the Mighty Cross."),
      new StanzaModel("Dark is the stain that we cannot hide,\nWhat can avail to wash it away?\nLook! There is flowing a crimson tide;\nWhiter than snow you may be today."),
      new StanzaModel("Marvelous, infinite, matchless grace,\nFreely bestowed on all who believe;\nYou that are longing to see His face,\nWill you this moment His grace receive?")
    ], "F",
    new ChorusModel("Grace, Grace, God's Grace,\nGrace that will pardon and cleanse within;\nGrace, Grace, God's Grace,\nGrace that is greater than all our sin.")
  ),
  new HymnModel(14, "ZION’S HILL",
    [
      new StanzaModel("There waits for me a glad tomorrow,\nWhere gates of pearl swing open wide,\nAnd when I've passed this vale of sorrow,\nI'll camp upon the other side.\n"),
      new StanzaModel("Some day I'll hear the angles singing,\nBeyond the shadows of the tomb;\nAnd all the bells of heaven ringing,\nWhile saints are singing, \"Home, sweet Home.\""),
      new StanzaModel("Some day my labors will be ended,\nAnd all my wand'rings will be o'er,\nAnd all earth's broken ties be mended,\nAnd I shall sigh and weep no more."),
      new StanzaModel("Some day the dark clouds will be rifted,\nAnd all the night of gloom be past;\nAnd all life's burdens will be lifted,\nThe day of rest shall dawn at last.")
    ], "Ab",
    new ChorusModel("Some day beyond the reach of mortal ken,\nSome day, God only knows just where and when,\nThe wheels of mortal life shall all stand still,\nAnd I shall go to dwell on Zion's hill.")
  ),
  new HymnModel(15, "WE'RE MARCHING TO ZION",
    [
      new StanzaModel("Come, we that love the Lord,\nAnd let our joys be known,\nJoin in a song with sweet accord,\nJoin in a song with sweet accord,\nAnd thus surround the throne,\nAnd thus surround the throne."),
      new StanzaModel("Let those refuse to sing\nWho never knew our God;\nBut children of the heavenly King,\nBut children of the heavenly King,\nMay speak their joys abroad,\nMay speak their joys abroad."),
      new StanzaModel("The hill of Zion yields\nA thousand sacred sweets\nBefore we reach the heavenly fields\nBefore we reach the heavenly fields\nOr walk the golden street,\nOr walk the golden street."),
      new StanzaModel("Then let our songs abound,\nAnd every tear be dry;\nWe're marching thru Immanuel's ground,\nWe're marching thru Immanuel's ground,\nTo fairer worlds on high,\nTo fairer worlds on high.")
    ], "G",
    new ChorusModel("We're marching to Zion,\nBeautiful, Beautiful Zion;\nWe're marching upward to Zion.\nThe beautiful city of God.")
  ),
  new HymnModel(16, "CLEANSE ME",
    [
      new StanzaModel("Search me, O God, and know my heart today;\nTry me, O Saviour, know my thoughts, I pray;\nSee if there be some wicked way in me;\nCleanse me from every sin, and set me free."),
      new StanzaModel("I praise Thee, Lord, for cleansing me from sin;\nFulfill Thy Word, and make me pure within;\nFill me with fire, where once I burned with shame;\nGrant my desire to magnify Thy Name."),
      new StanzaModel("Lord, take my life, and make it wholly Thine;\nFill my poor heart with Thy great love divine;\nTake all my will, my passion, self and pride;\nI now surrender; Lord, in me abide."),
      new StanzaModel("O Holy Ghost, revival comes from Thee;\nSend a revival, start the work in me;\nThy Word declares Thou wilt supply our need;\nFor blessing now, O Lord, I humbly plead.")
    ], "F"
  ),
  new HymnModel(17, "MY SHEEP KNOW MY VOICE",
    [
      new StanzaModel("MY sheep know My voice,\nAnd the path that I take,\nThey follow wherever I go;\nMy sheep know My voice\nAnd come at My call,\nBut a stranger's voice do they not know."),
      new StanzaModel("My sheep know My voice,\nAnd the pastures of green,\nWhere I lead them so often to feed;\nMy sheep know My voice,\nAnd the cool sparkling stream,\nWhere beside its still waters I lead."),
      new StanzaModel("My sheep know My voice,\nAnd the valley of death,\nThru which I shall lead them some day;\nBut no danger nor harm\nCan touch one of them,\nFor I will be with them alway.")
    ], "Bb",
    new ChorusModel("My sheep know My voice.\nAnd day by day,\nThey abide in the fold,\nAnd go not astray;\nThey love Me because\nI have made them My choice,\nAnd they follow My call,\nFor My sheep know My voice.")
  ),
  new HymnModel(18, "ONWARD, CHRISTIAN SOLDIERS",
    [
      new StanzaModel("Onward, Christian soldiers!\nMarching as to war,\nWith the cross of Jesus\nGoing on before;\nChrist, the royal Master,\nLeads against the foe;\nForward into battle,\nSee, His banners go!"),
      new StanzaModel("Like a mighty army\nMoves the Church of God;\nBrothers, we are treading\nWhere the saints have trod;\nWe are not divided,\nAll one body we;\nOne in hope and doctrine,\nOne in charity."),
      new StanzaModel("Crowns and thrones may perish,\nKingdoms rise and wane;\nBut the Church of Jesus\nConstant will remain;\nGates of hell can never\n'Gainst that Church prevail;\nWe have Christ's own promise,\nWhich can never fail."),
      new StanzaModel("At the sign of triumph,\nSatan's host doth flee;\nOh, then, Christian solders,\nOn to Victory!\nHell's foundations quiver\nAt the shout of praise;\nBrothers, lift your voices,\nLoud your anthems raise!"),
      new StanzaModel("Onward, then, ye people!\nJoin our happy throng;\nBlend with ours your voices\nIn the triumph song;\nGlory, laud, and honor.\nUnto Christ the King;\nThis through countless ages\nMen and angels sing.")
    ], "G",
    new ChorusModel("Onward, Christian soldiers!\nMarching as to war,\nWith the cross of Jesus\nGoing on before.")
  ),
  new HymnModel(19, "LET’S TALK ABOUT JESUS",
    [
      new StanzaModel("Let’s talk about Jesus,\nThe King of kings is He,\nThe Lord of lords, Supreme\nThroughout Eternity;\nThe great I AM, the Way,\nThe Truth, the Life, the Door;\nLet's talk about Jesus more and more."),
      new StanzaModel("Let's talk about Jesus,\nLet all the world proclaim,\nThe pow'r and majesty\nOf such a wondrous Name.\nThe Babe of Bethlehem,\nThe Bright and Morning Star,\nLet's sing His praises near and far."),
      new StanzaModel("Let's talk about Jesus,\nThe Bread of Life is He,\nThe Saviour of the world,\nThe Man of Galilee.\nThe Prophet, Priest and King,\nThe Mighty God is He,\nThe well of Living water free."),
      new StanzaModel("Let's talk about Jesus,\nThe Prince of peace is He,\nThe Great Physician too,\nDown through all history.\nThe Lily pure and white,\nThe Rose of Sharon fair,\nThe shepherd of such tender care."),
      new StanzaModel("Let's talk about Jesus,\nThe Rock of ages He,\nThe lamb of sinners slain,\nThe Man of Calvary.\nThe Great Emmanuel,\nThe Word of God sublime,\nHe is our Bridegroom so Divine.")
    ], "Bb"
  ),
  new HymnModel(20, "WHEN UPON THE CLOUDS OF HEAVEN",
    [
      new StanzaModel("When upon the clouds of heaven,\nChrist shall come to earth again,\nWill the world be glad to see Him,\nWhen our Lord shall come again?"),
      new StanzaModel("Will His coming bring rejoicing?\nOr will it bring tears and pain?\nAre you ready to receive Him,\nWhen our Lord shall come again?"),
      new StanzaModel("Will you join in lamentation?\nOr the angel's glad refrain?\nWill you help His people crown Him,\nWhen our Lord shall come again?"),
      new StanzaModel("Work and pray till Jesus calls you,\nHelp to gather in the grain,\nThen with joy you'll meet the Saviour,\nWhen our Lord shall come again.")
    ], "G",
    new ChorusModel("There'll be singing, there'll be shouting,\nThere'll be sorrow, there'll be pain,\nThere'll be weeping, there'll be praying,\nWhen our Lord shall come again.")
  ),
  new HymnModel(21, "THE FIGHT IS ON",
    [
      new StanzaModel("The fight is on, the trumpet sound is ringing out,\nThe cry \"To arms\" is heard afar and near;\nThe Lord of hosts is marching on to victory,\nThe triumph of the right will soon appear."),
      new StanzaModel("The fight is on, arouse ye solders brave and true,\nJehovah leads, and vict'ry will assure;\nGo buckle on the armor God has given you,\nAnd in His strength unto the end endure."),
      new StanzaModel("The Lord is leading on to certain victory,\nThe bow of promise spans the eastern sky;\nHis glorious name in every land shall honored be,\nThe morn will break, the dawn of peace is nigh.")
    ], "C",
    new ChorusModel("The fight is on, O Christian soldiers,\nAnd face to face in stern array,\nWith armor gleaming, and colors streaming,\nThe right and wrong engage today;\nThe fight is on, but be not weary,\nBe strong and in Him might hold fast;\n\
    If God be for us, His banner o'er us,\nWe'll sing the victor's song at last.")
  ),
  new HymnModel(22, "VICTORY IN JESUS",
    [
      new StanzaModel("I heard an old, old story,\nHow a Saviour came from glory,\nHow He gave His life on Calvary\nTo save a wretch like me;\nI heard about His groaning,\nOf His precious blood's atoning,\nThen I repented of my sins\n And won the victory."),
      new StanzaModel("I heard about His healing,\nOf His cleansing pow'r revealing,\nHow He made the lame to walk again\nAnd caused the blind to see;\nAnd then I cried, \"Dear Jesus,\nCome and heal my broken spirit,\"\nAnd somehow Jesus came and brought\nTo me the victory."),
      new StanzaModel("I heard about a mansion\nHe has built for me in glory,\nAnd I heard about the street of gold\nBeyond the crystal sea;\nAbout the angels singing,\nAnd the old redemption story,\nAnd some sweet day I'll sing up there\nThe song of victory.")
    ], "Ab",
    new ChorusModel("O victory in Jesus,\nMy Saviour, forever,\nHe sought me and bought me\nWith His redeeming blood;\nHe loved me ere I knew Him\nAnd all my love is due Him,\nHe plunged me to victory,\nBeneath the cleansing flood.")
  ),
  new HymnModel(23, "MY FAITH LOOKS UP TO THEE",
    [
      new StanzaModel("My faith looks up to Thee,\nThou Lamb of Calvary,\nSaviour divine;\nNow hear me while I pray,\nTake all my sin away,\nO let me from this day\nBe wholly Thine!"),
      new StanzaModel("May Thy rich grace impart\nStrength to my fainting heart,\nMy zeal inspire;\nAs Thou hast died for me,\nO may my love to Thee,\nPure, warm, and changeless be,\nA living fire!"),
      new StanzaModel("While life's dark maze I tread,\nAnd grief's around me spread\nBe Thou my Guide;\nBid darkness turn to day,\nWipe sorrow's tears away,\nNor let me ever stray,\nFrom Thee aside.")
    ], "Eb"
  ),
  new HymnModel(24, "LIVING BY FAITH",
    [
      new StanzaModel("I care not today what the morrow may bring,\nIf shadow or sunshine or rain,\nThe Lord I know ruleth o'er everything,\nAnd all of my worry is vain.\n"),
      new StanzaModel("Though tempest may blow and the storm clouds arise.\nObscuring the brightness of life.\nI'm never alarmed at the overcast skies,\nThe Master looks on at the strife.\n"),
      new StanzaModel("I know that He safely will carry me through,\nNo matter what evils betide.\nWhy should I then care, though the tempest may below,\nIf Jesus walks close to my side."),
      new StanzaModel("Our Lord will return to this earth some sweet day,\nOur troubles will then all be o'er,\nThe Master so gently will lead us away,\nBeyond that blest heavenly shore.")
    ], "Eb",
    new ChorusModel("Living by faith, in Jesus above,\nTrusting, confiding in His great love;\nFrom all harm safe in His sheltering arm.\nI'm living by faith and feel no alarm.")
  ),
  new HymnModel(25, "I SURRENDER ALL",
    [
      new StanzaModel("All to Jesus I surrender,\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live."),
      new StanzaModel("All to Jesus I surrender,\nHumbly at His feet I bow,\nWorldly pleasures all forsaken,\nTake me, Jesus, take me now."),
      new StanzaModel("All to Jesus I surrender,\nMake me, Saviour, wholly Thine;\nLet me feel the Holy Spirit.\nTruly know that Thou art mine."),
      new StanzaModel("All to Jesus I surrender,\nLord, I give myself to Thee;\nFill me with Thy love and power,\nLet Thy blessing fall on me."),
      new StanzaModel("All to Jesus I surrender,\nNow I feel the sacred flame;\nOh, the joy of full salvation!\nGlory, glory to His name!")
    ], "Eb",
    new ChorusModel("I surrender all,\nI surrender all,\nAll to Thee, my blessed Saviour.\nI surrender all")
  ),
  new HymnModel(26, "WHEN I REACH THAT CITY",
    [
      new StanzaModel("On the top of Mount Zion is a city\nAnd the earth with glory it doth fill;\nI shall look on its beauty in the morning\nWhen I reach that city on the hill."),
      new StanzaModel("I'm invited to come home to that city,\nFor the Word says, \"Whosoever will,\"\nAnd I'll find there a mansion for me waiting\nWhen I reach that city on the hill."),
      new StanzaModel("Death will never molest me in that city,\nNever leave me lying cold and chill;\nAnd I'll enter to live up there forever\nWhen I reach that city on the hill."),
      new StanzaModel("So, I'll stay here until my Saviour calls me,\nTrying daily to perform His will;\nThen He'll say unto me, \"Well done,\" up yonder\nWhen I reach that city on the hill.")
    ], "Ab",
    new ChorusModel("Oh, that city on Mount Zion,\nTho' a pilgrim yet I love thee still;\nI'll not leave thee, through the ages,\nWhen I reach that city on the hill.")
  ),
  new HymnModel(27, "FARTHER ALONG",
    [
      new StanzaModel("Tempted and tried we're oft made to wonder\nWhy it should be thus all the day long,\nWhile there are others living about us,\nNever molested though in the wrong."),
      new StanzaModel("When death has come and taken our loves ones,\nIt leaves our home so lonely and drear;\nThen do we wonder why others prosper,\nLiving so wicked year after year."),
      new StanzaModel("Faithful till death said our loving Master,\nA few more days to labor and wait;\nToils of the road will then seem as nothing,\nAs we sweep through the beautiful gate."),
      new StanzaModel("When we see Jesus coming in glory,\nWhen He comes from His home in the sky;\nThen we shall meet Him in that bright mansion,\nWe'll understand it all by and by.")
    ], "F",
    new ChorusModel("Farther along we'll know all about it,\nFarther along we'll understand why;\nCheer up, my brother, live in the sunshine,\nWe'll understand it all by and by.")
  ),
  new HymnModel(28, "FILL MY WAY WITH LOVE",
    [
      new StanzaModel("Let me walk, blessed Lord, in the way Thou hast gone,\nLeading straight to the land above;\nGiving cheer everywhere, to the sad and the lone,\nFill my way every day with love."),
      new StanzaModel("Keep me close to the side of my Saviour and Guide,\nLet me never in darkness rove;\nKeep my path free from wrath, and my soul satisfied,\nFill my way every day with love."),
      new StanzaModel("Soon the race will be o'er, and I'll travel no more,\nBut abide in my home above;\nLet me sing, blessed King, all the way to the shore,\nFill my way every day with love.")
    ], "Ab",
    new ChorusModel("Fill my way every day with love,\nAs I walk with the heavenly Dove;\nLet me go all the while, with a song and a smile,\nFill my way every day with love.")
  ),
  new HymnModel(29, "I AM RESOLVED",
    [
      new StanzaModel("I am resolved no longer to linger,\nCharmed by the world's delight;\nThings that are higher, things that are nobler,\nThese have allured my sight."),
      new StanzaModel("I am resolved to go to the Saviour,\nLeaving my sin and strife;\nHe is the true one, He is the just one,\nHe hath the words of life."),
      new StanzaModel("I am resolved to follow the Saviour,\nFaithful and true each day;\nHeed what He sayeth, do what He willeth,\nHe is the living way."),
      new StanzaModel("I am resolved to enter the kingdom,\nLeaving the paths of sin;\nFriends may oppose me, foes may beset me,\nStill will I enter in."),
      new StanzaModel("I am resolved, and who will go with me?\nCome, friends, without delay,\nTaught by the Bible, led by the Spirit,\nWe'll walk the heavenly way.")
    ], "Bb",
    new ChorusModel("I will hasten to Him,\nHasten so glad and free,\nJesus, greatest, highest,\nI will come to Thee.")
  ),
  new HymnModel(30, "HIGHER GROUND",
    [
      new StanzaModel("I'm pressing on the upward way,\nNew heights I'm gaining every day;\nStill praying as I'm onward bound,\n\"Lord, Plant my feet on higher ground.\""),
      new StanzaModel("My heart has no desire to stay\nWhere doubts arise and fears dismay;\nTho' some may dwell where these abound,\nMy prayer, my aim, is higher ground."),
      new StanzaModel("I want to scale the utmost height,\nAnd catch a gleam of glory bright;\nBut still I'll pray till heav'n I've found,\n\"Lord, lead me on to higher ground.\"")
    ], "G",
    new ChorusModel("Lord, lift me up and let me stand,\nBy faith, on heaven's table land,\nA higher plane than I have found;\nLord, plant my feet on higher ground.")
  ),
  new HymnModel(31, "STANDING ON THE PROMISES",
    [
      new StanzaModel("Standing on the promises of Christ my King,\nThrough eternal ages let His praises ring;\nGlory in the highest I will shout and sing,\nStanding on the promises of God."),
      new StanzaModel("Standing on the promises that cannot fail,\nWhen the howling storms of doubt and fear assail,\nBy the living Word of God I shall prevail,\nStanding on the promises of God."),
      new StanzaModel("Standing on the promises I now can see\nPerfect, present cleansing in the blood for me;\nStanding in the liberty where Christ makes free,\nStanding on the promises of God."),
      new StanzaModel("Standing on the promises of Christ the Lord,\nBound to Him eternally by love's strong cord,\nOvercoming daily with the Spirit's sword,\nStanding on the promises of God."),
      new StanzaModel("Standing on the promises I cannot fall,\nList'ning every moment to the Spirit's call,\nResting in my Saviour, as my all in all,\nStanding on the promises of God.")
    ], "Bb",
    new ChorusModel("Standing, standing,\nStanding on the promises of God my Saviour;\nStanding, standing,\nI'm standing on the promises of God.")
  ),
  new HymnModel(32, "BY AND BY, MORNING COMES",
    [
      new StanzaModel("We are often tossed and driven on the restless sea of time,\nSomber skies and howling tempests oft succeed a bright sunshine;\nIn the land of perfect day, when the mists have rolled away,\nWe will understand it better by and by."),
      new StanzaModel("We are often destitute of the things that life demands,\nWant of food and want of shelter, thirsty hills and barren lands;\nBut we're trusting in the Lord, and according to His Word,\nWe will understand it better by and by."),
      new StanzaModel("Trials dark on every hand, and we cannot understand,\nAll the ways that God would lead us to that blessed promised Land;\nBut He guides us with His eye and we'll follow till we die,\nFor we'll understand it better by and by."),
      new StanzaModel("Temptations, hidden snares often take us unawares,\nAnd our hearts are made to bleed for many a thoughtless word or deed,\nAnd we wonder why the test when we try to do our best,\nBut we'll understand it better by and by.")
    ], "F",
    new ChorusModel("By and by when the morning comes,\nWhen all the saints of God are gathered home,\nWe will tell the story how we overcome,\nFor we'll understand it better by and by.")
  ),
  new HymnModel(33, "ROCK OF AGES",
    [
      new StanzaModel("Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed\nBe of sin the double cure,\nSave from wrath and make me pure."),
      new StanzaModel("Could my tears forever flow,\nCould my zeal no languor know,\nThese for sin could not atone;\nThou must save, and Thou alone;\nIn my hand no price I bring,\nSimply to Thy cross I cling."),
      new StanzaModel("While I draw this fleeting breath,\nWhen my eyes shall close in death,\nWhen I rise to worlds unknown,\nAnd behold Thee on Thy throne,\nRock of Ages, cleft for me,\nLet me hide myself in Thee.")
    ], "Bb"
  ),
  new HymnModel(34, "WHEN I SEE THE BLOOD",
    [
      new StanzaModel("Christ our Redeemer died on the cross,\nDied for the sinner, paid all His due;\nSprinkle your soul with the blood of the Lamb,\nAnd I will pass, will pass over you."),
      new StanzaModel("Chiefest of sinners, Jesus will save;\nAll He has promised, that will He do;\nWash in the fountain opened for sin,\nAnd I will pass, I will pass over you."),
      new StanzaModel("Judgment is coming, all will be there,\nEach one receiving justly his due;\nHide in the saving, sin-cleansing blood,\nAnd I will pass, will pass over you.\n"),
      new StanzaModel("Oh, great compassion! O boundless love!\nO loving kindness, faithful and true!\nFind peace and shelter under the blood,\nAnd I will pass, will pass over you.")
    ], "C",
    new ChorusModel("When I see the blood,\nWhen I see the blood,\nWhen I see the blood,\nI will pass, I will pass over you.")
  ),
  new HymnModel(35, "LOVE LIFTED ME",
    [
      new StanzaModel("I was sinking deep in sin,\nFar from the peaceful shore,\nVery deeply stained within,\nSinking to rise no more;\nBut the Master of the sea\nHeard my despairing cry,\nFrom the waters lifted me,\nNow safe am I."),
      new StanzaModel("All my heart to Him I give,\nEver to Him I'll cling,\nIn His blessed presence live,\nEver His praises sing.\nLove so mighty and so true\nMerits my soul's best songs;\nFaithful, loving service, too,\nTo Him belongs."),
      new StanzaModel("Souls in danger, look above,\nJesus completely saves;\nHe will lift you by His love\nOut of the angry waves.\nHe's the Master of the sea,\nBillows His will obey;\nHe your Saviour wants to be;\nBe saved today.")
    ], "Bb",
    new ChorusModel("Love lifted me! Love lifted me!\nWhen nothing else could help, love lifted me,\nLove lifted me! Love lifted me!\nWhen nothing else could help, love lifted me.")
  ),
  new HymnModel(36, "THERE SHALL BE SHOWERS OF BLESSING",
    [
      new StanzaModel("\“Three shall be showers of blessing,\”\nThis is the promise of love;\nThere shall be seasons refreshing,\nSent from the Saviour above."),
      new StanzaModel("\"There shall be showers blessing,\"\nPrecious reviving again;\nOver the hills and the valleys,\nSound of abundance of rain."),
      new StanzaModel("\"There shall be showers of blessing,\"\nSend them upon us, O Lord;\nGrant to us now a refreshing,\nCome, and now honor Thy Word."),
      new StanzaModel("\"There shall be showers of blessing,\"\nOh, that today they might fall,\nNow as to God we're confessing,\nNow as on Jesus we call!")
    ], "Bb",
    new ChorusModel("Showers of blessing,\nShowers of blessing we need;\nMercy drops round us are falling,\nBut for the showers we plead.")
  ),
  new HymnModel(37, "HAVE THINE OWN WAY, LORD",
    [
      new StanzaModel("Have Thine own way, Lord!\nHave Thine own way!\nThou art the Potter;\nI am the clay,\nMould me and make me\nAfter Thy will,\nWhile I am waiting,\nYielded and still."),
      new StanzaModel("Have Thine own way, Lord!\nHave Thine own way!\nSearch me and try me,\nMaster, today!\nWhiter than snow, Lord,\nWash me just now,\nAs in Thy presence\nHumbly I bow."),
      new StanzaModel("Have Thine own way, Lord!\nHave Thine own way!\nWounded and weary,\nHelp me, I pray!\nPower, all power,\nSurely is Thine!\nTouch me and heal me.\nSaviour divine!"),
      new StanzaModel("Have Thine own way, Lord!\nHave Thine own way!\nHold o'er my being\nAbsolute sway!\nFill with Thy Spirit\nTill all shall see\nChrist only, always,\nLiving in me!")
    ], "Eb"
  ),
  new HymnModel(38, "DRAW ME NEARER",
    [
      new StanzaModel("I am Thine, O Lord I have heard Thy voice,\nAnd it told Thy love to me;\nBut I long to rise in the arms of faith,\nAnd be closer drawn to Thee."),
      new StanzaModel("Consecrate me now to Thy service, Lord,\nBy the pow'r of grace divine;\nLet my soul look up with a steadfast hope,\nAnd my will be lost in Thine."),
      new StanzaModel("Oh, the pure delight of a single hour\nThat before Thy throne I spend,\nWhen I kneel in prayer, and with Thee, my God,\nI commune as friend with friend."),
      new StanzaModel("There are depths of love that I cannot know\nTill I cross the narrow sea,\nThere are heights of joy that I may not reach,\nTill I rest in peace with Thee.")
    ], "Ab",
    new ChorusModel("Draw me nearer, nearer, blessed Lord,\nTo the cross where Thou has died;\nDraw me nearer, nearer, nearer, blessed Lord,\nTo Thy precious, bleeding side.")
  ),
  new HymnModel(39, "I AM MARKED",
    [
      new StanzaModel("I Have lost my reputation since I turned my back on sin,\nAnd a lot of friends went from me, since I let my Saviour in;\nNow they pass me by unknown, when they once passed with a smile;\nNow they say I'm very foolish, and they say I'm out of style."),
      new StanzaModel("Well, they say my life is ruined, and my talent thrown away,\nAnd they cannot understand it, for I had such plans one day;\nBut I know what I surrendered when I\npromised I'd go through;\nAnd I gained far more glory since God made me over new.")
    ], "Ab",
    new ChorusModel("I am marked, marked, marked,\nI am marked, now wherever I go;\nI am marked, marked, marked,\nJust what I am everyone seems to know.\nI am sealed, sealed, sealed,\nI am sealed by His Spirit Divine;\nO glory to God! Hallelujah! Amen!\nI am His, and I know He is mine.")
  ),
  new HymnModel(40, "WON’T IT BE WONDERFUL THERE?",
    [
      new StanzaModel("When with the Saviour we enter the gloryland,\nWon't it be wonderful there?\nEnded the troubles and cares of the storyland,\nWon't it be wonderful there?"),
      new StanzaModel("Walking and talking with Christ, the supernal One,\nWon't it be wonderful there?\nPraising, adoring the matchless eternal One,\nWon't it be wonderful there?"),
      new StanzaModel("There where the tempest will never be sweeping us,\nWon't it be wonderful there?\nSure that forever the Lord will be keeping us,\nWon't it be wonderful there?")
    ], "Bb",
    new ChorusModel("Won't it be wonderful there,\nHaving no burdens to bear?\nJoyously singing with heart-bells all ringing,\nO won't it be wonderful there?")
  ),
  new HymnModel(41, "WINGS OF A DOVE",
    [
      new StanzaModel("Noah had drifted\nOn the floods many days,\nHe searched for land\nIn various ways;\nTroubles he had some,\nBut not from above,\nGod gave him His sign\nOn the wings of a dove."),
      new StanzaModel("Jesus, our Saviour\nCame to earth one day;\nHe was born in a stable,\nIn a manger of hay;\nThough here rejected,\nBut not from above,\nGod gave us His sign\nOn the wings of a dove."),
      new StanzaModel("Though I have suffered\nIn many a way,\nI cried for healing\nBoth night and day;\nFaith wasn't forgotten\nBy the Father above,\nHe gave me His sign\nOn the wings of a dove.")
    ], "Eb",
    new ChorusModel("On the wings of a snow-white dove,\nGod sends down His pure, sweet love,\nA sign from above,\nOn the wings of dove.")
  ),
  new HymnModel(42, "I FEEL LIKE TRAVELING ON",
    [
      new StanzaModel("My Heavenly home is bright and fair,\nI feel like traveling on,\nNor pain, nor death can enter there,\nI feel like traveling on."),
      new StanzaModel("Its glittering towers the sun outshine,\nI feel like traveling on;\nThat heavenly mansion shall be mine,\nI feel like traveling on."),
      new StanzaModel("Let others seek a home below,\nI feel like traveling on;\nWhich flames devour, or waves o'erflow,\nI feel like traveling on."),
      new StanzaModel("The Lord has been so good to me,\nI feel like traveling on;\nUntil that blessed home I see,\nI feel like traveling on.")
    ], "G",
    new ChorusModel("Yes, I feel like traveling on,\nI feel like traveling on;\nMy heavenly home is bright and fair,\nI feel like traveling on.")
  ),
  new HymnModel(43, "COME AND DINE",
    [
      new StanzaModel("Jesus has a table spread\nWhere the saints of God are fed,\nHe invites His chosen people \“Come and dine\”\nWith His manna He doth feed\nAnd supplies our every need;\nO, 'tis sweet to sup with Jesus all the time!"),
      new StanzaModel("The disciples came to land,\nThus obeying Christ's command,\nFor the Master called to them, \"Come and dine;\"\nThere they found their hearts' desire,\nBread and fish upon the fire;\nThus He Satisfies the hungry every time."),
      new StanzaModel("Soon the Lamb will take His bride\nTo be ever at His side,\nAll the host of heaven will assembled be:\nO, 'twill be a glorious sight,\nAll the saints in spotless white;\nAnd with Jesus they will feast eternally.")
    ], "C",
    new ChorusModel("\"Come and dine,\" the Master calleth,\n\"Come and dine,\"\nYou may feast at Jesus' table all the time;\nHe who fed the multitude, turned the water into wine,\nTo the hungry calleth now, \"Come and dine.\"")
  ),
  new HymnModel(44, "GOD LEADS US ALONG",
    [
      new StanzaModel("In shady, green pastures, so rich and so sweet,\nGod leads His dear children along;\nWhere the water's cool flow bathes the weary one's feet,\nGod leads His dear children along."),
      new StanzaModel("Sometimes on the mount where the sun shines so bright,\nGod leads His dear children along;\nSometimes in the valley in the darkest of night,\nGod leads His dear children along."),
      new StanzaModel("Tho' sorrow befall us, and Satan oppose,\nGod leads His dear children along;\nThrough grace we can conquer, defeat all our foes,\nGod leads His dear children along."),
      new StanzaModel("Away from the mire, and away from the clay,\nGod leads His dear children along;\nAway up in glory, eternity's day,\nGod leads His dear children along")
    ], "Eb",
    new ChorusModel("Some through the waters, some through the flood,\nSome through the fire, but all through the Blood;\nSome though great sorrow, but God gives a song,\nIn the night season and all the day long.")
  ),
  new HymnModel(45, "LEANING ON THE EVERLASTING ARMS",
    [
      new StanzaModel("What a fellowship, what a joy divine,\nLeaning on the everlasting arms;\nWhat a blessedness, what a peace is mine\nLeaning on the everlasting arms."),
      new StanzaModel("Leaning, leaning,\nSafe and secure from all alarms;\nLeaning, leaning, leaning on the everlasting arms."),
      new StanzaModel("Oh, how sweet to walk in this pilgrim way,\nLeaning on the everlasting arms;\nOh, how bright the path grows from day to day,\nLeaning on the everlasting arms."),
      new StanzaModel("What have I to dread, what have I to fear,\nLeaning on the everlasting arms;\nI have blessed peace with my Lord so near,\nLeaning go the everlasting arms.")
    ], "Eb",
    new ChorusModel("Leaning, leaning,\nSafe and secure from all alarms;\nLeaning, leaning,\nLeaning on the everlasting arms.")
  ),
  new HymnModel(46, "SUNLIGHT",
    [
      new StanzaModel("I wandered in the shades of night,\nTill Jesus came to me,\nAnd with the sunlight of His love\nBid all my darkness flee."),
      new StanzaModel("Though clouds may gather in the sky,\nAnd billows 'round me roll,\nHowever dark the world may be,\nI've sunlight in my soul."),
      new StanzaModel("While walking in the light of God, I sweet communion find;\nI press with holy vigor on,\nAnd leave the world behind."),
      new StanzaModel("I cross the wild extended fields,\nI journey o'er the plains,\nAnd in the sunlight of His love\nI reap the golden grain."),
      new StanzaModel("Soon I shall see Him as He is,\nThe light that came to me;\nBehold the brightness of His face,\nThroughout eternity.")
    ], "Eb",
    new ChorusModel("Sunlight, sunlight in my soul today,\nSunlight, sunlight all along the way;\nSince the Saviour found me, took away my sin,\nI have had sunlight of His love within.")
  ),
  new HymnModel(47, "I KNOW WHOM I HAVE BELIEVED",
    [
      new StanzaModel("I know not why God's wondrous grace\n To me He hath made known,\nNor why, unworthy, Christ in love\nRedeemed me for His own."),
      new StanzaModel("I know not how this saving faith\nTo me He did impart,\nNor how believing in His Word\nWrought peace within my heart."),
      new StanzaModel("I know not how the Spirit moves,\nConvincing men of sin,\nRevealing Jesus through the Word,\nCreating faith in Him."),
      new StanzaModel("I know not what of good or ill\nMay be reserved for me,\nOf weary ways or golden days,\nBefore His face I see."),
      new StanzaModel("I know not when my Lord may come,\nAt night or noonday fair,\nNor if I'll walk the vale with Him,\nOr \“meet Him in the air.\”")
    ], "Eb",
    new ChorusModel("But \"I know whom I have believed,\nAnd am persuaded that He is able\nTo keep that which I've committed\nUnto Him against that day.\"")
  ),
  new HymnModel(48, "BRINGING IN THE SHEAVES",
    [
      new StanzaModel("Sowing in the morning, sowing seeds of kindness,\nSowing in the noontide and the dewy eve;\nWaiting for the harvest and the time of reaping,\nWe shall come rejoicing, bringing in the sheaves."),
      new StanzaModel("Sowing in the sunshine, sowing in the shadows,\nFearing neither clouds nor winter's Chilling breeze;\nBy and by the harvest and the labor ended,\nWe shall come rejoicing, bringing in the sheaves."),
      new StanzaModel("Going forth with weeping, sowing for the Master,\nThough the loss sustained, our spirit often grieves;\nWhen our weeping's over, He will bid us welcome,\nWe shall come rejoicing, bringing in the sheaves.")
    ], "Bb",
    new ChorusModel("Bringing in the sheaves, bringing in the shaves;\nWe shall come rejoicing, bringing in the sheaves;\nBringing in the sheaves, bringing in the sheaves,\nWe shall come rejoicing, bringing in the sheaves.")
  ),
  new HymnModel(49, "SOME GOLDEN DAYBREAK",
    [
      new StanzaModel("Some glorious morning sorrow will cease,\nSome glorious morning all will be peace;\nHeartaches all ended, schooldays all done,\nHeaven will open, Jesus will come."),
      new StanzaModel("Sad hearts will gladden, all shall be bright,\nGood-bye forever to earth's dark night;\nChanged in a moment, like Him to be,\nOh, glorious daybreak, Jesus I'll see."),
      new StanzaModel("Oh, what a meeting, there in the skies,\nNo tears nor crying shall dim our eyes;\nLoved ones united eternally,\nOh, what a daybreak that morn will be.")
    ], "Ab",
    new ChorusModel("Some golden daybreak, Jesus will come;\nSome golden daybreak, battles all won,\nHe'll shout the victory, break through the blue,\nSome golden daybreak for me, for you.")
  ),
  new HymnModel(50, "SHALL WE GATHER AT THE RIVER?",
    [
      new StanzaModel("Shall we gather at the river,\nWhere bright angel feet have trod,\nWith its crystal tide forever,\nFlowing by the throne of God?"),
      new StanzaModel("On the bosom of the river,\nWhere the Saviour-King we own,\nWe shall meet and sorrow never,\n'Neath the glory of the throne."),
      new StanzaModel("On the margin of the river,\nWashing up its silver spray,\nWe will walk and worship ever,\nAll the happy, golden day."),
      new StanzaModel("Ere we reach the shining river,\nLay we every burden down;\nGrace our spirit will deliver,\nAnd provide a robe and crown."),
      new StanzaModel("At the smiling of the river,\nMirror of the Saviour's face,\nSaints whom death will never sever\nLift their songs of saving grace."),
      new StanzaModel("Soon we'll reach the shining river,\nSoon our pilgrimage will cease;\nSoon our happy hearts will quiver\nWith the melody of peace.\n")
    ], "Ab",
    new ChorusModel("Yes, we'll gather at the river,\nThe beautiful, the beautiful river;\nGather with the saints at the river\nThat flows by the throne of God.\n")
  ),
  new HymnModel(51, "GLORY TO HIS NAME",
    [
      new StanzaModel("Down at the cross where my Saviour died,\nDown where for cleansing from sin I cried;\nThere to my heart was the blood applied;\nGlory to His name!"),
      new StanzaModel("I am so wondrously saved from sin,\nJesus so sweetly abides within,\nThere at the cross where He took me in;\nGlory to His name!"),
      new StanzaModel("Oh, precious fountain that saves from sin!\nI am so glad I have entered in;\nThere Jesus saves me and keeps me clean;\nGlory to His name!"),
      new StanzaModel("Come, to this fountain so rich and sweet;\nCast thy poor soul at the Saviour's feet;\nPlunge in today, and be made complete;\nGlory to His name!")    ], "Ab",
    new ChorusModel("Glory to His name!\nGlory to His name!\nThere to my heart was the blood applied;\nGlory to His name!")
  ),
  new HymnModel(52, "HE BROUGHT ME OUT",
    [
      new StanzaModel("My heart was distressed 'neath Jehovah's dread frown,\nAnd low in the pit where my sins dragged me down;\nI cried to the Lord from the deep miry clay,\nWho tenderly brought me out to golden day."),
      new StanzaModel("He placed me upon the strong Rock by His side,\nMy steps were established and here I'll Abide;\nNo danger of falling while here I remain,\nBut stand by His grace until the crown I gain."),
      new StanzaModel("He gave me a song, 'twas a new song of praise,\nBy day and by night its sweet notes I will raise;\nMy heart's overflowing, I'm happy and free,\nI'll praise my Redeemer, who has rescued me."),
      new StanzaModel("I'll sing of his wonderful mercy to me,\nI'll praise him till all men His goodness shall see;\nI'll sing of salvation at home and abroad,\nTill many shall hear the truth and trust in God.")
    ], "Eb",
    new ChorusModel("He brought me out of the miry clay;\nHe set my feet on the rock to stay;\nHe puts a song in my soul today,\nA song of praise, hallelujah!")
  ),
  new HymnModel(53, "SWEET BY AND BY",
    [
      new StanzaModel("There’s a land that is fairer than day,\nAnd by faith we can see it afar;\nFor the Father waits over the way,\nTo prepare us a dwelling place there."),
      new StanzaModel("We shall sing on that beautiful shore,\nThe melodious songs of the blest,\nAnd our spirits shall sorrow no more,\nNot a sigh for the blessing of rest."),
      new StanzaModel("To our bountiful Father above,\nWe will offer our tribute of praise,\nFor the glorious gift of His love,\nAnd the blessings that hallow our days.")
    ], "G",
    new ChorusModel("In the sweet by and by,\nWe shall meet on that beautiful shore;\nIn the sweet by and by,\nWe shall meet on that beautiful shore.")
  ),
  new HymnModel(54, "THERE IS A FOUNTAIN",
    [
      new StanzaModel("There is a fountain filled with blood,\nDrawn from Immanuel's veins,\nAnd sinners plunged beneath that flood,\nLose all their guilty stains.\nLose all their guilty stains,\nLose all their guilty stains;\nAnd sinners plunged beneath that flood,\nLose all their guilty stains."),
      new StanzaModel("The dying thief rejoiced to see\nThat fountain in his day;\nAnd there may I, though vile as he,\nWash all my sins away,\nWash all my sins away,\nWash all my sins away,\nAnd there may I, though vile as he,\nWash all my sins away."),
      new StanzaModel("E'er since by faith I saw the stream\nThy flowing wounds supply,\nRedeeming love has been my theme,\nAnd shall be till I die.\nAnd shall be till I die,\nAnd shall be till I die;\nRedeeming love has been my theme,\nAnd shall be till I die."),
      new StanzaModel("Then in a nobler, sweeter song,\nI'll sing Thy power to save,\nWhen this poor lisping, stammering tongue\nLies silent in the grave.\nLies silent in the grave,\nLies silent in the grave;\nWhen this poor lisping, stammering tongue\nLies silent in the grave.")
    ], "C"
  ),
  new HymnModel(55, "OH, WHAT PRECIOUS LOVE",
    [
      new StanzaModel("Oh, what precious love the Father\nHad for Adam's fallen race,\nGave His only Son to suffer,\nAnd redeem us by His grace.")
    ], "F"
  ),
  new HymnModel(56, "JESUS NEVER FAILS",
    [
      new StanzaModel("Jesus Never fails,\nJesus never fails,\nHeaven and earth will pass away,\nBut Jesus never fails.")
    ], "Ab"
  ),
  new HymnModel(57, "BATTLE HYMN OF REPUBLIC",
    [
      new StanzaModel("Mine eyes have seen the glory of the\nComing of the Lord;\nHe is tramping out the vintage where the\ngrapes of wrath are stored;\nHe hath loosed the fateful lightning of His\nterrible swift sword;\nHis truth is marching on."),
      new StanzaModel("I have seen Him in the watchfires of a\nhundred circling camps;\nThey have builded Him an altar in the\nevening dews and damps;\nI can read His righteous sentence by the dim and flaring lamps;\nHis day is marching on."),
      new StanzaModel("He has sounded forth the trumpet that\nshall never sound retreat;\nHe is sifting out the hearts of men before His judgment seat;\nO be swift, my soul, to answer Him! Be\njubilant, my feet!\nOur God is marching on."),
      new StanzaModel("In the beauty of the lilies Christ was born across the sea,\nWith a glory in His bosom that transfigures you and me;\nAs He died to make men holy, let us die to make men free;\nWhile God is marching on.")
    ], "Bb",
    new ChorusModel("Glory! Glory!, hallelujah!\nGlory! Glory!, hallelujah!\nGlory! Glory!, hallelujah!\nHis Truth is marching on.")
  ),
  new HymnModel(58, "AMEN",
    [
      new StanzaModel("Amen! Amen! Amen! Amen! Amen!\nAre you going to love Him? Amen!\nAre you going to praise Him? Amen!\nAre you going to worship Him? Amen!\nAmen, Amen!"),
      new StanzaModel("Do you love Him? Amen!\nWill you serve Him? Amen!\nDo you believe Him? Amen!\nAmen, Amen!"),
      new StanzaModel("The Bible's true. Amen!\nI believe it. Amen!\nIt's the Word of God. Amen!\nAmen, Amen!"),
      new StanzaModel("We believe You're coming. Amen!\nWe're ready to meet You. Amen!\nCome, Lord Jesus. Amen!\nAmen, Amen!")
    ], "F"
  ),
  new HymnModel(59, "THE CIRCUIT RIDER PREACHER",
    [
      new StanzaModel("The circuit-rider preacher went riding through the land,\nWith a rifle on his shoulder and a Bible in his hand;\nHe told the prairie people of a blessed Promised Land.\nAs he went riding, singing along."),
      new StanzaModel("Leaning, leaning,\nLeaning on the everlasting arm;\nLeaning, leaning,\nLeaning on the everlasting arm."),
      new StanzaModel("He preached the coming judgment of fire and brimstone;\nAnd a glorious, endless Heaven of the justified alone.\nAs he rode across the mountains you could\nhear him sing this song.\nAs he went riding on."),
      new StanzaModel("There is power, power, wonder-working power,\nIn the blood of the Lamb;\nThere is power, power, wonder-working power,\nIn the precious blood of the Lamb."),
      new StanzaModel("His rifle's old and rusty, and it's hanging on the wall;\nHis Bible's worn and dusty, and it's seldom\ntouched at all;\nBut his Message from this Bible will meet us\nat Judgment Day.\nFor God's Truth keeps marching on."),
      new StanzaModel("Glory! glory, hallelujah!\nGlory! glory, hallelujah!\nGlory! glory, hallelujah!\nHis Truth is marching on.")
    ], "Bb"
  ),
  new HymnModel(60, "EACH STEP OF THE WAY",
    [
      new StanzaModel("I'm following Jesus,\nOne step at a time;\nI live for the moment,\nIn His love divine.\nWhy think of tomorrow,\nJust live for today;\nI'm following Jesus,\nEach step of the way."),
      new StanzaModel("The pathway is narrow,\nBut He leads me on;\nI walk in His shadow,\nMy fears are all gone.\nMy spirit grows stronger.\nEach moment, each day,\nFor Jesus is leading\nEach step of the way.")
    ], ""
  ),
  new HymnModel(61, "I SHALL NOT BE MOVED ",
    [
      new StanzaModel("Jesus is my Saviour, I shall not be moved;\nIn His love and favor, I shall not be moved;\nJust like a tree that's planted by the waters,\nI shall not be moved."),
      new StanzaModel("In my Christ abiding, I shall not be moved;\nIn His love I'm hiding, I shall not moved.\nJust like a tree that's planted by the waters,\nI shall not be moved."),
      new StanzaModel("If I trust Him ever, I shall not be moved;\nHe will fail me never, I shall not be moved;\nJust like a tree that's planted by the waters,\nI shall not be moved."),
      new StanzaModel("On His word I'm feeding, I shall not be moved;\nHe's the One that's leading, I shall not be moved;\nJust like a tree that's planted by the waters,\nI shall not be moved."),
      new StanzaModel("Glory Hallelujah, I shall not be moved;\nAnchored in Jehovah, I shall not be moved;\nJust like a tree that's planted by the waters,\nI shall not be moved."),
      new StanzaModel("In His love abiding, I shall not moved;\nAnd in Him confiding, I shall not be moved;\nJust like a tree that's planted by the waters,\nI shall not be moved."),
      new StanzaModel("Though all hell assail me, I shall not be moved;\nJesus will not fail me, I shall not be moved;\nJust like a tree that's planted by the waters,\nI shall not be moved."),
      new StanzaModel("Though the tempest rages, I shall not be moved;\nOn the Rock of Ages, I shall not be moved;\nJust like a tree that's planted by the waters,\nI shall not be moved.")
    ], "Ab",
    new ChorusModel("I shall not be, I shall not be moved,\nI shall not be, I shall not be moved;\nJust like a tree that's planted by the waters,\nI shall not be moved;")
  ),
  new HymnModel(62, "YESTERDAY, TODAY AND FOREVER",
    [
      new StanzaModel("Oh, how sweet the glorious message,\nSimple faith may claim;\nYesterday, today, forever,\nJesus is the same.\nStill, He loves to save the sinful,\nHeal the sick and lame;\nCheer the mourner, still the tempest;\nGlory to His name!"),
      new StanzaModel("He who was the friend of sinners,\nSeeks thee, lost one, now;\nSinner, come, and at His footstool\nPenitently bow.\nHe who said, “I’ll not condemn thee,\nGo and sin no more;”\nSpeaks to thee that word of pardon,\nAs in days of yore."),
      new StanzaModel("Oft’ on earth He healed the suff’rer\nBy His mighty hand;\nStill our sicknesses and sorrows\nGo at His command.\nHe who gave His healing virtue,\nTo a woman’s touch;\nTo the faith that claims His fullness,\nStill will give as much."),
      new StanzaModel("He who pardoned erring Peter,\nNever need’st thou fear;\nHe that came to faithless Thomas,\nAll thy doubt will clear.\nHe who let the loved disciple\nOn His bosom rest,\nBids thee still, with love as tender,\nLean upon His breast."),
      new StanzaModel("He who ‘mid the raging billows,\nWalked upon the sea;\nStill can hush our wildest tempest,\nAs on Galilee.\nHe who wept and prayed in anguish,\nIn Gethsemane,\nDrink with us each cup of trembling,\nIn our agony."),
      new StanzaModel("As of old He walked to Emmaus,\nWith them to abide;\nSo through all life’s way He walketh,\nEver near our side.\nSoon again we shall behold Him,\nHasten, Lord, the day!\nBut ‘twill still be “this same Jesus,”\nAs He went away.")
    ], "Bb",
    new ChorusModel("Yesterday, today, forever,\nJesus is the same;\nAll may change, but Jesus never!\nGlory to His name.\nGlory to His name,\nGlory to His name;\nAll may change, but Jesus never!\nGlory to His name.")
  ),
  new HymnModel(63, "THE OLD-TIME RELIGION",
    [
      new StanzaModel("It’s the old-time Holy Spirit,\nAnd the devil won't go near It,\nThat's the reason people fear It;\nBut It's good enough for me."),
      new StanzaModel("It will make you stop your lying;\nIt will save you when you're dying;\nIt will start the devil flying;\nAnd It's good enough for me."),
      new StanzaModel("It's so good I want no other,\nFor It makes me love my brother;\nAnd It brings things from under cover,\nAnd it's good enough for me."),
      new StanzaModel("(It was good in the fiery furnace…)\n(It was good for Paul and Silas …)\n(It was good for our fathers …)\n(It was good for Brother Branham …)\n(Makes me love everybody …)\n(It will do when I am dying …)\n(It will take us all to Heaven …)")
    ], "Ab",
    new ChorusModel("Give me that old-time religion,\nGive me that old-time religion,\nGive me that old-time religion,\nIt's good enough for me")
  ),
  new HymnModel(64, "GET ON BOARD",
    [
      new StanzaModel("It’s the old ship of Zion,\nIt's the old ship of Zion,\nIt's the old ship of Zion,\nGet on board, get on board."),
      new StanzaModel("It has landed my old father,\nIt has landed my old father,\nIt has landed my old father,\nGet on board, get on board.")
    ], "Ab"
  ),
  new HymnModel(65, "ON THE OTHER SHORE",
    [
      new StanzaModel("I've got a Father over yonder,\nI've got a Father over yonder,\nI've got a Father over yonder,\nOn the other shore."),
      new StanzaModel("Some bright day I'll go and see Him,\nSome bright day I'll go and see Him,\nSome bright day I'll go and see Him,\nOn the other shore."),
      new StanzaModel("Won't that be a happy meeting!\nWon't that be a happy meeting!\nWon't that be a happy meeting!\nOn the other shore."),
      new StanzaModel("That bright day may be tomorrow,\nThat bright day may be tomorrow,\nThat bright day may be tomorrow,\nOn the other shore.")
    ], "Ab"
  ),
  new HymnModel(66, "SHINE ON ME",
    [
      new StanzaModel("Shine on me, Lord, shine on me,\nLet the Light from the lighthouse shine on me;\nShine on me, Lord, shine on me,\nLet the Light from the lighthouse shine on me.")
    ], "Ab"
  ),
  new HymnModel(67, "TO BE LIKE HIM",
    [
      new StanzaModel("FROM Bethlehem's manger came forth a Stranger,\nOn earth I long to be like Him;\nMy faithful Saviour, how rich His favor!\nOn earth I long to be like Him."),
      new StanzaModel("Serene and holy, obedient, lowly,\nOn earth I long to be like Him;\nBy grace forgiven, an heir of heaven,\nOn earth I long to be like Him.")
    ], "Ab",
    new ChorusModel("To be like Jesus, to be like Jesus,\nOn earth I long to be like Him;\nAll thru life's journey from earth to glory\nI only ask to be like Him.")
  ),
  new HymnModel(68, "GREAT IS THY FAITHFULNESS",
    [
      new StanzaModel("Great is Thy faithfulness, O God my Father,\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions, they fail not;\nAs Thou hast been forever wilt be."),
      new StanzaModel("Summer and winter, and springtime and harvest,\nSun, moon and stars in their courses above,\nJoin with all nature in manifold witness.\nTo Thy great faithfulness, mercy and love."),
      new StanzaModel("Pardon for sin and peace that endureth.\nThy own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine, with ten thousand beside!")
    ], "Eb",
    new ChorusModel("Great is Thy faithfulness! Great is Thy faithfulness!\nMorning by morning new mercies I see;\nAll I have needed Thy hand hath provided;\n“Great is Thy faithful,” Lord, unto me")
  ),
  new HymnModel(69, "OPEN MY EYES, THAT I MAY SEE",
    [
      new StanzaModel("Open my eyes, that I may see\nGlimpses of truth Thou hast for me;\nPlace in my hands the wonderful key\nThat shall unclasp, and set me free."),
      new StanzaModel("Open my ears, that I may hear\nVoices of truth Thou sendest clear;\nAnd while the wave-notes fall on my ear,\nEverything false will disappear."),
      new StanzaModel("Open my mouth, and let me bear\nGladly the warm truth everywhere;\nOpen my heart, and let me prepare,\nLove with Thy Children thus to share.")
    ], "Ab",
    new ChorusModel("Silently now I wait for Thee,\nReady, my God, Thy will to see;\nOpen my eyes, illumine me,\nSpirit Divine!")
  ),
  new HymnModel(70, "HE’S EVERYTHING TO ME",
    [
      new StanzaModel("HE'S everything, He's everything to me;\nHe's everything, He's everything to me;\nFor He's my father, my mother,\nmy sister and my brother,\nHe's everything to me.")
    ], "F"
  ),
  new HymnModel(71, "I KNOW IT WAS THE BLOOD",
    [
      new StanzaModel("I KNOW it was the Blood, I know it was the Blood,\nI know it was the Blood for me;\nOne day when I was lost, He died upon the cross,\nI know it was the Blood for me.")
    ], "F"
  ),
  new HymnModel(72, "OH, WON’T YOU WATCH?",
    [
      new StanzaModel("OH, won't you watch with me one hour,\nWhile I go yonder, while I go yonder?\nOh, won't you watch with me one hour,\nWhile I go yonder and pray?")
    ], "Bb"
  ),
  new HymnModel(73, "I’M OVERCOMING",
    [
      new StanzaModel("I'M overcoming, I'm overcoming,\nI'm overcoming, I'm overcoming;\nFor I love Jesus, He's my Saviour,\nAnd He smiles and He loves me too.")
    ], "Bb"
  ),
  new HymnModel(74, "SPIRIT OF THE LIVING GOD",
    [
      new StanzaModel("Spirit of the living God, fall fresh on me;\nSpirit of the living God, fall fresh on me;\nBreak me! Melt me! Mould me! Fill me!\nSpirit of the Living God, fall fresh on me.")
    ], "F",
    new ChorusModel("F")
  ),
  new HymnModel(75, "THE BEAUTY OF JESUS",
    [
      new StanzaModel("Let the beauty of Jesus be seen in me,\nAll His wonderful passion and purity:\nO Thou Spirit divine, all my nature refine,\nTill the beauty of Jesus is seen in me.")
    ], "Eb"
  ),
  new HymnModel(76, "SHUT IN WITH GOD",
    [
      new StanzaModel("Shut in with God in the secret place,\nThere in the Spirit beholding His face,\nGaining new power to run in the race,\nI love to be shut in with God.")
    ], "C"
  ),
  new HymnModel(77, "TURN YOUR EYES UPON JESUS",
    [
      new StanzaModel("O soul, are you weary and troubled?\nNo light in the darkness you see?\nThere's light for a look at the Saviour,\nAnd life more abundant and free!"),
      new StanzaModel("Through death into life everlasting\nHe passed, and we follow Him there;\nOver us sin no more hath dominion,\nFor more the conqu'rors we are!"),
      new StanzaModel("His Word shall not fail you, He promised;\nBelieve Him, and all will be well;\nThen go to a world that is dying,\nHis perfect salvation to tell!")
    ], "F",
    new ChorusModel("Turn your eyes upon Jesus,\nLook full in His wonderful face;\nAnd the things of earth will grow strangely dim\nIn the light of His glory and grace.")
  ),
  new HymnModel(78, "WE’LL GIVE THE GLORY TO JESUS",
    [
      new StanzaModel("We'll give the glory to Jesus,\nAnd tell of His love, and tell of His love;\nWe'll give the glory to Jesus,\nAnd tell of His wonderful love.")
    ], "Bb"
  ),
  new HymnModel(79, "SWEEP OVER MY SOUL",
    [
      new StanzaModel("Sweep over my soul, sweep over my soul,\nSweet Spirit, sweep over my soul;\nMy rest is complete while I sit at your feet;\nSweet Spirit, sweep over my soul.")
    ], "Ab"
  ),
  new HymnModel(80, "FRIENDSHIP WITH JESUS",
    [
      new StanzaModel("A friend of Jesus, O what bliss,\nThat one so vile as I\nShould ever have a friend like this\nTo lead me to the sky."),
      new StanzaModel("A friend when other friendships cease,\nA friend when others fail,\nA friend who gives me joy and peace,\nA friend when foes assail."),
      new StanzaModel("A friend when sickness lays me low,\nA friend when death draws near,\nA friend as through the vale I go,\nA friend to help and cheer."),
      new StanzaModel("A friend when life's short race is o'er\nA friend when earth is past,\nA friend to meet on heaven's shore,\nA friend when home at last.")
    ], "Eb",
    new ChorusModel("Friendship with Jesus,\nFellowship divine,\nO what blessed, sweet communion,\nJesus is a friend of mine.")
  ),
  new HymnModel(81, "JESUS IS THE ONE",
    [
      new StanzaModel("When the day is dark before you,\nAnd the clouds are hanging low,\nThere is One who watches o'er you,\nEverywhere that you may go."),
      new StanzaModel("O if you are sad and lonely,\nLife is but an empty tomb,\nBreathe a prayer to Jesus only,\nHe will drive away the gloom."),
      new StanzaModel("When you come to cross the river,\nHe will be your Friend and guide;\nYou can live with Him forever,\nOver on the other side."),
      new StanzaModel(""),
      new StanzaModel("")
    ], "Ab",
    new ChorusModel("Jesus is the one, yes, He's the only one,\nLet Him have His way until the day is done;\nWhen He speaks, you know the clouds\nwill have to go, Just because He loves you so.")
  ),
  new HymnModel(82, "HE’S COMING AGAIN",
    [
      new StanzaModel("Would You be numbered as one of His fold?\nWould you be numbered as one of His fold?\nBe spotless within, be watching and\nwaiting that sight to behold;\nHe's coming again.")
    ], "F"
  ),
  new HymnModel(83, "THE LILY OF THE VALLEY",
    [
      new StanzaModel("I've found a friend in Jesus, He's everything to me.\nHe's the fairest of ten thousand to my soul;\nThe Lily of the Valley in Him alone I see,\nAll I need to cleanse and make me fully whole.\nIn sorrow He's my comfort, in trouble He's my stay,\nHe tells me every care on Him to roll. Hallelujah!\nHe's the Lily of the Valley, the Bright and morning star,\nHe's the fairest of ten thousand to my soul."),
      new StanzaModel("He all my griefs has taken, and all my sorrow borne;\nIn temptation He's my strong and mighty tow'r,\nI have all for Him forsaken, and all my idols torn\nFrom my heart, and now He keeps me by His power.\nThough all the world forsake me, and Satan tempt me sore,\nThrough Jesus I shall safely reach the goal, Hallelujah!\nHe's the Lily of the Valley, the Bright and morning star,\nHe's the fairest of ten thousand to my soul."),
      new StanzaModel("He'll never, never leave me, nor yet forsake me here,\nWhile I live by faith and do His blessed will;\nA wall of fire about me, I've nothing now to fear;\nWith His manna He my hungry soul shall fill.\nThen sweeping up to glory, we'll see His blessed face,\nWhere rivers of delight shall ever roll. Hallelujah!\nHe's the Lily of the Valley, the Bright and Morning star,\nHe's the fairest of ten thousand to my soul.")
    ], "F"
  ),
  new HymnModel(84, "HE CARETH FOR YOU",
    [
      new StanzaModel("He careth for you,\nHe careth for you;\nThrough sunshine or shadow,\nHe careth for you.")
    ], "F"
  ),
  new HymnModel(85, "WHEN I GET TO THE END OF THE WAY",
    [
      new StanzaModel("The Sands have been washed in the footprints\nOf the Stranger on Galilee's shore,\nAnd the voice that subdued the rough billows,\nWill be heard in Judea no more.\nBut the path of that lone Galilean\nWith joy I will follow today.\nAnd the toils of the road will seem nothing,\nWhen I get to the end of the way,\nAnd the toils of the road will seem nothing,\nWhen I get to the end of the way."),
      new StanzaModel("There are so many hills to climb upward,\nI often am looking for rest,\nBut He who appoints me my pathway,\nKnows just what is needful and best.\nI know in His word He hath promised\nThat my strength, “it shall be as my day.”\nAnd the toils of the road will seem nothing,\nWhen I get to the end of the way,\nAnd the toils of the road will seem nothing,\nWhen I get to the end of the way."),
      new StanzaModel("He loves me too well to forsake me\nOr give me one trial too much.\nAll His people have been dearly purchased,\nAnd Satan can never claim such.\nBy and by I shall see Him and praise Him,\nIn the city of unending day.\nAnd the toils of the road will seem nothing,\nWhen I get to the end of way,\nAnd the toils of the road will seem nothing,\nWhen I get to the end of the way."),
      new StanzaModel("When the last feeble step has been taken.\nAnd the gates of that city appear,\nAnd the beautiful songs of the angels\nFloat out on my listening ear.\nWhen all that now seems so mysterious\nWill be bright and as clear as the day,\nThen the toils of the road will seem nothing,\nWhen I get to the end of the way,\nThen the toils of the road will seem nothing,\nWhen I get to the end of the way.")
    ], "C"
  ),
  new HymnModel(86, "ROOM AT THE CROSS FOR YOU ",
    [
      new StanzaModel("The cross upon which Jesus died\nIs a shelter in which we can hide,\nAnd its grace so free is sufficient for me,\nAnd deep is its fountain; as wide as the sea."),
      new StanzaModel("Though millions have found Him a friend\nAnd have turned from the sins they have sinned,\nThe Saviour still waits to open the gates,\nAnd welcome a sinner before it's too late."),
      new StanzaModel("The hand of my Saviour is strong\nAnd the love of my Saviour is long,\nThrough sunshine or rain, through loss or in gain,\nThe blood flows from Calv'ry to cleanse every stain.")
    ], "Ab",
    new ChorusModel("There's room at the cross for you,\nThere's room at the cross for you,\nThough millions have come, there's still\nroom for one,\nYes, there's room at the cross for you.")
  ),
  new HymnModel(87, "WHEN THE ROLL IS CALLED",
    [
      new StanzaModel("When the trumpet of the Lord shall sound,\nAnd time shall be no more,\nAnd the morning breaks eternal, bright and fair;\nWhen the saved of earth shall gather over\non the other shore,\nAnd the roll is called up yonder, I'll be there."),
      new StanzaModel("On that bright and cloudless morning when\nthe dead in Christ shall rise,\nAnd the glory of His resurrection share;\nWhen His chosen ones shall gather to their\nhome beyond the skies,\nAnd the roll is called up yonder, I'll be there."),
      new StanzaModel("Let us labor for the Master from the dawn\ntill setting sun,\nLet us talk of all His wondrous love and care;\nThen when all of life is over, and our work\non earth is done,\nAnd the roll is called up yonder, I'll be there.")
    ], "Ab",
    new ChorusModel("When the roll is called up yonder,\nWhen the roll is called up yonder,\nWhen the roll is called up yonder,\nWhen the roll is called up yonder, I'll be there.")
  ),
  new HymnModel(88, "THE HAVEN OF REST",
    [
      new StanzaModel("MY Soul in sad exile was out on life's sea,\nSo burdened with sin and distressed,\nTill I heard a sweet voice saying,\n“Make Me your choice;”\nAnd I entered the “Haven of Rest!”"),
      new StanzaModel("I yielded myself to His tender embrace,\nAnd faith taking hold of the Word,\nMy fetters fell, and I anchored my soul;\nThe Haven of Rest is my Lord."),
      new StanzaModel("The song of my soul, since the Lord made me whole,\nHas been the old story, so blest,\nOf Jesus, who'll save whosoever will have\nA home in the “Haven of Rest!”"),
      new StanzaModel("How precious the thought that we all may recline,\nLike John, the beloved and blest,\nOn Jesus strong arm, where no tempest can Harm,\nSecure in the “Haven of Rest!”"),
      new StanzaModel("O come to the Saviour,\nHe patiently waits\nTo save by His power divine;\nCome, anchor your soul in the haven of rest,\nAnd say, “My Beloved is mine.”")
    ], "Ab",
    new ChorusModel("I've anchored my soul in the heaven of rest,\nI'll sail the wild seas no more;\nThe tempest may sweep o'er the wild, Stormy deep,\nIn Jesus I'm safe evermore.")
  ),
  new HymnModel(89, "MUST JESUS BEAR THE CROSS ALONE?",
    [
      new StanzaModel("Must Jesus bear the cross alone,\nAnd all the world go free?\nNo, there's a cross for every one,\nAnd there's a cross for me."),
      new StanzaModel("The consecrated cross I'll bear,\nTill death shall set me free,\nAnd then go home my crown to wear,\nFor there's a crown for me."),
      new StanzaModel("Upon the crystal pavement, down\nAt Jesus' pierced feet,\nWith joy I'll cast my golden crown,\nAnd His dear Name repeat."),
      new StanzaModel("O precious cross! O glorious crown!\nO resurrection day!\nYe angels from the stars come down\nAnd bear my soul away.")
    ], "Ab"
  ),
  new HymnModel(90, "BLESSED BE THE NAME",
    [
      new StanzaModel("All praise to Him who reigns above\nIn majesty supreme;\nWho gave His Son for man to die,\nThat He might man redeem."),
      new StanzaModel("His name above all names shall stand,\nExalted more and more,\nAt God the Father's own right hand,\nWhere angel hosts adore."),
      new StanzaModel("Redeemer, Saviour, Friend of men\nOnce ruined by the fall;\nThou hast devised salvation's plan,\nFor thou hast died for all."),
      new StanzaModel("His name shall be the Counselor,\nThe mighty Prince of Peace,\nOf all earth's kingdoms Conqueror,\nWhose reign shall never cease.")
    ], "Ab",
    new ChorusModel("Blessed be the name, blessed be the name,\nBlessed be the name of the Lord;\nBlessed be the name, blessed be the name,\nBlessed be the name of the Lord.\n(Jesus is the Name …)\n(Magnify His Name …)\n(There's Healing in the Name…)\n(Sing glory to His Name…)")
  ),
  new HymnModel(91, "I’M GOING THROUGH",
    [
      new StanzaModel("Lord, I have started to walk in the light,\nShining upon me from heaven so bright;\nI bade the world and its follies adieu,\nI've started in Jesus and I'm going through."),
      new StanzaModel("O there are many who start in the race,\nBut with the light refuse to keep pace;\nOthers accept it because it is new,\nBut not very many expect to go through"),
      new StanzaModel("I'd rather walk with Jesus alone,\nHave for a pillow, like Jacob, a stone;\nLiving each moment with His face in view,\nThan shrink from my pathway and fail to go through."),
      new StanzaModel("O brother, now will you take up the cross?\nGive up the world and count it as dross;\nSell all thou hast and give to the poor,\nThen go through with Jesus and those who endure.")
    ], "Ab",
    new ChorusModel("I'm going through, yes, I'm going through,\nI'll pay the price whatever others do,\nI'll take the way with the Lord's despised few,\nI'm going through, Jesus, I'm going through.")
  ),
  new HymnModel(92, "SPEAK, MY LORD",
    [
      new StanzaModel("Hear the Lord of harvest sweetly calling,\n“Who will go and work for Me today?\nWho will bring to Me the lost and dying?\nWho will point them to the narrow way?”"),
      new StanzaModel("When the coal of fire touched the prophet,\nMaking him as pure as pure can be,\nWhen the voice of God, said “Who'll go for us?”\nThen he answered, “Here I am, send me.”"),
      new StanzaModel("Millions now in sin and shame are dying;\nListen to their sad and bitter cry;\nHasten, brother, hasten to the rescue;\nQuickly answer, “Master, here am I.”"),
      new StanzaModel("Soon the time for reaping will be over;\nSoon we'll gather for the harvest home;\nMay the Lord of harvest smile upon us,\nMay we hear His blessed, “Child, well done.”")
    ], "G",
    new ChorusModel("Speak, my Lord speak, my Lord,\nSpeak, and I'll be quick to answer Thee;\nSpeak, my Lord, speak, my Lord,\nSpeak, and I will answer, “Lord send me.”")
  ),
  new HymnModel(93, "THE LOVE OF GOD",
    [
      new StanzaModel("The Love of God is greater far\nThan tongue or pen can ever tell;\nIt goes beyond the highest star,\nAnd reaches to the lowest hell.\nThe guilty pair, bowed down with care,\nGod gave His son to win;\nHis erring child He reconciled,\nAnd pardoned from his sin."),
      new StanzaModel("When hoary time shall pass away,\nAnd earthly thrones and kingdoms fall;\nWhen men who here refuse to pray,\nOn rocks and hill and mountains call;\nGod's love, so sure, shall still endure,\nAll measureless and strong;\nRedeeming grace to Adam's race,\nThe saints and angels' song."),
      new StanzaModel("Could we with ink the ocean fill,\nAnd were the skies of parchments made;\nWere every stalk on earth a quill,\nAnd every man a scribe by trade;\nTo write the love of God above\nWould drain the ocean dry;\nNor could the scroll contain the whole,\nThough stretched from sky to sky.")
    ], "Eb",
    new ChorusModel("Oh, love of God, how rich and pure!\nHow measureless and strong!\nIt shall forevermore endure,\nThe saints and angels song.")
  ),
  new HymnModel(94, "THE MEETING IN THE AIR",
    [
      new StanzaModel("You have heard of little Moses in the bulrush,\nYou have heard of fearless David and his sling;\nYou have heard the story told of dreaming Joseph,\nAnd of Jonah and the whale you often sing.\nThere are many, many others through the Bible,\nI should like to meet them all, I do declare!\nBy and by the Lord will surely let us meet them\nAt the meeting in the air."),
      new StanzaModel("Many things will there be missing, in that meeting;\nFor the mourners bench will have no place at all;\nThere will never be a sermon preached to sinners,\nFor the sinner had refused to heed the call.\nThere will be no mourning over wayward loved ones,\nThere will be no lonely nights of pleading prayer;\nAll our burdens and our anguish will be lifted\nAt the meeting in the air."),
      new StanzaModel("There the doubters will be missing altogether,\nAll the skeptics will be absent on that day;\nThere will be no grumblers present to disturb us,\nAnd the Achans will be busy far away.\nThere the saints will have His “seal upon their foreheads,”\nDressed in raiment none but ransomed ones can wear;\nAll who have the wedding garments will be present\nAt the meeting in the air.")
    ], "Ab",
    new ChorusModel("There is going to be a meeting in the air,\nIn the sweet, sweet by and by;\nI am going to meet you, meet you there\nIn that home beyond the sky;\nSuch singing you will hear, never heard by mortal ear,\n'Twill be glorious, I do declare!\nAnd God's own Son will be the leading One\nAt the meeting in the air.")
  ),
  new HymnModel(95, "IT’S DRIPPING WITH BLOOD ",
    [
      new StanzaModel("The first one to die for this Holy Ghost plan,\nWas John the Baptist, but he died like a man;\nThen came the Lord Jesus, they crucified Him,\nHe taught that the Spirit would save men from sin."),
      new StanzaModel("There was Peter and Paul, and John the divine,\nThey gave up their lives so this Gospel could shine;\nThey mingled their blood, like the prophets of old,\nSo the true Word of God could honest be told."),
      new StanzaModel("Then they stoned Stephen, he preached against sin,\nHe made them so angry, they dashed his head in;\nBut he died in the Spirit, and gave up the ghost,\nAnd went to join others, in that life-giving host."),
      new StanzaModel("There’s souls under the altar, crying, “How long?”\nFor the Lord to punish those who’ve done wrong;\nBut there’s going to be more who’ll give their life’s blood\nFor this Holy Ghost Gospel and its crimson flood.")
    ], "F",
    new ChorusModel("It’s dripping with blood, yes, it’s dripping with blood.\nThis Holy Ghost Gospel is dripping with blood,\nThe blood of disciples who died for the Truth,\nThis Holy Ghost Gospel is dripping with blood.")
  ),
  new HymnModel(96, "HOLY, HOLY, HOLY, LORD OF HOSTS",
    [
      new StanzaModel("Holy, Holy, Holy, Lord God of hosts.\nHeaven and earth are full of Thee,\nHeaven and earth are praising Thee,\nO Lord Most High.")
    ], "F"
  ),
  new HymnModel(97, "THIS OLD WORLD CAN NEVER HOLD ME",
    [
      new StanzaModel("This old world can never hold me,\nAny moment I'll be gone,\nFor I've made my consecration,\nAnd I have the wedding garment on")
    ], "Ab"
  ),
  new HymnModel(98, "OUR LORD’S RETURN TO EARTH AGAIN",
    [
      new StanzaModel("I am watching for the coming of the glad\nMillennial day,\nWhen our blessed Lord shall come and catch\nHis waiting Bride away;\nOh! my heart is filled with rapture as I labor,\nwatch and pray,\nFor our Lord is coming back to earth again."),
      new StanzaModel("Jesus' coming back will be the answer to\nearth's sorr'wing cry,\nFor the knowledge of the Lord shall fill the\nearth and sea and sky;\nGod shall take away all sickness and the suff'rer's tears will dry,\nWhen our Saviour shall come back to earth again."),
      new StanzaModel("Yes, the ransomed of the Lord shall come to\nZion then with joy,\nAnd in all His holy mountain nothing hurts or shall destroy;\nPerfect peace shall reign in every heart, and\nlove without alloy,\nAfter Jesus shall come back to earth again."),
      new StanzaModel("Then the sin and sorrow, pain and death of\nthis dark world shall cease,\nIn a glorious reign with Jesus of a thousand years of peace;\nAll the earth is groaning, crying for that day of sweet release,\nFor our Jesus to come back to earth again.")
    ], "G",
    new ChorusModel("Oh! Our Lord is coming back to earth again,\nYes, our Lord is coming back to earth again,\nSatan will be bound a thousand years,\nwe'll have no tempter then,\nAfter Jesus shall come back to earth again.")
  ),
  new HymnModel(99, "I SHALL KNOW HIM",
    [
      new StanzaModel("Standing somewhere in the shadows you'll find Jesus,\nHe's the One who always cares and understands;\nStanding somewhere in the shadows you will find Him,\nAnd you'll know Him by the nail prints in\nHis hands.")
    ], "F",
    new ChorusModel("I shall know Him, I shall know Him,\nAs redeemed by His side I shall stand;\nI shall know Him, I shall know Him\nBy the prints of the nails in His hands.")
  ),

  new HymnModel(100, "THEN JESUS CAME",
    [
      new StanzaModel("One sat alone beside the highway begging,\nHis eyes were blind, the light he could not see;\nHe clutched his rags and shivered in the shadows,\nThen Jesus came and bade his darkness flee."),
      new StanzaModel("When Jesus comes the tempter's pow'r is broken;\nWhen Jesus comes the tears are wiped away.\nHe takes the gloom and fills the life with glory,\nFor all is changed when Jesus comes to stay."),
      new StanzaModel("Unclean! Unclean! The leper cried in torment,\nThe deaf, the dumb, in helplessness stood near;\nThe fever raged, disease had gripped its victim,\nThen Jesus came and cast out every fear."),
      new StanzaModel("So men today have found the Saviour able,\nThey could not conquer passion, lust and sin;\nTheir broken hearts had left them sad and lonely,\nThen Jesus came and dwelt Himself within.")
    ], "C",
    new ChorusModel("When Jesus comes the tempter's pow'r is broken;\nWhen Jesus comes the tears are wiped away.\nHe takes the gloom and fills the life with glory,\nFor all is changed when Jesus comes to stay.")
  ),
  new HymnModel(101, "WHEN I SURVEY THE CROSS",
    [
      new StanzaModel("When I survey the wondrous cross\nOn which the Prince of glory died,\nMy richest gain I count but loss,\nAnd pour contempt on all my pride."),
      new StanzaModel("Forbid it, Lord, that I should boast,\nSave in the death of Christ, my God;\nAll the vain things that charm me most,\nI sacrifice them to His blood."),
      new StanzaModel("See, from His head, His hands His feet,\nSorrow and love flow mingled down;\nDid e'er such love and sorrow meet,\nOr thorns compose so rich a crown?"),
      new StanzaModel("Were the whole realm of nature mine,\nThat were a present far too small;\nLove so amazing, so divine,\nDemands my soul, my life, my all!")
    ], "F",
    new ChorusModel("I'm going home,\nI'm going home,\nI'm going home\nNever to die, Never to die, Never to die,\nI'm going home,\nNever to die.")
  ),
  new HymnModel(102, "THE WATER WAY",
    [
      new StanzaModel("Long ago the maids drew water\nIn the evening time, they say,\nOne day Isaac sent his servant\nTo stop Rebekah on her way.\n“My master sent me here to tell thee;\nSee these jewels rich and rare;\nWould'st thou not his lovely bride be\nIn that country over there?”"),
      new StanzaModel("So God's servants come to tell you\nOf a Bridegroom in the sky,\nLooking for a holy people\nTo be His bride soon, by and by;\nHe sends to us refreshing water\nIn this wondrous latter day;\nThey who really will be raptured\nMust go thru the water way."),
      new StanzaModel("Are you on your way to ruin,\nCumbered with a load of care?\nSee the quick work God is doing\nThat so His glory you may share.\nAt last the faith He once delivered\nTo the saints, is ours today;\nTo get in the Church triumphant\nYou must go the water way."),
      new StanzaModel("Have you looked and often wondered\nWhy the power is slack today?\nWill you stay in that back number\nAnd go on in the man-made way?\nO saints who never have been buried\nIn the blessed name of God,\nLet the truth now sanctify you;\nIt's the way apostles trod.")
    ], "F",
    new ChorusModel("It shall be light in the evening time,\nThe path to glory you will surely find;\nThru the water way, It is the light today,\nBuried in the precious Name of Jesus Christ.\nYoung and old repent of all your sin,\nThe Holy Ghost will surely enter in;\nThe evening Light has come,\nIt is a fact that God and Christ are one.")
  ),
  new HymnModel(103, "DON’T FORGET PRAYER",
    [
      new StanzaModel("Don’t forget the family prayer,\nJesus wants to meet you there;\nHe will take your every care,\nOh, don't forget the family prayer.")
    ], "F"
  ),
  new HymnModel(104, "STAND ON THAT ROCK",
    [
      new StanzaModel("Crying “Holy” unto the Lord,\nCrying “Holy” unto the Lord,\nIf I could, I surely would\nStand on that rock where Moses stood.")
    ], "F"
  ),
  new HymnModel(105, "OH, THAT MAN FROM GALILEE",
    [
      new StanzaModel("In a manger long ago, I know it's really so,\nA Babe was born to save men from their sin.\nJohn saw Him on the shore, the Lamb\nforevermore,\nOh, Christ, the Crucified of Calvary."),
      new StanzaModel("The publican went to pray in the temple there one day,\nHe cried, “O Lord, be merciful to me!”\nHe was forgiven of every sin, and a deep peace placed within;\nHe said, “Come see this Man from Galilee.”"),
      new StanzaModel("The lame was made to walk, the dumb was made to talk,\nThat power was spoken with love upon the sea;\nThe blind was made to see, I know it could only be\nThe mercy of that Man from Galilee."),
      new StanzaModel("Nicodemus came by night, to know the way of right,\nHe asked the Son of man what must he do.\nThese words He said to him, “Ye must be born again,”\nBy the Spirit of that Man from Galilee."),
      new StanzaModel("The woman at the well, He all her sins did tell,\nHow five husbands she had at that time.\nShe was forgiven of every sin, and a deep peace came within;\nThen she cried, “Come see that Man from Galilee!”")
    ], "F",
    new ChorusModel("Oh, I love that Man from Galilee, from Galilee,\nFor He's done so very much for me.\nHe's forgiven all my sins, placed the Holy Ghost within;\nOh, I love, I love that Man from Galilee.")
  ),
  new HymnModel(106, "REACH OUT, TOUCH THE LORD",
    [
      new StanzaModel("Reach out and touch the Lord as He passes by,\nYou'll find He's not too busy to hear your heart's cry;\nHe's passing by this moment, your needs to supply,\nReach out and touch the Lord as He goes by.")

    ], "F"
  ),
  new HymnModel(107, "IN THAT CITY, LAMB IS LIGHT",
    [
      new StanzaModel("There's a country far beyond the starry Sky,\nThere's a city where there never comes a night;\nIf we're faithful we shall go there by and by,\nIt's the city where the Lamb is the light."),
      new StanzaModel("Here we have our days of sunshine, but we know\nThat the sun which shines upon us now so bright\nWill be changed to clouds and rain until we go\nTo the city where the Lamb is the light."),
      new StanzaModel("There the flowers bloom forever and the day\nShall be one eternal day without a night;\nAnd our tears shall be forever wiped away,\nIn that city where the Lamb is the light."),
      new StanzaModel("Here we have our disappointments all the while,\nAnd our fondest hopes but meet with bitter blight;\nThough by night we weep, the morning brings a smile,\nIn that city where the Lamb is the light."),
      new StanzaModel("Then let sunlight fade, let twilight bring its gloom,\nNot a shadow can my blissful soul affright;\nFor I know that up in heaven there is room,\nIn that city where the Lamb is the light.")
    ], "Bb",
    new ChorusModel("In that city where the Lamb is the light\nThe city where there cometh no night;\nI've a mansion over there, and when free from toil and care,\nI am going where the Lamb is the light.")
  ),
  new HymnModel(108, "JESUS SET ME FREE",
    [
      new StanzaModel("I'm so glad Jesus set me free,\nI'm so glad Jesus set me free,\nI'm so glad Jesus set me free,\nGlory, hallelujah, Jesus set me free."),
      new StanzaModel("(I'm so glad Jesus lifted me …)\n(I'm on my way to Heaven, shouting victory …)\n(Satan had me bound, but Jesus set me free …)")
    ], "Ab"
  ),
  new HymnModel(109, "WHEN I TAKE MY VACATION",
    [
      new StanzaModel("Here So many are taking vacation,\nTo the mountains, the lakes or the sea;\nWhere they rest from their cares and their worries,\nWhat a wonderful time that must be!\nBut it seems not my lot to be like them,\nI must toil thru the heat and the cold,\nSeeking out the lost sheep on the mountains,\nBringing wanderers back to the fold."),
      new StanzaModel("Now some day I shall take my vacation\nTo the city John tells us about;\nWith its foundation walls all so precious.\nWhere from gladness of heart I shall shout!\nO no sights ever witnessed by mortals.\nCan compare with the glories up there\nI shall spend my vacation with Jesus,\nIn the place He went on to prepare."),
      new StanzaModel("There the weather will always be perfect\nNot a cloud shall sweep over the sky;\nAnd no earthquakes or cyclones shall threaten,\nIn the land of the “Sweet by and by”;\nSoon there's going to be an excursion,\nI am booked for a ride in the air,\nYou're invited to share my vacation,\nAnd the feast with our Bridegroom to share."),
      new StanzaModel("Here on earth when we take our vacation,\nWe return to our homes by and by;\nWhen I take my vacation in heaven,\nIn those mansions of gold in the sky,\nI shall dwell with my Savior forever,\nWith Him sit on His Heavenly Throne;\nAll the days will be one, long vacation,\nWhen my Savior takes me to His home.")
    ], "Bb",
    new ChorusModel("When I take my vacation in heaven,\nWhat a wonderful time that will be;\nHearing concerts by the heavenly Chorus,\nAnd the face of my Saviour I'll see;\nSitting down by the banks of the river;\n„Neath the shade of the ever green tree,\nI shall rest from my burdens forever,\nWon't you spend your vacation with me.")
  ),
  new HymnModel(110, "OH, IT IS JESUS",
    [
      new StanzaModel("Oh, it is Jesus! Yes, it is Jesus!\nIt is Jesus in my soul;\nFor I have touched the hem of His garment,\nAnd His blood has made me whole."),
      new StanzaModel("I tried as much as I could, but it seems like\nnothing could Do me any good when I heard of Jesus,\nHe was passing by then I decided to give Him my heart.")
    ], "C"
  ),
  new HymnModel(111, "WHAT THEN?",
    [
      new StanzaModel("When the great plants of our cities have turned\nout their last finished work,\nWhen our merchants have sold their last yard of\ngoods and dismissed the last tired clerk,\nWhen our banks have raked in their last dollar\nand paid the last dividends,\nWhen the Judge of the earth says, “closed for the\nnight,” and asks for a balance –\nWhat Then?"),
      new StanzaModel("When the choir has sung its last song and the\npreacher has said his last prayer,\nWhen the people have heard their last sermon and\nthe sound has died out in the air,\nWhen the Bible lies closed on the altar and the\npews are all empty of folks,\nAnd each one stands facing his record and the\ngreat Book is opened – What Then?"),
      new StanzaModel("When the actors have played their last drama and\nthe mimic has made his last fun,\nWhen the film has flashed its last film and the\nbillboard displayed its last run,\nWhen the crowds seeking pleasure have vanished\nand all the liquor stores and beer joints have been closed,\nAnd the salesman sold his last drink and gone out\nin the darkness,\nWhen the trumpet of ages is sounded and we\nstand before Him – What Then?"),
      new StanzaModel("When the bugle call sinks into silence and the\nlong marching columns stand still,\nAnd the captain repeat his last orders,\nAnd the flag has been hauled from the mast,\nAnd the wounded afield checked in and a world\nThat rejects its Saviour is asked for a reason – What Then?")
    ], "F",
    new ChorusModel("What then? What then?\nWhen the great Book is opened, what then?\nWhen the ones that's rejecting this Message tonight,\nWill be asked to give a reason – What Then?")
  ),
  new HymnModel(112, "FAITH IN JEHOVAH",
    [
      new StanzaModel("Faith in the Father, faith in the Son,\nFaith in the Holy Ghost, these three are One;\nDemons will tremble, and sinners awake;\nFaith in Jehovah makes anything shake.")
    ], "F"
  ),
  new HymnModel(113, "LEAVE IT THERE",
    [
      new StanzaModel("If the world from you withhold of its silver\nAnd its gold,\nAnd you have to get along with meager fare,\nJust remember, in His Word, how He feeds\nthe little bird;\nTake your burden to the Lord and leave it there."),
      new StanzaModel("If your body suffers pain and your health you can't regain,\nAnd your soul is almost sinking in despair,\nJesus knows the pain you feel, He can save and He can heal;\nTake your burdens to the Lord and leave it there."),
      new StanzaModel("When your enemies assail and your heart begins to fail,\nDon't forget that God in Heaven answers prayer;\nHe will make a way for you and will lead you safely through;\nTake your burden to the Lord and leave it there."),
      new StanzaModel("When your youthful days are gone and old age is stealing on,\nAnd your body bends beneath the weight of care;\nHe will never leave you then, He'll go with you to the end;\nTake your burden to the Lord and leave it there.")
    ], "G",
    new ChorusModel("Leave it there, leave it there,\nTake your burden to the Lord and leave it there;\nIf you trust and never doubt, He will surely\nbring you out;\nTake your burden to the Lord and leave it there.")
  ),
  new HymnModel(114, "I CAN, I WILL, I DO BELIEVE",
    [
      new StanzaModel("I can, I will, I do believe;\nI can, I will, I do believe;\nI can, I will, I do believe\nThat Jesus heals me now."),
      new StanzaModel("(I'm trusting only in the Lord …)")
    ], "Ab"
  ),
  new HymnModel(115, "ISN’T HE WONDERFUL!",
    [
      new StanzaModel("Isn’t He wonderful, wonderful, Wonderful?\nIsn't Jesus my Lord wonderful?\nEyes have seen, ears have heard\nWhat's recorded in God's word;\nIsn't Jesus my Lord wonderful?")
    ], "Bb"
  ),
  new HymnModel(116, "THE LIFEBOAT",
    [
      new StanzaModel("We’re floating down the stream of time,\nWe have not long to stay;\nThe stormy clouds of darkness\nWill turn to brightest day,\nThen let us all take courage,\nFor we're not left alone;\nThe lifeboat soon is coming\nTo gather the Jewels home."),
      new StanzaModel("Sometimes the Devil tempts me,\nAnd says it's all in vain\nTo try to live a Christian life\nAnd walk in Jesus' name;\nBut then we hear the Master say,\n“I'll lend you a helping hand,\nAnd if you'll only trust Me,\nI'll guide you to that land.”"),
      new StanzaModel("The lifeboat soon is coming,\nBy eyes of faith I see\nAs she sweeps through the waters\nTo rescue you and me,\nAnd land us safely in the port\nWith friends we love so dear.\n“Get ready,” cries the Captain;\n“Oh, look, she's almost here.”"),
      new StanzaModel("Oh, now's the time to get on board,\nWhile she is passing by;\nBut if you stand and wait too long,\nYou shall forever die;\nThe fare is paid for one and all,\nThe captain bids you come,\nAnd get on board the lifeboat,\nShe'll carry you safely home.")
    ], "G",
    new ChorusModel("Then cheer, my brother, cheer,\nOur trials will soon be o'er,\nOur loved ones we shall meet, shall meet,\nUpon the golden shore.\nWe're pilgrims and we're strangers here,\nWe're seeking a city to come,\nThe lifeboat soon is coming,\nTo gather the Jewels home.")
  ),
  new HymnModel(117, "IT SHALL FLOW LIKE A RIVER",
    [
      new StanzaModel("It shall flow like a river, It shall fall like the rain,\nIt shall rise as the dew in morning o'er the plain;\nFor the knowledge of the Lord shall fill all the earth\nWhen the Spirit of the Lord shall fall."),
      new StanzaModel("Flow, river, flow; flow, river, flow;\nFlow out through the nations wherever man may go;\nCause life to spring forth, that all men may know\nThat You're the river of the Spirit;\nOh, flow, river, flow.")
    ], "C"
  ),
  new HymnModel(118, "THE GREAT JUDGMENT",
    [
      new StanzaModel("I dreamed that the great judgment morning\nHad dawned, and the trumpet had blown;\nI dreamed that the nations had gathered\nTo judgment before the white throne;\nFrom the throne came a bright shining angel,\nAnd stood on the land and the sea,\nAnd swore with his hand raised to heaven,\nThat time was no longer to be."),
      new StanzaModel("The rich man was there, but his money\nHad melted and vanished away;\nA pauper he stood in the judgment,\nHis debts were too heavy to pay;\nThe great man was there, but his greatness,\nWhen death came, was left far behind.\nThe angel that opened the records,\nNot a trace of his greatness could find."),
      new StanzaModel("The widow was there with the orphans,\nGod heard and remembered their cries;\nNo sorrow in heaven forever,\nGod wiped all the tears from their eyes;\nThe gambler was there and the drunkard,\nAnd the man that had sold them the drink,\nWith the people who gave him the license,\nTogether in hell they did sink."),
      new StanzaModel("The moral man came to the judgment,\nBut his self-righteous rags would do not;\nThe men who had crucified Jesus\nHad passed off as moral men too;\nThe soul that had put off salvation,\n“Not tonight; I'll get saved by and by,\nNo time now to think of religion!”\nAt last they had found time to die.")
    ], "C",
    new ChorusModel("And O, what a weeping and wailing,\nAs the lost were told of their fate;\nThey cried for the rocks and the mountains,\nThey prayed, but their prayers were too late.")
  ),
  new HymnModel(119, "I HAVE CROSSED RIVEN VEIL",
    [
      new StanzaModel("I've believed the true report,\nHallelujah to the Lamb,\nI have passed the outer court, O glory be to God,\nI am all on Jesus' side on the altar sanctified,\nTo the world and sin I've died,\nHallelujah to the Lamb."),
      new StanzaModel("I'm a king and priest to God,\nHallelujah to the Lamb,\nBy the cleansing of the Blood,\nO glory be to God,\nBy the Spirit's pow'r and Light,\nI am living day and night,\nIn the holiest place so bright,\nHallelujah to the Lamb."),
      new StanzaModel("I have passed the outer veil,\nHallelujah to the Lamb,\nWhich did once God's light conceal,\nO glory be to God,\nBut the blood has brought me in,\nTo God's holiness so clean,\nWhere there's death to self and sin.\nHallelujah to the Lamb."),
      new StanzaModel("I'm within the holiest place,\nHallelujah to the Lamb,\nI have passed the inner veil,\nO glory be to God,\nBy the power of the blood,\nI am sanctified to God,\nNow the Lord is my abode,\nHallelujah to the Lamb.")
    ], "Ab",
    new ChorusModel("I have crossed the riven veil\nWhere the glory never fails,\nHallelujah, Hallelujah;\nI have crossed the riven veil\nWhere the glory never fails,\nFor I'm living in the presence of the King.")
  ),
  new HymnModel(120, "ROOM AT THE FOUNTAIN",
    [
      new StanzaModel("I heard my loving Savior say,\nThere's room at the fountain for thee,\nCome, wash the stains of sin away,\nThere's room at the fountain for thee."),
      new StanzaModel("I came to Him, my sins confessed,\nThere was room at the fountain for me;\nWhen I gave up, my heart was blest,\nThere's room at the fountain for thee."),
      new StanzaModel("I plunged beneath the crimson tide,\nThere was room at the fountain for me;\nAnd now by faith am sanctified,\nThere's room at the fountain for thee."),
      new StanzaModel("I found the crimson stream I know,\nThere was room at the fountain for me;\nHis blood has washed me white as snow,\nThere's room at the fountain for thee."),
      new StanzaModel("He cleansed my heart from inbred sin,\nThere was room at the fountain for me;\nAnd now He keeps me pure within,\nThere's room at the fountain for thee."),
      new StanzaModel("I'll praise Him while He gives me breath,\nThere was room at the fountain for me;\nHe saved me from an awful death,\nThere's room at the fountain for thee."),
      new StanzaModel("His blood was shed but once for all,\nThere was room at the fountain for me;\nOh, don't reject sweet Mercy's call,\nThere's room at the fountain for thee."),
      new StanzaModel("We'll sing with all the saints above,\nThere was room at the fountain for me;\nAnd praise Him for redeeming love,\nThere's room at the fountain for thee.")
    ], "Eb",
    new ChorusModel("Room, room, yes, there is room,\nRoom at the fountain for thee;\nRoom, room, yes, there is room,\nThere's room at the fountain for thee.")
  ),
  new HymnModel(121, "COME AND GO WITH ME",
    [
      new StanzaModel("Come and go with me to my Father's House,\nTo my Father's House, to my Father's House.\nCome and go with me to my Father's House,\nWhere there's peace, peace, peace."),
      new StanzaModel("(Jesus will be there…)\n(There'll be no sorrow there)")
    ], "Ab"
  ),
  new HymnModel(122, "JUST ANOTHER TOUCH, LORD",
    [
      new StanzaModel("Just another touch, Lord, from You,\nTo help in hard trials I go through;\nThough dark may be the night, You've\nsent a ray of light,\nWhen I get a touch, Lord, from You.")
    ], "Eb"
  ),
  new HymnModel(123, "THE PEARLY WHITE CITY",
    [
      new StanzaModel("There's a holy and beautiful city,\nWhose builder and ruler is God.\nJohn saw it descending from heaven\nWhen Patmos, in exile, he trod;\nIts high, massive wall is of jasper,\nThe city itself is pure gold;\nAnd when my frail tent here is folded,\nMine eyes shall its glory behold."),
      new StanzaModel("No sin is allowed in that city,\nAnd nothing defiling nor mean;\nNo pain and no sickness can enter,\nNo crape on the doorknob is seen;\nEarth's sorrows and cares are forgotten,\nNo tempter is there to annoy;\nNo parting words ever are spoken,\nThere's nothing to hurt and destroy."),
      new StanzaModel("No heartaches are known in that city,\nNo tears ever moisten the eye,\nThere's no disappointment in heaven,\nNo envy and strife in the sky;\nThe saints are all sanctified wholly,\nThey live in sweet harmony there;\nMy heart is now set on that city,\nAnd some day its blessings I'll share."),
      new StanzaModel("My loved ones are gathering yonder,\nMy friends, too, are passing away;\nAnd soon I shall join their bright number,\nAnd dwell in eternity's day;\nThey're safe now in glory with Jesus,\nTheir trials and battles are past;\nThey overcome sin and the tempter,\nThey've reached that fair city at last.")
    ], "Eb",
    new ChorusModel("In that bright city, pearly white city,\nI have a mansion, a harp, and a crown;\nNow I am watching, waiting and longing,\nFor the white city John saw coming down.")
  ),
  new HymnModel(124, "JUST A CLOSER WALK",
    [
      new StanzaModel("I am weak but Thou art strong,\nJesus keep me from all wrong;\nI'll be satisfied as long,\nAs I walk let me walk close to Thee."),
      new StanzaModel("Thru this world of toil and snares,\nIf I falter, Lord, who cares?\nWho with me my burden shares?\nNone but Thee, dear Lord, none but Thee."),
      new StanzaModel("When my feeble life is o'er,\nTime for me will be no more;\nGuide me gently, safely o'er,\nTo Thy kingdom shore, to Thy shore.")
    ], "C",
    new ChorusModel("Just a closer walk with Thee,\nGrant it, Jesus, is my plea;\nDaily walking close to Thee,\nLet it be, dear Lord, let it be.")
  ),
  new HymnModel(125, "THE MESSAGE OF HIS COMING",
    [
      new StanzaModel("We’re looking for His coming, in the clouds of heaven,\nComing back to earth to catch away His own;\nThen may we all be ready, when midnight cry is given,\nTo go and reign with Christ on His throne."),
      new StanzaModel("We're longing for the glory that awaits the faithful,\nWho shall overcome, and every conflict win;\nPress ever bravely onward, the prize is life eternal\nTo all who win the fight over sin."),
      new StanzaModel("We're praying of the advent of our blessed Saviour,\nWho has promised life to all who trust His grace;\nHis coming now is pending, the message being given,\nAnd soon we'll see our Lord face to face."),
      new StanzaModel("We see the signs appearing of His blessed coming,\nLo, behold the fig leaves now becoming green;\nThe gospel of His kingdom has gone to every nation;\nThat we are near the end can be seen.")
    ], "C",
    new ChorusModel("Gladly may we herald the message of His blessed appearing,\nSoon He's coming in glory, tell to one and all;\nThen awake, ye saints of the Lord, why slumber when the end is nearing,\nBut get ready for the final call.")
  ),
  new HymnModel(126, "THE SHEEP OF HIS PASTURE",
    [
      new StanzaModel("The sheep of His pasture have gathered\nTo hear what the Shepherd would say,\nHis voice like the sound of slow waters,\nCame rippling through vessels of clay."),
      new StanzaModel("'Tis the voice that brought forth creation\nAnd set all the stars in array,\nAnd speaks words of Life and of wisdom,\nIn the midst of His people today."),
      new StanzaModel("Through prophets, by precious Blood purchased,\nCleansed and surrendered and filled.\nAnd set in the Body for service,\nAs the Head of the Body hath willed.")
    ], "F"
  ),
  new HymnModel(127, "ARE YOU WASHED IN BLOOD",
    [
      new StanzaModel("Have you been to Jesus for the cleansing pow'r?\nAre you washed in the blood of the Lamb?\nAre you fully trusting in His grace this hour?\nAre you washed in the blood of the Lamb?"),
      new StanzaModel("Are you walking daily by the Saviour's side?\nAre you washed in the blood of the Lamb?\nDo you rest each moment in the Crucified?\nAre you washed in the blood of the Lamb?"),
      new StanzaModel("When the Bridegroom cometh, will your robes be white,\nPure and white in the blood of the Lamb?\nWill your soul be ready for the mansions bright\nAnd be washed in the blood of the Lamb?"),
      new StanzaModel("Lay aside the garments that are stained with sin,\nAnd be washed in the blood of the Lamb.\nThere's a fountain flowing for the soul unclean,\nOh, be washed in the blood of the Lamb.")
    ], "Ab",
    new ChorusModel("Are you washed in the blood,\nIn the soul-cleansing blood of the Lamb?\nAre your garments spotless? Are they\nwhite as snow?\nAre you washed in the blood of the Lamb?")
  ),
  new HymnModel(128, "JESUS LOVES ME",
    [
      new StanzaModel("Jesus loves me! This I know,\nFor the Bible tells me so;\nLittle ones to Him belong,\nThey are weak but He is strong."),
      new StanzaModel("Jesus loves me! He who died,\nHeaven's gates to open wide;\nHe will wash away my sin,\nLet His little child come in."),
      new StanzaModel("Jesus loves me, this I know,\nAs he loved so long ago;\nTaking children on his knee,\nSaying, \"Let them come to me.\""),
      new StanzaModel("Jesus loves me he will stay,\nClose beside me all the way;\nThou hast bled and died for me,\nI will henceforth live for thee.")
    ], "Eb",
    new ChorusModel("Yes, Jesus loves me,\nYes, Jesus loves me,\nYes, Jesus loves me,\nThe Bible tells me so.")
  ),
  new HymnModel(129, "BAPTIZED INTO THE BODY",
    [
      new StanzaModel("Have you been baptized into the Body?\nBaptized with the Holy Ghost;\nThere is but one way to enter in it,\nJust as they did on Pentecost."),
      new StanzaModel("There is but one Church, Bride or Body,\nAnd into it we're all baptized;\nBy the one, true, promised Holy Spirit;\nThough by the world we're all despised."),
      new StanzaModel("Every creed has claimed to the Body,\nBut the “plumb line” proved untrue\nAll their dreams, for God has so determined\nTo bring His Son's true Bride to view."),
      new StanzaModel("Many thought that they were in the Body,\n'till the Holy Ghost had come;\nWhen the Word of God was opened to them,\nThey entered in, and yet there's room."),
      new StanzaModel("Those who died before the Holy Spirit\nCame upon us from on high,\nMay, by faith with Saints of old departed,\nArise to meet Him in the sky."),
      new StanzaModel("When the Bridegroom comes, will you be ready;\nAnd your vessel all filled and bright?\nYou will be among the foolish virgins\nIf you do not walk in the light.")
    ], "G",
    new ChorusModel("Are you in the Church triumphant?\nAre you in the Saviour's Bride?\nCome and be baptized into the Body,\nAnd forevermore abide.")
  ),
  new HymnModel(130, "THIS IS LIKE HEAVEN TO ME",
    [
      new StanzaModel("WE find many people who can't understand\nWhy we are so happy and free;\nWe've crossed over Jordan to Canaan's fair land\nAnd this is like Heaven to me"),
      new StanzaModel("Oh, when I get happy, I sing and I shout,\nThe devil don't believe it, I see;\nBut I'm filled with the Spirit, there isn't a doubt,\nAnd that's what's the matter with me.")
    ], "F",
    new ChorusModel("Oh, this is like Heaven to me (Praise God!)\nYes! This is like Heaven to me;\nI've crossed over Jordan to Canaan's fair land,\nAnd this is like Heaven to me.")
  ),
  new HymnModel(131, "WHAT WOULD YOU EXCHANGE",
    [
      new StanzaModel("Brother a-far from the Saviour today,\nRisking your soul for the things that decay,\nOh, if today God should call it away,\nWhat would you give in exchange for your soul?"),
      new StanzaModel("Mercy is calling you, won't you give heed?\nMust the Saviour still tenderly plead?\nRisk not your soul, it is precious indeed;\nWhat would you give in exchange for your soul?"),
      new StanzaModel("More than the silver and gold of the earth,\nMore than all jewels thy spirit is worth!\nGod, the Creator, has given it birth!\nWhat would you give in exchange for your soul?"),
      new StanzaModel("If, when you stand at the bar by and by,\nWhen you are weighed in the balance on high,\nYou should be sentenced forever to die,\nWhat would you give in exchange for your soul?")
    ], "G",
    new ChorusModel("What would you give? What would you give?\nWhat would you give in exchange for your soul?\nOh, if today God should call it away,\nWhat would you give in exchange for your soul?")
  ),
  new HymnModel(132, "A WONDERFUL TIME",
    [
      new StanzaModel("A Wonderful time is just ahead,\nThe Lord Whom we love and own\nWill open the gates of gloryland\nRevealing His glory throne."),
      new StanzaModel("A wonderful time is just ahead,\nOur conflicts and trials passed;\nOur wilderness journey at an end,\nSafe home everyone at last."),
      new StanzaModel("A wonderful time is just ahead,\nThe groans of creation cease;\nAnd all that is held in bondage now\nThe Lord will that day release.")
    ], "Bb",
    new ChorusModel("A wonderful time for you,\nA wonderful time for me;\nIf we are prepared to meet Jesus the King,\nA wonderful time it will be.")
  ),
  new HymnModel(133, "WHEN HE REACHED DOWN",
    [
      new StanzaModel(""),
      new StanzaModel(""),
      new StanzaModel(""),
      new StanzaModel(""),
      new StanzaModel("")
    ], "C",
    new ChorusModel("")
  ),
  new HymnModel(134, "BRING THEM IN",
    [
      new StanzaModel("Hark! 'tis the Shepherd's voice I hear,\nOut in the desert dark and drear,\nCalling the sheep who've gone astray,\nFar from the Shepherd's fold away."),
      new StanzaModel("Who'll go and help this Shepherd kind,\nHelp Him the wand'ring ones to find?\nWho'll bring the lost ones to the fold,\nWhere they'll be sheltered from the cold?"),
      new StanzaModel("Out in the desert hear their cry,\nOut on the mountains wild and high;\nHark! 'tis the Master speaks to thee,\n“Go find My sheep where'er they be.”")
    ], "Ab",
    new ChorusModel("Bring them in, bring them in,\nBring them in from the fields of sin;\nBring them in, bring them in,\nBring the wand'ring ones to Jesus.")
  ),
  new HymnModel(135, "HOW GREAT THOU ART",
    [
      new StanzaModel("O Lord my God! When I in awesome wonder,\nConsider all the worlds Thy hands have made;\nI see the stars, I hear the rolling thunder;\nThy pow'r throughout the universe displayed."),
      new StanzaModel("When through the woods and forest glades I wander\nAnd hear the birds sing sweetly in the trees;\nWhen I look down from lofty mountain grandeur\nAnd hear the brook and feel the gentle breeze."),
      new StanzaModel("And when I think that God, His Son not sparing,\nSent Him to die, I scarce can take it in;\nThat on the cross, my burden gladly bearing,\nHe bled and died to take away my sin."),
      new StanzaModel("When Christ shall come with shout of acclamation\nAnd take me home, what joy shall fill my heart!\nThen I shall bow in humble adoration\nAnd there proclaim, my God, how great Thou art!")
    ], "Bb",
    new ChorusModel("O Lord my God! When I in awesome wonder,\nConsider all the worlds Thy hands have made;\nI see the stars, I hear the rolling thunder;\nThy pow'r throughout the universe displayed.")
  ),
  new HymnModel(136, "OLD–TIME POWER",
    [
      new StanzaModel("They were in an upper chamber,\nThey were all with one accord,\nWhen the Holy Ghost descended\nAs was promised by our Lord."),
      new StanzaModel("Yes, this power from heaven descended\nWith the sound of rushing wind;\nTongues of fire came down upon them,\nAs the Lord said He would send."),
      new StanzaModel("Yes, this power from heaven descended\nWith the sound of rushing wind;\nTongues of fire came down upon them,\nAs the Lord said He would send.")
    ], "F",
    new ChorusModel("Oh Lord, send the power just now,\nOh Lord, send the power just now;\nOh Lord, send the power just now\nAnd baptize every one.")
  ),
  new HymnModel(137, "THERE IS POWER IN BLOOD",
    [
      new StanzaModel("Would you be free from your burden of sin?\nThere's power in the blood, power in the blood;\nWould you o'er evil a victory win?\nThere's wonderful power in the blood."),
      new StanzaModel("Would you be free from your passion and pride?\nThere's power in the blood, power in the blood;\nCome for a cleansing to Calvary's tide,\nThere's wonderful power in the blood."),
      new StanzaModel("Would you be whiter, much whiter than snow?\nThere's power in the blood, power in the blood;\nSin's stains are lost in its life – giving flow,\nThere's wonderful power in the blood."),
      new StanzaModel("Would you do service for Jesus your King?\nThere's power in the blood, power in the blood;\nWould you live daily, His praises to sing?\nThere's wonderful power in the blood.")
    ], "Bb",
    new ChorusModel("There is power, power, wonder – working power\nIn the blood of the Lamb,\nThere is power, power, wonder – working power,\nIn the precious blood of the Lamb.")
  ),
  new HymnModel(138, "THE SOLID ROCK",
    [
      new StanzaModel("My hope is built on nothing less\nThan Jesus' blood and righteousness;\nI dare not trust the sweetest frame;\nBut wholly lean on Jesus' Name."),
      new StanzaModel("When darkness seems to hide His face,\nI rest on His unchanging grace;\nIn every high and stormy gale,\nMy anchor holds within the veil."),
      new StanzaModel("His oath, His covenant, His blood,\nSupport me in the whelming flood;\nWhen all around my soul gives way,\nHe then is all my hope and stay."),
      new StanzaModel("When He shall come with trumpet sound,\nOh, may I then in Him be found;\nDressed in his righteousness alone,\nFaultless to stand before the throne.")
    ], "G",
    new ChorusModel("On Christ, the solid Rock, I stand;\nAll other ground is sinking sand,\nAll other ground is sinking sand.")
  ),
  new HymnModel(139, "HE ABIDES",
    [
      new StanzaModel("I'm rejoicing night and day,\nAs I walk the pilgrim way,\nFor the hand of God in all my life I see,\nAnd the reason of my bliss,\nYes, the secret all is this;\nThat the Comforter abides with me."),
      new StanzaModel("Once my heart was full of sin,\nOnce I had no peace within,\nTill I heard how Jesus died upon the tree;\nThen I fell down at His feet,\nAnd there came a peace so sweet,\nNow the Comforter abides with me."),
      new StanzaModel("He is with me everywhere,\nAnd He knows my every care,\nI'm as happy as a bird and just as free;\nFor the Spirit has control, Jesus satisfies my soul,\nSince the Comforter abides with me!"),
      new StanzaModel("There's no thirsting for the things\nOf the world, they've taken wings;\nLong ago I gave them up, and instantly\nAll my night was turned to day.\nAll my burdens rolled away,\nNow the Comforter abides with me!")
    ], "Ab",
    new ChorusModel("He abides, He abides,\nHallelujah, He abides with me!\nI'm rejoicing night and day,\nAs I walk the narrow way,\nFor the Comforter abides with me.")
  ),
  new HymnModel(140, "REDEEMED",
    [
      new StanzaModel("Redeemed, how I love to proclaim it!\nRedeemed by the blood of the Lamb;\nRedeemed through His infinite mercy,\nHis child, and forever, I am."),
      new StanzaModel("Redeemed and so happy in Jesus,\nNo language my rapture can tell;\nI know that the light of His presence\nWith me doth continually dwell."),
      new StanzaModel("I think of my blessed Redeemer,\nI think of Him all the day long;\nI sing, for I cannot be silent;\nHis love is the theme of my song."),
      new StanzaModel("I know I shall see in His beauty\nThe King in whose law I delight;\nWho lovingly guardeth my footsteps,\nAnd giveth me songs in the night.")
    ], "Ab",
    new ChorusModel("Redeemed, Redeemed,\nRedeemed by the blood of the Lamb;\nRedeemed, Redeemed,\nHis child, and forever, I am.")
  ),
  new HymnModel(141, "NOTHING BUT THE BLOOD",
    [
      new StanzaModel("What can wash away my sin?\nNothing but the blood of Jesus;\nWhat can make me whole again?\nNothing but the blood of Jesus."),
      new StanzaModel("For my cleansing this I see,\nNothing but the blood of Jesus,\nFor my pardon this my plea,\nNothing but the blood of Jesus."),
      new StanzaModel("Nothing can for sin atone,\nNothing but the blood of Jesus;\nNaught of good that I have done,\nNothing but the blood of Jesus."),
      new StanzaModel("This is all my hope and peace,\nNothing but the blood of Jesus;\nThis is all my righteousness,\nNothing but the blood of Jesus."),
      new StanzaModel("Now by this I'll overcome,\nNothing but the blood of Jesus;\nNow by this I'll reach my home,\nNothing but the blood of Jesus"),
      new StanzaModel("Glory! glory! thus I sing,\nNothing but the blood of Jesus;\nAll my praise for this I bring,\nNothing but the blood of Jesus.")
    ], "G",
    new ChorusModel("Oh, Precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.")
  ),
  new HymnModel(142, "JESUS, THE LIGHT OF THE WORLD",
    [
      new StanzaModel("All ye saints of light proclaim,\nJesus, the light of the world;\nLife and mercy in His name,\nJesus, the light of the world."),
      new StanzaModel("Hear the Savior's earnest call,\nJesus, the light of the world;\nSend the Gospel truth to all,\nJesus, the light of the world."),
      new StanzaModel("Why not seek Him then today,\nJesus, the light of the world;\nGo with truth the narrow way,\nJesus, the light of the world."),
      new StanzaModel("Come, confess Him as your King,\nJesus, the light of the world;\nThen the bells of heaven will ring,\nJesus, the light of the world.")
    ], "Ab",
    new ChorusModel("We'll walk in the light, beautiful light,\nCome where the dewdrops of mercy are bright;\nShine all around us by day and by night,\nJesus, the light of the world.")
  ),
  new HymnModel(143, "WHEN WE SEE CHRIST",
    [
      new StanzaModel("Oft times the day seems long, our trials hard to bear;\nWe're tempted to complain, to murmur and despair;\nBut Christ will soon appear, to catch His bride away,\nAll tears forever over, in God's eternal day."),
      new StanzaModel("Sometimes the sky looks dark, with not a ray of light;\nWe're tossed and driven on, no human help in sight;\nBut there is One in heaven, who knows\nour deepest care,\nLet Jesus solve your problem, just go to\nHim in prayer."),
      new StanzaModel("Life's day will soon be o'er, all storms\nforever past;\nWe'll cross the great divide, to glory safe at last;\nWe'll share the joys of heaven, a harp, a\nhome, a crown;\nThe tempter will be banished, we'll lay\nour burden down.")
    ], "Eb",
    new ChorusModel("It will be worth it all, when we see Jesus;\nLife's trials will seem so small, when we see Christ;\nOne glimpse of His dear face, all sorrow will erase,\nSo bravely run the race till we see Christ.")
  ),
  new HymnModel(144, "BLESSED BE THE FOUNTAIN OF BLOOD",
    [
      new StanzaModel("Blessed be the fountain of blood,\nTo a world of sinners revealed;\nBlessed be the dear Son of God;\nOnly by His stripes we are healed.\nThough I've wandered far from His fold,\nBringing to my heart pain and woe,\nWash me in the blood of the Lamb,\nAnd I shall be whiter than snow."),
      new StanzaModel("Father, I have wandered form Thee,\nOften has my heart gone astray;\nCrimson do my sins seem to me\nWater cannot wash them away.\nJesus, to that Fountain of Thine,\nLeaning on Thy promise, I go;\nCleanse me by Thy washing divine,\nAnd I shall be whiter than snow.")
    ], "Eb",
    new ChorusModel("Whiter than snow!\nWhiter than snow!\nWash me in the blood of the Lamb,\nAnd I shall be whiter than snow.")
  ),
  new HymnModel(145, "ALL HAIL JESUS’ NAME",
    [
      new StanzaModel("All hail the pow'r of Jesus' name!\nLet angels prostrate fall;\nBring forth the royal diadem,\nAnd crown Him Lord of all;\nBring forth the royal diadem,\nAnd crown Him Lord of all."),
      new StanzaModel("Ye seed of Israel's chosen race,\nYe ransomed from the fall;\nHail Him, who saves you by His grace,\nAnd crown Him Lord of all;\nHail Him, who saves you by His grace,\nAnd crown Him Lord of all."),
      new StanzaModel("Sinners, whose love can ne'er forget\nThe wormwood and the gall,\nGo, spread your trophies at His feet,\nAnd crown Him Lord of all;\nGo, spread your trophies at His feet,\nAnd crown Him Lord of all."),
      new StanzaModel("Let every kindred, every tribe,\nOn this terrestrial ball,\nTo Him all majesty ascribe,\nAnd crown Him Lord of all;\nTo Him all majesty ascribe,\nAnd crown Him Lord of all."),
      new StanzaModel("O that with yonder sacred throng\nWe at His feet may fall;\nWe'll join the everlasting song,\nAnd crown Him Lord of all;\nWe'll join the everlasting song,\nAnd crown Him Lord of all.")
    ], "G"
  ),
  new HymnModel(146, "AT THE CROSS",
    [
      new StanzaModel("Alas! And did my Saviour bleed\nAnd did my Sovereign die?\nWould He devote that sacred head\nFor such a worm as I?"),
      new StanzaModel("Was it for crimes that I have done,\nHe groaned upon the tree?\nAmazing pity, grace unknown,\nAnd love beyond degree!"),
      new StanzaModel("Well might the sun in darkness hide,\nAnd shut his glories in,\nWhen Christ, the mighty Maker, died\nFor man, the creature's sin."),
      new StanzaModel("But drops of grief can ne'er repay\nThe debt of love I owe;\nHere, Lord, I give myself away,\n'tis all that I can do!")
    ], "Eb",
    new ChorusModel("At the cross, at the cross where I first saw the light,\nAnd the burden of my heart rolled away,\nIt was there by faith I received my sight,\nAnd now I am happy all the day!")
  ),
  new HymnModel(147, "THE GREAT I AM",
    [
      new StanzaModel("I AM that spoke to Moses in the burning bush of fire,\nI AM the God of Abraham, the Bright and Morning Star.\nI AM the Rose of Sharon, from beginning whence I came;\nI AM the whole creation, and Jesus is My Name."),
      new StanzaModel("I AM was before old Abraham, “He\nrejoiced to see My day.”\nWhen Jesus spoke these precious words,\nthey stoned Him right away.\n“Why do you stone Me?” Jesus said, in a\nholy, sweet command,\n“Because you say you're the great I AM,\nwe believe you're just a man”"),
      new StanzaModel("It was on the Day of Pentecost, oh, how the fire did fall;\nThe Holy Ghost descended and filled them one and all.\nThen Peter told the multitude, “Repent of all your sins.”\nAbout three thousand souls were buried in\nJesus' precious Name."),
      new StanzaModel(""),
      new StanzaModel("")
    ], "Ab",
    new ChorusModel("Oh, who do you say I am, and whence do you say I came,\nDo you know the Father, and can you tell His Name?\nIn Jesus dwells the fullness of the Godhead, don't you see;\nJesus is the great I AM, and the Lord of lords is He.")
  ),
  new HymnModel(148, "ALMOST PERSUADED",
    [
      new StanzaModel("\“Almost persuaded\” now to believe;\n\“Almost persuaded\” Christ to receive;\nSeems now some soul to say, \“Go, Spirit, go Thy way;\nSome more convenient day, on Thee I'll call.\”"),
      new StanzaModel("\“Almost persuaded,\” come, come today;\n\“Almost persuaded,\” turn not away;\nJesus invites you here, Angels are ling'ring near,\nPrayers rise from hearts so dear;\nO wand'rer, come."),
      new StanzaModel("\“Almost persuaded,\” harvest is past!\n\“Almost persuaded,\” doom comes at last!\n\“Almost\” cannot avail, \“Almost\” is but to fail!\nSad, sad, that bitter wail: \“Almost – but lost!\”")
    ], "G"
  ),
  new HymnModel(149, "NO DISAPPOINTMENT",
    [
      new StanzaModel("There’s no disappointment in heaven,\nNo weariness, sorrow or pain;\nNo hearts that are bleeding and broken,\nNo song with a minor refrain.\nThe clouds of our earthly horizon\nWill never appear in the sky,\nFor all will be sunshine and gladness,\nWith never a sob nor a sigh."),
      new StanzaModel("I'm bound for that beautiful city\nMy Lord has prepared for His own;\nWhere all the redeemed of all ages\nSing “Glory!” around the white throne;\nSometimes I grow homesick for heaven,\nAnd the glories I there shall behold:\nWhat a joy that will be when my Saviour I see,\nIn that beautiful city of gold!"),
      new StanzaModel("There'll never be crape on the doorknob,\nNo funeral train in the sky;\nNo graves on the hillsides of glory,\nFor there we shall nevermore die.\nThe old will be young there forever,\nTransformed in a moment of time;\nImmortal we'll stand in His likeness,\nThe stars and the sun to outshine.")
    ], "Eb",
    new ChorusModel("I'm bound for that beautiful city\nMy Lord has prepared for His own;\nWhere all the redeemed of all ages\nSing “Glory!” around the white throne;\nSometimes I grow homesick for heaven,\nAnd the glories I there shall behold:\nWhat a joy that will be when my Saviour I see,\nIn that beautiful city of gold!")
  ),
  new HymnModel(150, "HAPPY DAY",
    [
      new StanzaModel("O happy day, that fixed my choice\nOn Thee, my Saviour and my God!\nWell may this glowing heart rejoice,\nAnd tell its raptures all abroad."),
      new StanzaModel("O happy bond, that seals my vows\nTo Him who merits all my love!\nLet cheerful anthems fill His house,\nWhile to that sacred shrine I move."),
      new StanzaModel("'Tis done; the great transaction's done!\nI am my Lord's and He is mine;\nHe drew me, and I followed on,\nCharmed to confess the voice divine."),
      new StanzaModel("High heav'n, that heard the solemn vow,\nThat vow renewed shall daily hear,\nTill in life's latest hour I bow,\nAnd bless in death a bond so dear.")
    ], "G",
    new ChorusModel("Happy day, happy day,\nWhen Jesus washed my sins away!\nHe taught me how to watch and pray,\nAnd live rejoicing every day.\nHappy day, happy day,\nWhen Jesus washed my sins away!")
  ),
  new HymnModel(151, "ONE OF THEM",
    [
      new StanzaModel("There are people almost everywhere,\nWhose hearts are all aflame\nWith the fire that fell at Pentecost,\nWhich cleansed and made them clean;\nIt is burning now within my heart,\nAll glory to His name!\nI'm so glad that I can say I'm one of them."),
      new StanzaModel("Though these people may not learned be,\nNor boast of worldly fame,\nThey have all received their Pentecost,\nBaptized in Jesus' name;\nAnd are telling now, both far and wide,\nHis power is yet the same,\nI'm so glad that I can say I'm one of them."),
      new StanzaModel("They were gathered in the upper room,\nAll praying in His name,\nThey were baptized with the Holy Ghost,\nAnd pow'r for service came;\nNow what He did for them that day\nHe'll do for you the same,\nI'm so glad that I can say I'm one of them."),
      new StanzaModel("Come, my brother seek this blessing\nThat will cleanse your heart from sin,\nThat will start the joy-bells ringing\nAnd will keep the soul aflame;\nIt is burning now within my heart,\nAll glory to His name,\nI'm so glad that I can say I'm one of them.")
    ], "Ab",
    new ChorusModel("One of them, one of them,\nI am glad that I can say I'm one of them;\nOne of them, one of them,\nI'm so glad that I can say I'm one of them.")
  ),
  new HymnModel(152, "I’LL BE LISTENING",
    [
      new StanzaModel("When the Saviour calls I will answer,\nWhen He calls for me I will hear;\nWhen the Saviour call I will answer,\nI'll be somewhere list'ning for my name."),
      new StanzaModel("If my heart is right when He calls me,\nIf my heart is right I will hear;\nIf my heart is right when He calls me,\nI'll be somewhere list'ning for my name;"),
      new StanzaModel("If my robe is white when He calls me,\nIf my robe is white I will hear;\nIf my robe is white when He calls me,\nI'll be somewhere list'ning for my name.")
    ], "Ab",
    new ChorusModel("I'll be somewhere list'ning,\nI'll be somewhere list'ning,\nI'll be somewhere list'ning for my name;\nI'll be somewhere list'ning,\nI'll be somewhere list'ning,\nI'll be somewhere list'ning for my name;")
  ),
  new HymnModel(153, "THE HOMECOMING WEEK",
    [
      new StanzaModel("Upon our journey here below we meet with pain and loss;\nSometimes there is a crown of thorns,\nsometimes the heavy cross.\nThe dreary road to Calvary, the bitter goad and sting,\nBut what's inside those gates of pearl will be worth everything."),
      new StanzaModel("The shadows now begin to fall, the time is drawing nigh,\nWhen Christ our Lord shall come again\nlike lightening from the sky.\nAnd while we wait and suffer here, praise God,\nwe'll shout and sing,\nFor one glimpse through those gates of\npearl will be worth everything."),
      new StanzaModel("The precious Blood of God's own Son has saved and sanctified\nA wondrous people for His name and they\nare called the Bride.\nThough here neglected and despised, one\nday the Lord will bring\nHis chosen ones within the gates, and that's worth everything.")
    ], "G",
    new ChorusModel("When we're inside the gates of pearl,\nWe'll learn a lot of things,\nWe'll have a harp that's made of gold,\nPerhaps a thousand strings;\nWe'll sing and shout and dance about,\nThe Lamb will dry our tears;\nWe'll have a grand homecoming week,\nThe first ten thousand years.")
  ),
  new HymnModel(154, "JUST AS I AM",
    [
      new StanzaModel("Just as I am, without one plea,\nBut that Thy blood was shed for me,\nAnd that Thou bidd'st me come to Thee,\nO Lamb of God, I come! I come!"),
      new StanzaModel("Just as I am, and waiting not\nTo rid my soul of one dark blot,\nTo Thee, whose blood can cleanse each spot,\nO Lamb of God, I come! I come!"),
      new StanzaModel("Just as I am, Thou wilt receive,\nWilt welcome, pardon, cleanse, relieve;\nBecause Thy promise I believe,\nO Lamb of God, I come! I come!"),
      new StanzaModel("Just as I am, Thy love unknown\nHath broken every barrier down;\nNow to be Thine, yea, Thine alone,\nO Lamb of God, I come! I come!")

    ], "Eb",
    new ChorusModel("There will be peace in the valley for me some day;\nThere will be peace in the valley for me, oh, Lord, I pray;\nThere'll be no sadness, no sorrow, no trouble I'll see;\nThere will be peace in the valley for me.")
  ),
  new HymnModel(155, "PEACE IN THE VALLEY",
    [
      new StanzaModel("Well, I'm tired and so weary, but I must go along;\nTill the Lord comes and calls me away, oh, yes;\nWell the morning is bright, and the Lamb is the Light;\nAnd the night, night is as fair as the day, oh, yes."),
      new StanzaModel("There the flow'rs will be blooming, and\nthe grass will be green;\nAnd the skies will be clear and serene, oh, yes;\nWell the sun ever beams, in this valley of dreams;\nAnd no clouds there will ever be seen, oh, yes;"),
      new StanzaModel("Well, the bear will be gentle, and the wolf will be tamed;\nAnd the lion shall lay down by the lamb, oh, yes;\nWell the beast from the wild, shall be led by a lit'le child;\nAnd I'll be changed, changed from this creature that I am, oh, yes.")
    ], "Eb",
    new ChorusModel("")
  ),
  new HymnModel(156, "GREAT IS THE LORD",
    [
      new StanzaModel("There is a name I love to hear, it falls like\nMusic on my ear,\nIt's the Name of Jesus Christ the Lord;\nHe came from the Father in Heaven above,\nHe died on the cross just to show us His love;\nJesus, yes, Jesus is His Name."),
      new StanzaModel("He is the dear Saviour of men; He gave His own life\nJust to free us from sin,\nIt's the Name of Jesus Christ the Lord;\nThe wonderful Counselor, the Man from\nGalilee, He calmed the angry waters\nAnd He walked on the sea.")
    ], "Bb",
    new ChorusModel("Great is the Lord! Great is the Lord!\nGreat is the Father, great is the Son,\nGreat is the Holy Ghost, and these three\nare One;\nJesus, yes, Jesus is His Name.")
  ),
  new HymnModel(157, "I’VE ANCHORED IN JESUS",
    [
      new StanzaModel("Upon life's boundless ocean where mighty billows roll,\nI've fixed my hope in Jesus, blest anchor of my soul;\nWhen trials fierce assail me as storms are\ngath'ring o'er,\nI rest upon His mercy and trust Him more."),
      new StanzaModel("He keeps my soul from evil and gives me\nblessed peace;\nHis voice has stilled the waters and bid\ntheir tumult cease.\nMy Pilot and deliv'rer to Him I all confide,\nFor always when I need Him, He's at my side."),
      new StanzaModel("He is my Friend and Savior, in Him my\nanchor's cast,\nHe drives away my sorrows and shields\nme from the blast;\nBy faith I'm looking upward beyond life's troubled sea,\nThere I behold a haven prepared for me.")
    ], "Bb",
    new ChorusModel("I've anchored in Jesus, the storms of life I'll brave,\nI've anchored in Jesus, I fear no wind or wave;\nI've anchored in Jesus, for He hath pow'r to save,\nI've anchored in the Rock of Ages.")
  ),
  new HymnModel(158, "BEYOND THE SUNSET",
    [
      new StanzaModel("Beyond the sunset, o blissful morning,\nWhen with our Saviour heaven is begun.\nEarth's toiling ended, O glorious dawning;\nBeyond the sunset, when day is done."),
      new StanzaModel("Beyond the sunset no clouds will gather,\nNo storms will threaten, no fears annoy.\nO day of gladness, O day unending;\nBeyond the sunset, eternal joy."),
      new StanzaModel("Beyond the sunset, a hand will guide me\nTo God, the Father, whom I adore;\nHis glorious presence, His words of welcome,\nWill be my portion on that fair shore."),
      new StanzaModel("Beyond the sunset, O glad reunion,\nWith our dear loved ones who've gone before.\nIn that fair homeland we'll know no parting,\nBeyond the sunset forevermore.")
    ], "Eb",
  ),
  new HymnModel(159, "A CHILD OF THE KING",
    [
      new StanzaModel("My father is rich in houses and lands,\nHe holdeth the wealth of the world in His hands!\nOf rubies and diamonds, of silver and gold,\nHis coffers are full, He has riches untold."),
      new StanzaModel("My Father's own Son, the Savior of men,\nOnce wandered o'er earth as the poorest of them;\nBut now He is reigning forever on high,\nAnd will give me a home in heav'n by and by."),
      new StanzaModel("I once was an outcast, stranger on earth,\nA sinner by choice, an alien by birth!\nBut I've been adopted, my name's written down,\nAn heir to a mansion, a robe, and a crown!"),
      new StanzaModel("A tent or a cottage, why should I care?\nThey're building a palace for me over there!\nThough exiled from home, yet still I may sing;\nAll glory to God, I'm a child of the King!")
    ], "F",
    new ChorusModel("My father is rich in houses and lands,\nHe holdeth the wealth of the world in His hands!\nOf rubies and diamonds, of silver and gold,\nHis coffers are full, He has riches untold.")
  ),
  new HymnModel(160, "HOLD TO GOD’S HAND",
    [
      new StanzaModel("Time is filled with swift transition,\nNaught of earth unmoved can stand,\nBuild your hopes on things eternal,\nHold to God's unchanging hand!"),
      new StanzaModel("Trust in Him who will not leave you,\nWhatsoever years may bring,\nIf by earthly friends forsaken,\nStill more closely to Him cling!"),
      new StanzaModel("Covet not this world's vain riches,\nThat so rapidly decay,\nSeek to gain the heavenly treasures,\nThey will never pass away!"),
      new StanzaModel("When your journey is completed,\nIf to God you have been true,\nFair and bright the home in glory,\nYour enraptured soul will view!")
    ], "G",
    new ChorusModel("Hold to God's unchanging hand!\nHold to God's unchanging hand!\nBuild your hopes on things eternal,\nHold to God's unchanging hand!")
  ),
  new HymnModel(161, "THE DAY OF REDEMPTION",
    [
      new StanzaModel("Nations are breaking, Israel's awaking,\nThe signs that the prophets, foretold;\nThe Gentile days numbered, with horrors encumbered;\nEternity soon will unfold."),
      new StanzaModel("The fig tree is growing; Jerusalem's restoring\nHer national life, long dethroned;\nToday she is calling, her latter rain's falling,\n“Return, O dispersed, to your own.”"),
      new StanzaModel("Heaven's powers are shaking, and many are mistaking\nGod's meaning to be of the sky;\nGod's Church is the power that's shaking this hour;\nThe day of redemption is nigh."),
      new StanzaModel("False prophets are lying, God's Truth they're denying,\nThat Jesus the Christ is our God;\nThough this generation spurns God's revelation,\nWe'll walk where the apostles have trod."),
      new StanzaModel("")
    ], "Ab",
    new ChorusModel("The day of redemption is near,\nMen's hearts are failing for fear;\nBe filled with the Spirit, your lamps\ntrimmed and clear,\nLook up! your redemption is near.")
  ),
  new HymnModel(162, "ONLY TRUST HIM ",
    [
      new StanzaModel("Come, every soul by sin oppressed,\nThere's mercy with the Lord,\nAnd He will surely give you rest,\nBy trusting in His Word."),
      new StanzaModel("For Jesus shed His precious Blood\nRich blessings to bestow:\nPlunge now into crimson flood\nThat washes white as snow."),
      new StanzaModel("Yes, Jesus is the Truth, the Way,\nThat leads you into rest;\nBelieve in Him without delay,\nAnd you are fully blest."),
      new StanzaModel("Come, then, and join this holy band,\nAnd on to glory go,\nTo dwell in that celestial land,\nWhere joys immortal flow.")
    ], "Ab",
    new ChorusModel("Only trust Him, only trust Him,\nOnly trust Him now:\nHe will save you, He will save you,\nHe will save you now.")
  ),
  new HymnModel(163, "ONE DAY",
    [
      new StanzaModel("One day when heaven was filled with His praises,\nOne day when sin was as black as could be,\nJesus came forth to be born of a virgin –\nDwelt amongst men, my example is He!"),
      new StanzaModel("One day they led Him up Calvary's mountain,\nOne day they nailed Him to die on the tree;\nSuffering anguish, despised and rejected:\nBearing our sins, my Redeemer is He."),
      new StanzaModel("One day they left Him alone in the garden,\nOne day He rested, from suffering free;\nAngels came down o'er His tomb to keep vigil;\nHope of the hopeless, my Saviour is He!"),
      new StanzaModel("One day the grave could conceal Him no longer;\nOne day the stone rolled away from the door;\nThen He arose, over death He had conquered;\nNow is ascended, my Lord evermore!"),
      new StanzaModel("One day the trumpet will sound for His coming,\nOne day the skies with His glories will shine;\nWonderful day, my beloved ones bringing;\nGlorious Saviour, this Jesus is mine!")
    ], "C",
    new ChorusModel("Living, He loved me; dying, He saved me;\nBuried, He carried my sins far away;\nRising, He justified freely forever:\nOne day He's coming – oh, glorious day!")
  ),
  new HymnModel(164, "SWING LOW, SWEET CHARIOT",
    [
      new StanzaModel("I looked over Jordan and what did I see\nComing for to carry me home;\nA band of angels coming after me.\nComing for to carry me home."),
      new StanzaModel("If you get there before I do,\nComing for to carry me home;\nTell all my friends I'm a-coming too,\nComing for to carry me home.")
    ], "F",
    new ChorusModel("Swing low, sweet chariot,\nComing for to carry me home;\nSwing low, sweet chariot,\nComing for to carry me home.")
  ),
  new HymnModel(165, "WHEN THEY RING THE BELLS",
    [
      new StanzaModel("There’s a land beyond the river,\nThat we call the sweet forever,\nAnd we only reach that shore by faith's decree;\nOne by one we'll gain the portals,\nThere to dwell with the immortals,\nWhen they ring the golden bells for you and me."),
      new StanzaModel("We shall know no sin or sorrow,\nIn the haven of tomorrow,\nWhen our barque shall sail beyond the silver sea;\nWe shall only know the blessing\nOf our Father's sweet caressing,\nWhen they ring the golden bells for you and me."),
      new StanzaModel("When our days shall know their number,\nWhen in death we sweetly slumber,\nWhen the King commands the spirit to be free;\nNevermore with anguish laden,\nWe shall reach that lovely aiden,\nWhen they ring the golden bells for you and me.")
    ], "F",
    new ChorusModel("Don't you hear the bells now ringing?\nDon't you hear the angels singing?\n'Tis the glory hallelujah Jubilee.\nIn that far-off sweet forever,\nJust beyond the shining river,\nWhen they ring the golden bells for you and me.")
  ),
  new HymnModel(166, "WHEN WE ALL GET TO HEAVEN",
    [
      new StanzaModel("Sing the wondrous love of Jesus,\nSing His mercy and His grace;\nIn the mansions, bright and blessed,\nHe'll prepare for us a place"),
      new StanzaModel("While we walk the pilgrim pathway,\nClouds will overspread the sky;\nBut when trav'ling days are over,\nNot a shadow, not a sigh."),
      new StanzaModel("Let us then be true and faithful,\nTrusting, serving, every day;\nJust one glimpse of Him in glory\nWill the toils of life repay."),
      new StanzaModel("Onward to the prize before us!\nSoon His beauty we'll behold;\nSoon the pearly gates will open,\nWe shall tread the streets of gold.")
    ], "C",
    new ChorusModel("When we all get to heaven,\nWhat a day of rejoicing that will be!\nWhen we all see Jesus,\nWe'll sing and shout the victory.")
  ),
  new HymnModel(167, "THE OLD RUGGED CROSS",
    [
      new StanzaModel("On a hill far away stood an old rugged cross,\nThe emblem of suff'ring and shame,\nAnd I love that old cross where the Dearest and Best,\nFor a world of lost sinners was slain."),
      new StanzaModel("Oh, that old rugged cross, so despised by the world,\nHas a wondrous attraction for me;\nFor the dear Lamb of God left His glory above,\nTo bear it to dark Calvary."),
      new StanzaModel("In the old rugged cross, stained with blood so divine,\nA wondrous beauty I see.\nFor 'twas on that old cross Jesus\nsuffered and died,\nTo pardon and sanctify me."),
      new StanzaModel("To the old rugged cross I will ever be true,\nIts shame and reproach gladly bear;\nThen He'll call me some day to my home far away,\nWhere His glory forever I'll share.")
    ], "Bb",
    new ChorusModel("So I'll cherish the old rugged cross,\nTill my trophies at last I lay down;\nI will cling to the old rugged cross,\nAnd exchange it some day for a crown.")
  ),
  new HymnModel(168, "WHERE HE LEADS ME",
    [
      new StanzaModel("I can hear my Saviour calling,\nI can hear my Saviour calling,\nI can hear my Saviour calling,\n“Take thy cross, and follow, follow Me.”"),
      new StanzaModel("I'll go with Him through the garden,\nI'll go with Him through the garden,\nI'll go with Him through the garden,\nI'll go with Him, with Him all the way."),
      new StanzaModel("I'll go with Him through the judgment,\nI'll go with Him through the judgment,\nI'll go with Him through the judgment,\nI'll go with Him, with Him all the way."),
      new StanzaModel("He will give me grace and glory,\nHe will give me grace and glory,\nHe will give me grace and glory,\nAnd go with me, with me all the way.")
    ], "F",
    new ChorusModel("Where He leads me I will follow,\nWhere He leads me I will follow,\nWhere He leads me I will follow,\nI'll go with Him, with Him all the way.")
  ),
  new HymnModel(169, "WONDERFUL",
    [
      new StanzaModel("O my heart sings today, sings for joy and gladness,\nJesus saves, satisfies, banishes my sadness;\nGuilt is gone, peace is mine, peace like to a river,\nJesus is wonderful, mighty to deliver."),
      new StanzaModel("Once a slave, now I'm free, free from condemnation,\nJesus gives liberty and a full salvation;\nNow the sins of the past have been all forgiven,\nAnd my name is inscribed on the book of heaven."),
      new StanzaModel("Living here with my Lord in a holy union,\nDay by day, all the way holding sweet communion;\nO what change grace hath wrought in my lowly station!\nSince my soul has received full and free salvation.")
    ], "Ab",
    new ChorusModel("Wonderful, wonderful, Jesus is to me,\nCounselor, Prince of Peace, Mighty God is He;\nSaving me, keeping me from all sin and shame,\nWonderful is my Redeemer, praise His name!")
  ),
  new HymnModel(170, "WHERE COULD I GO?",
    [
      new StanzaModel("Living below in this old sinful world,\nHardly a comfort can afford;\nStriving alone to face temptations sore,\nWhere could I go but to the Lord?"),
      new StanzaModel("Neighbors are kind, I love them every one,\nWe get along in sweet accord;\nBut when my soul needs manna from above,\nWhere could I go but to the Lord?"),
      new StanzaModel("Life here is grand with friends I love so dear,\nComfort I get from God's own word;\nYet when I face the chilling hand of death,\nWhere could I go but to the Lord?")
    ], "G",
    new ChorusModel("Where could I go, O where could I go?\nSeeking a refuge for my soul?\nNeeding a friend to help me in the end,\nWhere could I go but to the Lord?")
  ),
  new HymnModel(171, "WONDERFUL PEACE",
    [
      new StanzaModel("Far away in the depth of my spirit tonight\nRolls a melody sweeter than psalm;\nIn celestial-like strains it unceasingly falls\nO'er my soul like an infinite calm."),
      new StanzaModel("What a treasure I have in this wonderful peace,\nBuried deep in the heart of my soul;\nSo secure that no power can mine it away,\nWhile the years of eternity roll."),
      new StanzaModel("I am resting tonight in this wonderful peace,\nResting sweetly in Jesus' control;\nFor I'm kept from all danger by night and by day,\nAnd His glory is flooding my soul."),
      new StanzaModel("And methinks when I rise to that City of peace,\nWhere the Author of peace I shall see,\nThat one strain of the song which the ransomed will sing,\nIn that heavenly kingdom shall be."),
      new StanzaModel("Ah! Soul, are you here without comfort and rest,\nMarching down the rough pathway of time?\nMake Jesus your friend ere the shadows grow dark;\nOh, accept this sweet peace so sublime.")
    ], "Ab",
    new ChorusModel("Peace! Peace! Wonderful peace,\nComing down from the Father above;\nSweep over my spirit forever, I pray,\nIn fathomless billows of love.")
  ),
  new HymnModel(172, "THE SUN, NEVER GO DOWN",
    [
      new StanzaModel("The sun, it will never go down, in that city,\nThe sun, it will never go down;\nThe flowers are blooming forever,\nAnd the sun, it will never go down."),
      new StanzaModel("I feel like traveling on, I do,\nI feel like traveling on;\nThe flowers are blooming forever,\nAnd the sun, it will never go down."),
      new StanzaModel("I feel like shouting, sometimes I do,\nI feel like shouting, I do;\nThe flowers are blooming forever,\nAnd the sun, it will never go down.")
    ], "F"
  ),
  new HymnModel(173, "I BOWED AND CRIED, \“HOLY\”",
    [
      new StanzaModel("I Dreamed I went to that city called Glory,\nSo bright and so fair,\nWhen I entered the gate I cried, “Holy,”\nThe angels all met me there;\nThey showed me from mansion to mansion,\nAnd oh, the sights I saw,\nBut I said, “I want to see Jesus,\nThe One who died for all.”"),
      new StanzaModel("I thought when I entered that city,\nMy friends knew me well,\nThey showed me all through heaven.\nThe scenes are too num'rous to tell;\nThey showed me Abraham, Isaac,\nJacob, Mark, Luke, and Timothy,\nBut I said, “I want to give praise.\nTo the One who died for me.”"),
      new StanzaModel("I thought when I saw my Saviour, Oh! glory to God!\nI just fell right down before Him.\nSinging, “Praise to the name of the Lord;”\nI bowed down and worshipped Jehovah,\nMy friend of Calvary,\nFor I wanted to give praise to Jesus.\nFor saving a sinner like me.")
    ], "Bb",
    new ChorusModel("Then I bowed on my knees and cried,\n“Holy, Holy, Holy,”\nI clapped my hands and sang, “Glory,\nGlory to the Son of God.”")
  ),
  new HymnModel(174, "WHEN THE SAINTS MARCH IN",
    [
      new StanzaModel("I'm a pilgrim and a stranger\nWand'ring through this world of sin.\nOn my way to that fair city,\nWhen the Saints go marching in."),
      new StanzaModel("Oh, I know I'll see my Saviour\nIf my life is free from sin,\nHeavens doors will open for me\nWhen the Saints go marching in."),
      new StanzaModel("When we gather 'round the Throne\nAnd the gates are closed Within,\nI'll be shouting “Glory, Glory”\nWhen the Saints go marching in."),
      new StanzaModel("I'm waiting for the chariot\nTo swing low and I'll step in,\nOn the clouds I'll ride to Heaven\nWhen the Saints go marching in.")
    ], "Eb",
    new ChorusModel("When the saints go marching in,\nWhen the saints go marching in,\nLord, I want to be in that number\nWhen the Saints go marching in.")
  ),
  new HymnModel(175, "I’D RATHER BE CHRISTIAN",
    [
      new StanzaModel("In this world I've tried most everything,\nAnd I'm happy now to say\nThere is nothing like religion\nIn the good old-fashioned way;\nI am walking in the old-time way.\nAnd I want the world to know\nThat I'd rather be an old-time Christian\nThan anything I know."),
      new StanzaModel("There are many things I'd like to be\nAs my journey I pursue,\nI have longed to be a leader\nLike a mortal man would do;\nI would like to be a millionaire,\nWith a million to bestow,\nBut I'd rather be an old-time Christian\nThan anything I know."),
      new StanzaModel("All the world is bright since I got right,\nNow I sing and pray and shout,\nAll my burdens have been lifted\nSince the Saviour brought me out;\nI will tell the world both far and near\nAs I travel here below,\nThat I'd rather be an old-time Christian\nThan anything I know.")
    ], "Eb",
    new ChorusModel("I'd rather be an old-time Christian\nThan anything I know,\nThere's nothing like an old-time Christian\nWith a Christian love to show;\nI'm walking in the grand old highway,\nAnd I'm telling everywhere I go,\nThat I'd rather be an old-time Christian\nThan anything I know.")
  ),
  new HymnModel(176, "BLESSED ASSURANCE",
    [
      new StanzaModel("BLESSED Assurance, Jesus is mine!\nOh, what a foretaste of glory divine!\nHeir of Salvation, purchased of God,\nBorn of His Spirit, washed in His Blood."),
      new StanzaModel("Perfect submission, perfect delight,\nVisions of rapture now burst on my sight;\nAngels descending, bring from above\nEchoes of mercy, whispers of love."),
      new StanzaModel("Perfect submission, all is at rest,\nI in my Savior am happy and blest;\nWatching and waiting, looking above,\nFilled with His goodness, lost in His love.")
    ], "Eb",
    new ChorusModel("This is my story, this is my song,\nPraising my Savior all the day long;\nThis is my story, this is my song,\nPraising my Savior all the day long.")
  ),
  new HymnModel(177, "THE CLOUD AND FIRE",
    [
      new StanzaModel("AS of old, when the hosts of Israel\nWere compelled in the wilderness to dwell,\nTrusting they in their God to lead the way\nTo the light of perfect day."),
      new StanzaModel("To and fro, as a ship without a sail,\nNot a compass to guide them through the vale,\nBut the sign of their God was ever near,\nThus their fainting hearts to cheer."),
      new StanzaModel("All the days of their wand'rings they were fed,\nTo the land of the promise they were led;\nBy the hand of the Lord in guidance sure,\nThey were brought to Canaan's shore.")
    ], "Eb",
    new ChorusModel("So the sign of the fire by night,\nAnd the sign of the cloud by day,\nHovering o'er, just before,\nAs they journey on their way,\nShall a guide and a leader be,\nTill the wilderness be past,\nFor the Lord, our God,\nIn His own good time\nShall lead to the light at last.")
  ),
  new HymnModel(178, "I WON’T CROSS ALONE",
    [
      new StanzaModel("When I come to the river at ending of day,\nWhen the last winds of sorrow have blown;\nThere'll be somebody waiting to show me the way,\nI won't have to cross Jordan alone."),
      new StanzaModel("Oftentimes I'm forsaken, and weary and sad,\nWhen it seems that my friends have all gone;\nThere is one thought that cheers me and\nmakes my heart glad,\nI won't have to cross Jordan alone."),
      new StanzaModel("Though the billows of sorrow and trouble may sweep,\nChrist the Saviour will care for His own;\nTill the end of the journey, my soul He will keep,\nI won't have to cross Jordan alone.")
    ], "Eb",
    new ChorusModel("I won't have to cross Jordan alone,\nJesus died all my sins to atone;\nWhen the darkness I see, He'll be waiting for me,\nI won't have to cross Jordan alone.")
  ),
  new HymnModel(179, "SOFTLY AND TENDERLY",
    [
      new StanzaModel("Softly and tenderly Jesus is calling,\nCalling for you and for me,\nSee on the portals He's waiting and watching,\nWatching for you and for me."),
      new StanzaModel("Why should we tarry when Jesus is pleading,\nPleading for you and for me?\nWhy should we linger and heed not His mercies,\nMercies for you and for me?"),
      new StanzaModel("Time is now fleeting, the moments are passing,\nPassing from you and from me;\nShadows are gathering, death's night is coming,\nComing for you and for me."),
      new StanzaModel("Oh! For the wonderful love He has promised,\nPromised for you and for me;\nThough we have sinned, He has mercy and pardon,\nPardon for you and for me.")
    ], "Ab",
    new ChorusModel("Come home, come home,\nYe who are weary, come home;\nEarnestly, tenderly, Jesus is calling,\nCalling, O sinner, come home!")
  ),
  new HymnModel(180, "CLOSE TO THEE",
    [
      new StanzaModel("Thou, my everlasting portion,\nMore than friend or life to me,\nAll along my pilgrim journey,\nSavior let me walk with Thee,\nClose to Thee, close to Thee,\nClose to Thee, close to Thee;\nAll along my pilgrim journey,\nSavior let me walk with Thee."),
      new StanzaModel("Not for ease or worldly pleasure,\nNor for fame my prayer shall be;\nGladly will I toil and suffer,\nOnly let me walk with Thee.\nClose to Thee, close to Thee,\nClose to Thee, close to Thee;\nGladly will I toil and suffer,\nOnly let me walk with Thee."),
      new StanzaModel("Lead me through the vale of shadows,\nBear me o'er life's fitful sea;\nThen the gate of life eternal\nMay I enter, Lord, with Thee,\nClose to Thee, close to Thee;\nClose to Thee, close to Thee;\nThen the gate of life eternal\nMay I enter, Lord, with Thee.")
    ], "G"
  ),
  new HymnModel(181, "GOT ANY RIVERS? ",
    [
      new StanzaModel("“Be of good courage,” God spake unto Joshua,\nWhen o'er the river God pointed the way;\nJordan uncrossable! Things seemed impossible,\nWaters divide as they march and obey."),
      new StanzaModel("Battles to win! They would meet with their Obstacles,\nJericho's walls, too, must fall to the ground.\nGod never failed; He stood back of His promises,\nWalls had to crumble as they marched around."),
      new StanzaModel("Battles to win! They would meet with their Obstacles,\nJericho's walls, too, must fall to the ground.\nGod never failed; He stood back of His promises,\nWalls had to crumble as they marched around."),
    ], "Ab",
    new ChorusModel("Got any rivers you think are uncrossable?\nGot any mountains you can't tunnel through?\nGod specializes in things thought impossible,\nAnd He will do what no other power can do.")
  ),
  new HymnModel(182, "WHERE WE NEVER GROW OLD",
    [
      new StanzaModel("I have heard of a land on the far away strand,\n'Tis a beautiful home of the soul;\nBuilt by Jesus on high, there we never shall die,\n'Tis a land where we never grow old."),
      new StanzaModel("In that beautiful home where we'll nevermore roam,\nWe shall be in the sweet by and by;\nHappy praise to the King, through eternity sing,\n'Tis a land where we never shall die."),
      new StanzaModel("When our work here is done and the life-crown is won,\nAnd our troubles and trails are o'er,\nAll our sorrow will end, and our voices will blend,\nWith the loved ones who've gone on before.")
    ], "Eb",
    new ChorusModel("Never grow old, never grow old,\nIn a land where we'll never grow old;\nNever grow old, never grow old,\nIn a land where we'll never grow old.")
  ),
  new HymnModel(183, "LIFT HIM UP",
    [
      new StanzaModel("How to reach the masses, men of every birth?\nFor an answer Jesus gave a key,\n\“And I, if I be lifted up from the earth,\nWill draw all men unto me.\”"),
      new StanzaModel("O the world is hungry for the living bread,\nLift the Saviour up for them to see;\nTrust Him, and do not doubt the words that He said,\n\"I'll draw all men unto me.\”"),
      new StanzaModel("Don't exalt the preacher, don't exalt the pew,\nPreach the Gospel simple, full and free;\nProve Him and you will find that promise is true,\n\"I'll draw all men unto me.\”"),
      new StanzaModel("Lift Him up by living as a Christian ought,\nLet the world in you the Saviour see,\nThen men will gladly follow Him, who once taught,\n'I'll draw all men unto me.")
    ], "Ab",
    new ChorusModel("Lift Him up, lift Him up,\nStill, He speaks from eternity,\n\“And I, if I be lifted up from the earth,\nWill draw all men unto me.\”")
  ),
  new HymnModel(184, "BEULAH LAND",
    [
      new StanzaModel("I've reached the land of corn and wine,\nAnd all its riches freely mine;\nHere shines undimmed one blissful day,\nFor all my night has passed away."),
      new StanzaModel("My Savior comes and walks with me!\nAnd sweet communion here have we;\nHe gently leads me by His hand,\nFor this is Heaven's borderland."),
      new StanzaModel("A sweet perfume upon the breeze\nIs borne from ever vernal trees,\nAnd flow'rs, that never fading grow,\nWhere streams of life forever flow."),
      new StanzaModel("The zephyrs seem to float to me,\nSweet sounds of Heaven's melody,\nAs angels with the white-robed throng\nJoin in the sweet Redemption song.")
    ], "G",
    new ChorusModel("O Beulah Land, sweet Beulah Land,\nAs on Thy highest mount I stand,\nI look away across the sea,\nWhere mansions are prepared for me,\nAnd view the shining glory-shore,\nMy heaven, my home forevermore!")
  ),
  new HymnModel(185, "THE LORD BROUGHT ME OUT",
    [
      new StanzaModel("I'm so glad that the Lord brought me out;\nI'm so glad that the Lord brought me out;\nIf it had not been for Jesus, oh where would I be?\nI'm so glad that the Lord brought me out."),
      new StanzaModel("I've been happy since the Lord brought me out;\nI've been happy since the Lord brought me out;\nIf it had not been for Jesus, oh where would I be?\nI'm so glad that the Lord brought me out."),
      new StanzaModel("Aren't you glad that the Lord brought you out?\nAren't you glad that the Lord brought you out?\nIf it had not been for Jesus, oh where would I be?\nI'm so glad that the Lord brought me out."),
      new StanzaModel("I've been singing since the Lord brought me out;\nI've been singing since the Lord brought me out;\nIf it had not been for Jesus, oh where would I be?\nI'm so glad that the Lord brought me out.")
    ], "Eb"
  ),
  new HymnModel(186, "GATHERING SHEAVES",
    [
      new StanzaModel("To the harvest field away we will gladly go today,\nGathering sheaves, beautiful sheaves;\nFrom the early dawn till night we will\nlabor with our might,\nGathering sheaves, beautiful sheaves."),
      new StanzaModel("On the mountain, hill or plain we will\nharvest in the grain,\nGathering sheaves, beautiful sheaves;\nYes, we'll labor far and near, never falter,\nnever fear,\nGathering sheaves, beautiful sheaves."),
      new StanzaModel("We will sing and we will pray, and our\nMaster's voice obey,\nGathering sheaves, beautiful sheaves;\nAs we go in foreign lands, doing what our\nLord commands,\nGathering sheaves, beautiful sheaves.")
    ], "Bb",
    new ChorusModel("Gathering sheaves, beautiful sheaves,\nGathering sheaves, beautiful sheaves;\nPraise the Lord, we're on our way to that\nland of endless day,\nGathering sheaves, beautiful sheaves")
  ),
  new HymnModel(187, "SUCH LOVE",
    [
      new StanzaModel("That God should love a sinner such as I,\nShould yearn to change my sorrow into bliss,\nNor rest till He had planned to bring me nigh,\nHow wonderful is love like this!"),
      new StanzaModel("That Christ should join so freely in the scheme,\nAlthough it meant His death on Calvary,\nDid ever human tongue find nobler theme\nThan love divine that ransomed me?"),
      new StanzaModel("That for a wilful outcast such as I,\nThe Father planned, the Saviour bled and died;\nRedemption for a worthless slave to buy,\nWho long had law and grace defied."),
      new StanzaModel("And now He takes me to His heart, a son,\nHe asks me not to fill a servant's place;\nThe “far-off country” wand'rings all are done,\nWide open are His arms of grace.")
    ], "Ab",
    new ChorusModel("Such love, such wondrous love,\nSuch love, such wondrous love,\nThat God should love a sinner such as I,\nHow wonderful is love like this")
  ),
  new HymnModel(188, "DOWN FROM HIS GLORY",
    [
      new StanzaModel("Down from His glory, ever living story,\nMy God and Saviour came, and Jesus was His Name.\nBorn in a manger, to His own a stranger,\nA Man of sorrows, tears, and agony."),
      new StanzaModel("What condescension, bringing us redemption;\nThat in the dead of night, not one faint hope in sight;\nGod, gracious, tender, laid aside His splendor,\nStooping to woo, to win, to save my soul."),
      new StanzaModel("Without reluctance, flesh and blood His substance,\nHe took the form of man, revealed the hidden plan.\nO glorious mystery, Sacrifice of Calvary,\nAnd now I know Thou wert the great “I AM.”")
    ], "F",
    new ChorusModel("O how l love Him! How I adore Him!\nMy breath, my sunshine, my all in all!\nThe great Creator became my Saviour,\nAnd all God's fullness dwelleth in Him")
  ),
  new HymnModel(189, "I’LL MEET YOU In the morning",
    [
      new StanzaModel("I will meet you in the morning, by the\nBright river side,\nWhen all sorrow has drifted away;\nI'll be standing at the portals, when the\ngates open wide,\nAt the close of life's long, dreary day."),
      new StanzaModel("I'll meet you in the mornings in the sweet by and by,\nAnd exchange the old cross for a crown;\nThere will be no disappointments and\nnobody shall die,\nIn that land, e'er the sun goeth down."),
      new StanzaModel("I'll meet you in the morning, at the end of the way,\nOn the streets of that city of gold;\nWhere we all can be together and be happy for aye,\nWhile the years and the ages shall roll.")
    ], "Eb",
    new ChorusModel("I'll meet you in the morning with a “How do you do,”\nAnd we'll sit down by the river and with\nrapture “auld” acquaintance renew,\nYou'll know me in the morning, by the\nsmiles that I wear,\nWhen I meet you in the morning, in the\ncity that is built foursquare.")
  ),
  new HymnModel(190, "WATCHING YOU",
    [
      new StanzaModel("All along on the road to the soul's true abode,\nThere's an Eye watching you;\nEvery step that you take, this great Eye is awake,\nThere's an Eye watching you."),
      new StanzaModel("As you make life's great flight, keep the pathway of right,\nThere's an Eye watching you;\nGod will warn not to go in the path of the foe,\nThere's an Eye watching you."),
      new StanzaModel("Fix your mind on the goal, that sweet home of the soul,\nThere's an Eye watching you;\nNever turn from the way to the kingdom of day,\nThere's an Eye watching you.")
    ], "F",
    new ChorusModel("Watching you, watching you,\nEvery day mind the course you pursue;\nWatching you, watching you,\nThere's an all-seeing Eye watching you.")
  ),
  new HymnModel(191, "PAST THE CURTAIN OF TIME",
    [
      new StanzaModel("There’s a curtain that's drawn between earth and Heaven,\nAnd just beyond lies a beautiful clime\nWhere the evils of this life no longer can touch me;\nLord, let me look past the curtain of time."),
      new StanzaModel("I'm helpless, alone, and I want to see Jesus,\nAnd hear the sweet harbor bells chime,\nWhere my friends and dear loved ones are\nwaiting for me;\nLord, let me look past the curtain of time."),
      new StanzaModel("I'm so homesick and blue, and I want to see Jesus,\nI would like to hear those sweet harbor bells chime;\nIt would brighten my path and would vanish all fear;\nLord, let me look past the curtain of time.")
    ], "Eb",
    new ChorusModel("Lord, let me look past the curtain of sorrows and fear,\nLet me view that sunny bright clime;\nIt would strengthen my faith and would banish all fear;\nLord, let me look past the curtain of time.")
  ),
  new HymnModel(192, "HONEY IN THE ROCK",
    [
      new StanzaModel("O my brother, do you know the Savior,\nWho is wondrous, kind and true?\nHe's the “Rock of your salvation!”\nThere's Honey in the Rock for you."),
      new StanzaModel("Have you “tasted that the Lord is gracious?”\nDo you walk in the way that's new?\nHave you drank from the living Fountain?\nThere's Honey in the Rock for you."),
      new StanzaModel("Do you pray unto God the Father,\n“What wilt thou have me to do?”\nNever fear He will surely answer;\nThere's Honey in the Rock for you."),
      new StanzaModel("Then go out through the streets and byways.\nPreach the word to the many or few;\nSay to every fallen brother,\nThere's Honey in the Rock for you.")
    ], "F",
    new ChorusModel("Oh, there's Honey in the Rock, my brother.\nThere's Honey in the Rock for you;\nLeave your sins for the blood to cover,\nThere's Honey in the Rock for you.")
  ),
  new HymnModel(193, "THE UNVEILED CHRIST",
    [
      new StanzaModel("Once our blessed Christ of beauty,\nWas veiled off from human view;\nBut through suff'ring, death and sorrow,\nHe has rent the veil in two."),
      new StanzaModel("Yes, He is with God, the Father,\nInterceding there for you;\nFor He is the mighty conqueror,\nSince He rent the veil in two."),
      new StanzaModel("Holy angels bow before Him,\nMen of earth give praises due,\nFor He is the well beloved,\nSince He rent the veil in two."),
      new StanzaModel("Throughout time and endless ages,\nHeights and depths of love so true,\nHe alone can be the giver,\nSince He rent the veil in two.")
    ], "Eb",
    new ChorusModel("O behold the man of sorrows,\nO behold Him in plain view,\nLo! He is the mighty conqueror,\nSince He rent the veil in two.\nLo! He is the mighty conqueror\nSince He rent the veil in two")
  ),
  new HymnModel(194, "JESUS BREAKS EVERY FETTER",
    [
      new StanzaModel("I am now on the altar,\nI am now on the altar,\nI am now on the altar.\nWhich was made for me."),
      new StanzaModel("I will never doubt my Saviour,\nI will never doubt my Saviour,\nI will never doubt my Saviour,\nFor He cleanses me."),
      new StanzaModel("I will rest on His promise,\nI will rest on His promise,\nI will rest on His promise, which is given to me."),
      new StanzaModel("On the other side of Jordan,\nIn the sweet fields of Eden\nWhere the Tree of Life is blooming,\nThere is rest for me.")
    ], "Bb",
    new ChorusModel("Jesus breaks every fetter,\nJesus breaks every fetter,\nJesus breaks every fetter,\nFor He sets me free!\n(I will ever, ever praise Him …)\n(I will give God the glory …)\n(I will shout Hallelujah …)")
  ),
  new HymnModel(195, "HE’S THE LORD OF GLORY",
    [
      new StanzaModel("Behold what manner of Man is this\nWho stills the raging sea;\nHe heals the sick, the lame, the halt,\nAnd makes the blind to see.\nHe opens all the prison doors\nAnd sets the captives free;\nBehold what manner of man is this,\nWhat manner of man is He!"),
      new StanzaModel("Behold what manner of man is this\nWho healed the lame and halt;\nWho said thy sins be forgiven thee,\nTake up thy bed and walk.\nHe stands as the mighty Healer now,\nAnd cries look unto Me;\nBehold what manner of man is this,\nWhat manner of man is He!"),
      new StanzaModel("Behold what manner of Man is this,\nWho spake to the woman at the well.\nEverlasting life I will give thee,\nFar richer than man can tell\nAnd whosoever shall drink of the well\nShall live eternally.\nBehold what manner of Man is this,\nWhat manner of man is He!"),
      new StanzaModel("Behold what manner of Man is this,\nWho stand between God and man.\nHis eyes are as a flame of fire\nHis fan is in His hand.\nJohn saw Him in the seven churches\nAs the sun in brilliancy\nBehold what manner of Man is this,\nWhat manner of man is He!"),
      new StanzaModel("Behold what manner of Man is this,\nWho sit on His heavenly throne,\nHe rules and reigns from heaven above\nHis beloved and His own,\nHe’s the lion of the tribe of Judah,\nThe root of David is He,\nBehold what manner of Man is this\nWhat manner of Man is He!")
    ], "Eb",
    new ChorusModel("He’s the Lord of Glory,\nHe is the great “I AM”;\nThe Alpha and Omega,\nThe beginning and the end;\nHis name is Wonderful,\nThe Prince of Peace is He;\nThe Everlasting Father,\nThroughout Eternity.")
  ),
  new HymnModel(196, "I WILL PRAISE HIM",
    [
      new StanzaModel("When I saw the cleansing fountain\nOpen wide for all my sin,\nI obeyed the Spirit's wooing\nWhen He said, “wilt thou be clean?”"),
      new StanzaModel("Though the way seemed straight and narrow,\nAll I claimed was swept away;\nMy ambitions, plans, and wishes.\nAt my feet in ashes lay."),
      new StanzaModel("Then God's fire upon the altar\nOf my heart was set aflame;\nI shall never cease to praise Him,\nGlory! Glory to His name!"),
      new StanzaModel("Blessed be the name of Jesus!\nI'm so glad He took me in;\nHe's forgiven my transgressions,\nHe has cleansed my heart from sin.")
    ], "Eb",
    new ChorusModel("I will praise Him, I will praise Him,\nPraise the Lamb for sinners slain;\nGive Him glory all ye people,\nFor His blood can wash away each stain.")
  ),
  new HymnModel(197, "THERE’S A GREAT DAY COMING",
    [
      new StanzaModel("There’s great day coming, a great day coming,\nThere's a great day coming by and by,\nWhen the saints and the sinners shall be\nparted right and left,\nAre you ready for that day to come?"),
      new StanzaModel("There's a bright day coming, a bright day coming,\nThere's a bright day coming by and by,\nBut its brightness shall only come to them\nthat love the Lord,\nAre you ready for that day to come?"),
      new StanzaModel("There's a sad day coming, a sad day coming,\nThere's a sad day coming by and by,\nWhen the sinner shall hear his doom,\n“Depart, I know ye not”\nAre you ready for that day to come?")
    ], "G",
    new ChorusModel("Are you ready? Are you ready?\nAre you ready for the judgment day?\nAre you ready? Are you ready?\nFor the judgment day?")
  ),
  new HymnModel(198, "HE’S COMING SOON",
    [
      new StanzaModel("In these, the closing days of time,\nWhat joy the glorious hope affords,\nThat soon–oh, wondrous truth sublime!\nHe shall reign, King of kings and Lord of lords."),
      new StanzaModel("The signs around, in earth and air,\nOr painted on the starlit sky,\nGod's faithful witnesses declare\nThat the coming of the Saviour draweth nigh."),
      new StanzaModel("The dead in Christ who 'neath us lie,\nIn countless numbers, all shall rise\nWhen through the portals of the sky\nHe shall come to prepare our Paradise."),
      new StanzaModel("And we who, living, yet remain,\nCaught up, shall meet our faithful Lord;\nThis hope we cherish not in vain,\nBut we comfort one another by this word.")
    ], "Ab",
    new ChorusModel("He's coming soon, He's coming soon;\nWith joy we welcome His returning;\nIt may be morn; it may be night or noon,\nWe know He's coming soon.")
  ),
  new HymnModel(199, "WHAT A FRIEND",
    [
      new StanzaModel("What a friend we have in Jesus,\nAll our sins and griefs to bear!\nWhat a privilege to carry\nEverything to God in prayer!\nO what peace we often forfeit,\nO what needless pain we bear,\nAll because we do not carry\nEverything to God in prayer!"),
      new StanzaModel("Have we trials and temptations?\nIs there trouble anywhere?\nWe should never be discouraged.\nTake it to the Lord in prayer.\nCan we find a friend so faithful,\nWho will all our sorrows share?\nJesus knows our every weakness,\nTake it to the Lord in prayer."),
      new StanzaModel("Are we weak and heavy laden,\nCumbered with a load of care?\nPrecious Saviour, still our refuge,\nTake it to the Lord in prayer.\nDo thy friends despise, forsake thee?\nTake it to the Lord in prayer;\nIn His arms He'll take and shield thee,\nThou wilt find a solace there.")
    ], "F"
  ),

  new HymnModel(200, "I’M BOUND FOR PROMISE LAND",
    [
      new StanzaModel("On Jordan's stormy banks I stand,\nAnd cast a wishful eye,\nToward Canaan's fair and happy land,\nWhere my possessions lie."),
      new StanzaModel("O'er all those wide extended plains\nShines one eternal day;\nThere God the Son forever reigns,\nAnd scatters night away."),
      new StanzaModel("No chilling winds, nor pois'nous breath,\nCan reach that healthful shore;\nSickness and sorrow, pain and death,\nAre feared and felt no more."),
      new StanzaModel("When shall I reach that happy place,\nAnd be forever blest!\nWhen shall I see my Father's face,\nAnd in His bosom rest?")
    ], "",
    new ChorusModel("I am bound for the promised land,\nI am bound for the promised land;\nO who will come and go with me?\nI am bound for the promised land.")
  ),
  new HymnModel(201, "THE GREAT PHYSICIAN",
    [
      new StanzaModel("The great physician now is near,\nThe sympathizing Jesus,\nHe speaks the drooping heart to cheer,\nOh, hear the voice of Jesus;"),
      new StanzaModel("Your many sins are all forgiven,\nOh, hear the voice of Jesus;\nGo on your way in peace to heaven,\nAnd wear a crown with Jesus."),
      new StanzaModel("All glory to the dying Lamb!\nI now believe in Jesus;\nI love the blessed Saviour's name,\nI love the name of Jesus."),
      new StanzaModel("His name dispels my guilt and fear,\nNo other name but Jesus;\nO how my soul delight to hear\nThe charming name of Jesus.")
    ], "Eb",
    new ChorusModel("Sweetest note in seraph song,\nSweetest name on mortal tongue,\nSweetest carol ever sung,\nJesus, blessed Jesus.")
  ),
  new HymnModel(202, "I MUST TELL JESUS",
    [
      new StanzaModel("I must tell Jesus all of my trials;\nI cannot bear these burdens alone;\nIn my distress He kindly will help me;\nHe ever loves and cares for His own."),
      new StanzaModel("I must tell Jesus all of my troubles;\nHe is a kind, compassionate Friend;\nIf I but ask Him, He will deliver,\nMake of my troubles quickly an end."),
      new StanzaModel("Tempted and tried I need a great Saviour,\nOne who can help my burdens to bear;\nI must tell Jesus, I must tell Jesus;\nHe all my cares and sorrows will share."),
      new StanzaModel("O how the world to evil allures me!\nO how my heart is tempted to sin!\nI must tell Jesus, and He will help me\nOver the world the vict'ry to win.")
    ], "Eb",
    new ChorusModel("I must tell Jesus! I must tell Jesus!\nI cannot bear my burdens alone;\nI must tell Jesus! I must tell Jesus!\nJesus can help me, Jesus alone.")
  ),
  new HymnModel(203, "NOTHING BETWEEN",
    [
      new StanzaModel("Nothing between my soul and the Saviour,\nNaught of this world's delusive dream;\nI have renounced all sinful pleasure,\nJesus is mine, there's nothing between."),
      new StanzaModel("Nothing between like worldly pleasure;\nHabits of life, though harmless they seem,\nMust not my heart from Him ever sever;\nHe is my all, there's nothing between."),
      new StanzaModel("Nothing between, like pride or station;\nSelf or friends shall not intervene;\nThough it may cost me much tribulation,\nI am resolved, there's nothing between."),
      new StanzaModel("Nothing between, e'en many hard trials,\nThough the whole world against me\nconvene;\nWatching with prayer and much self-denial,\nI'll triumph at last, with nothing between."),
      new StanzaModel("")
    ], "G",
    new ChorusModel("Nothing between my soul and the Saviour,\nSo that His blessed face may be seen;\nNothing preventing the least of His favor,\nKeep the way clear! Let nothing between.")
  ),
  new HymnModel(204, "WHAT A DAY THAT WILL BE",
    [
      new StanzaModel("There is coming a day when no heartaches shall come,\nNo more clouds in the sky, no more tears to dim the eye;\nAll is peace forevermore on that happy golden shore,\nWhat a day, glorious day that will be."),
      new StanzaModel("There'll be no sorrow there, no more burdens to bear,\nNo more sickness, no pain, no more parting over there;\nAnd forever I will be with the One who died for me,\nWhat a day, glorious day that will be.")
    ], "Ab",
    new ChorusModel("What a day that will be when my Jesus I shall see,\nAnd l look upon His face, the One who saved me by His grace;\nWhen He takes me by the hands and\nLeads me through the Promised Land,\nWhat a day, glorious day that will be.")
  ),
  new HymnModel(205, "NEAR THE CROSS",
    [
      new StanzaModel("Jesus, keep me near the cross,\nThere a precious fountain,\nFree to all, a healing stream,\nFlows from Calv'ry's mountain."),
      new StanzaModel("Near the cross, a trembling soul,\nLove and mercy found me;\nThere the Bright and Morning Star\nSheds its beams around me."),
      new StanzaModel("Near the cross! O Lamb of God,\nBring its scenes before me;\nHelp me walk from day to day,\nWith its shadows o'er me."),
      new StanzaModel("Near the cross I'll watch and wait,\nHoping, trusting, ever,\nTill I reach the golden strand,\nJust beyond the river.")
    ], "F",
    new ChorusModel("In the cross, in the cross,\nBe my glory ever;\nTill my raptured soul shall find\nRest beyond the river.")
  ),
  new HymnModel(206, "PASS ME NOT ",
    [
      new StanzaModel("Pass me not, o gentle Saviour,\nHear my humble cry;\nWhile on others Thou art calling,\nDo not pass me by."),
      new StanzaModel("Let me at Thy throne of mercy\nFind a sweet relief;\nKneeling there in deep contrition,\nHelp my unbelief."),
      new StanzaModel("Trusting only in Thy merit,\nWould I seek Thy face;\nHeal my wounded, broken spirit,\nSave me by Thy grace."),
      new StanzaModel("Thou the Spring of all my comfort,\nMore than life to me,\nWhom have I on earth beside Thee?\nWhom in heaven but Thee?")
    ], "Ab",
    new ChorusModel("Saviour, Saviour,\nHear my humble cry;\nWhile on others Thou art calling,\nDo not pass me by.")
  ),
  new HymnModel(207, "I see a crimson stream",
    [
      new StanzaModel("On Calvary's hill of sorrow\nWhere sin's demands were paid,\nAnd rays of hope for tomorrow\nAcross our path were laid."),
      new StanzaModel("Today no condemnation\nAbides to turn away\nMy soul from His salvation,\nHe's in my heart to stay."),
      new StanzaModel("When gloom and sadness whisper\nYou've sinned, no use to pray;\nI look away to Jesus,\nAnd He tells me to say;"),
      new StanzaModel("And when we reach the portal\nWhere life forever reigns,\nThe ransomed hosts grand final\nWill be his glad refrain.")
    ], "Bb",
    new ChorusModel("I see a crimson stream of blood,\nIt flows from Calvary,\nIts waves which reach the throne of God,\nAre sweeping over me.")
  ),
  new HymnModel(208, "COME TO THE FEAST",
    [
      new StanzaModel("“All things are ready,” come to the feast!\nCome, for the table now is spread;\nYe famishing, ye weary, come,\nAnd thou shalt be richly fed."),
      new StanzaModel("“All things are ready,” come to the feast!\nCome, for the door is open wide;\nA place of honor is reserved\nFor you at the Master's side."),
      new StanzaModel("“All things are ready,” come to the feast!\nCome, while He waits to welcome thee;\nDelay not while this day is thine,\nTomorrow may never be."),
      new StanzaModel("“All things are ready,” come to the feast!\nLeave every care and worldly strife;\nCome, feast upon the love of God,\nAnd drink everlasting life.")
    ], "",
    new ChorusModel("Hear the invitation,\nCome, “whosoever will,”\nPraise God for full salvation\nFor “whosoever will.”")
  ),
  new HymnModel(209, "LORD, I’M COMING HOME",
    [
      new StanzaModel("I've wandered far away from God,\nNow I'm coming home;\nThe path of sin too long I've trod,\nLord I'm coming home."),
      new StanzaModel("I've wasted many precious years,\nNow I'm coming home;\nI now repent with bitter tears,\nLord, I'm coming home."),
      new StanzaModel("I'm tired of sin and straying, Lord,\nNow I'm coming home;\nI'll trust Thy love, believe Thy Word,\nLord, I'm coming home."),
      new StanzaModel("My Soul is sick, my heart is sore,\nNow I'm coming home;\nMy strength renew, my hope restore,\nLord, I'm coming home."),
      new StanzaModel("My only hope, my only plea,\nNow I'm coming home;\nThat Jesus died, and died for me.\nLord, I'm coming home."),
      new StanzaModel("I need His cleansing blood, I know,\nNow I'm coming home;\nO wash me whiter than the snow,\nLord, I'm coming home.")
    ], "Ab",
    new ChorusModel("Coming home, coming home,\nNevermore to roam;\nOpen wide Thine arms of love,\nLord, I'm coming home.")
  ),
  new HymnModel(210, "THE EASTERN GATE",
    [
      new StanzaModel("I will meet you in the morning,\nJust inside the Eastern Gate,\nThen be ready, faithful pilgrim,\nLest with you it be too late."),
      new StanzaModel("If you hasten off to glory,\nLinger near the Eastern Gate,\nFor I'm coming in the morning,\nSo you'll not have long to wait."),
      new StanzaModel("Keep your lamps all trimmed and burning,\nFor the Bridegroom watch and wait,\nHe'll be with us at the meeting,\nJust inside the Eastern Gate."),
      new StanzaModel("O the joys of that glad meeting\nWith the saints who for us wait,\nWhat a blessed, happy meeting,\nJust inside the Eastern Gate."),
      new StanzaModel("")
    ], "Ab",
    new ChorusModel("I will meet you, I will meet you\nJust inside the Eastern Gate over there;\nI will meet you, I will meet you,\nI will meet you in the morning over there.")
  ),
  new HymnModel(211, "JESUS PAID IT ALL",
    [
      new StanzaModel("I hear the Savior say,\n\“Thy strength indeed is small,\nChild of weakness, watch and pray,\nFind in Me thine all in all.\”"),
      new StanzaModel("Lord, now indeed I find\nThy pow'r, and Thine alone,\nCan change the leper's spots,\nAnd melt the heart of stone."),
      new StanzaModel("Since nothing good have I\nWhereby Thy grace to claim,\n I'll wash my garments white\nIn the blood of Calv'ry's Lamb.")
    ], "Eb",
    new ChorusModel("Jesus paid it all.\nAll to Him I owe;\nSin had left a crimson stain;\nHe washed it white as snow.")
  ),
  new HymnModel(212, "I BELIEVE GOD ",
    [
      new StanzaModel("I believe God! I Believe God!\nAsk what you will and it shall be done;\nTrust and obey, believe it and say:\nI Believe, I believe God."),
      new StanzaModel("And if you want Salvation now\nAnd the Holy Ghost and power,\nJust trust and obey, believe it and say;\nI believe, I believe God."),
      new StanzaModel("O Land of rest, for thee I sigh!\nWhen will the moment come\nWhen I shall lay my armor by,\nAnd dwell in peace at home?"),
      new StanzaModel("We'll work till Jesus comes,\nWe'll work till Jesus comes,\nWe'll work till Jesus comes,\nAnd we'll be gathered home!"),
      new StanzaModel("To Jesus Christ I fled for rest;\nHe bade me cease to roam;\nAnd lean for succor on His breast\nTill He conduct me home?"),
      new StanzaModel("I sought at once my Saviour's side,\nNo more my steps shall roam;\nWith Him I'll brave death's chilling tide\nAnd reach my heavenly home."),
      new StanzaModel("No Tranquil joys on earth I know\nNo peaceful, sheltering dome;\nThis world's a wilderness of woe,\nThis world is not my Home.")
    ], "Bb",
    new ChorusModel("I believe God! I Believe God!\nAsk what you will and it shall be done;\nTrust and obey, believe it and say:\nI Believe, I believe God.")
  ),
  new HymnModel(213, "WE’LL WORK TILL JESUS COMES ",
    [
      new StanzaModel("O land of rest, for thee I sigh!\nWhen will the moment come\nWhen I shall lay my armor by,\nAnd dwell in peace at home?"),
      new StanzaModel("To Jesus Christ I fled for rest;\nHe bade me cease to roam;\nAnd lean for succor on His breast\nTill He conduct me home?"),
      new StanzaModel("I sought at once my Saviour's side,\nNo more my steps shall roam;\nWith Him I'll brave death's chilling tide\nAnd reach my heavenly home."),
      new StanzaModel("No Tranquil joys on earth I know\nNo peaceful, sheltering dome;\nThis world's a wilderness of woe,\nThis world is not my Home.")
    ], "Fb",
    new ChorusModel("We'll work till Jesus comes,\n We'll work till Jesus comes,\n We'll work till Jesus comes,\n And we'll be gathered home!")
  ),
  new HymnModel(214, "THE WINDOWS OF HEAVEN",
    [
      new StanzaModel("THE Windows of Heaven are open,\nThe blessings are falling tonight,\nThere's joy, joy, joy in my heart,\nFor Jesus makes everything right;\nI gave Him my old tattered garment,\nHe gave me a robe of pure white,\nI'm feasting today on the Manna,\nAnd that's why I'm happy tonight.")
    ], "Eb"
  ),
  new HymnModel(215, "PRECIOUS MEMORIES",
    [
      new StanzaModel("Precious memories, unseen angels,\nSent from somewhere to my soul;\nHow they linger, ever near me,\nAnd the sacred past unfold."),
      new StanzaModel("Precious father, loving mother,\nFly across the lonely years;\nAnd old home scenes of my childhood,\nIn fond memory appear."),
      new StanzaModel("In the stillness of the midnight,\nEchoes from the past I hear;\nOld-time singing, gladness bringing,\nFrom that lovely land somewhere."),
      new StanzaModel("As I travel on life's pathway,\nKnow not what the years may hold;\nAs I ponder, hope grows fonder,\nPrecious memories flood my soul."),
      new StanzaModel("Precious memories of the prophet,\nFlood my soul from day to day,\nI remember scenes so precious\nThat can never pass away."),
      new StanzaModel("I've heard the Message and Its signal\nThat day's end is near at hand,\nBut I remember that He promised\nHe'd return for those who'd stand."),
      new StanzaModel("Precious memories, glorious meetings\nAcross this land from sea to sea\nWhere I heard the prophet's Message\nThat brought Life and hope to me."),
      new StanzaModel("Precious memories in this storehouse\nWhere the Food was laid away,\nWe've returned to where he stored It,\nSpiritual Food against this day.")
    ], "Ab",
    new ChorusModel("Precious memories, how they linger,\nHow they ever flood my soul;\nIn the stillness of the midnight,\nPrecious, sacred scenes unfold.")
  ),
  new HymnModel(216, "THE END TIME",
    [
      new StanzaModel("I Look and see earth's sorrowing picture,\nThe hoarding mobs for selfish again;\nTheir toil of hand for ease and comfort,\nCan they not see, their doom is sealed, it's\nall in vain."),
      new StanzaModel("Sirs, this is the time! Our prophet spoke of,\nThe Angel came with a Shout,\nThe mountain shook as His Voice cried out,\n“Time is no more,” loud and clear the Shout went forth."),
      new StanzaModel("Have you considered the end-time Message?\nHave you considered Malachi 4?\nRevelation 10:7 and St. Luke 17\nProclaims this Message now, and then\nforevermore.")
    ], "F",
    new ChorusModel("The end is here, it's now at hand,\nThe bride is gathering; the world is failing;\nIsrael's awak'ning; nations are breaking;\nOur prophet taught us, we believe the end\nis here.")
  ),
  new HymnModel(217, "IT IS NO SECRET",
    [
      new StanzaModel("The chimes of time ring out the news, another day is through\nSomeone slipped and fell, was that someone you?\nYou may have longed for added strength your courage to renew\nDo not be disheartened, I have news for you"),
      new StanzaModel("There is no night for in his light you'll never walk alone\nYou'll always feel at home, wherever you may roam\nThere is no power can conquer you while God is on your side\nTake him at his promise, don't run away and hide")
    ], "C",
    new ChorusModel("IT is no secret what God can do;\nWhat he's done for others, He'll do for you.\nWith arms wide open, He'll pardon you,\nIt is no secret what God can do.")
  ),
  new HymnModel(218, "HOW GREAT IS OUR GOD!",
    [
      new StanzaModel("When I consider the works of my God,\nThe moon and the stars, the path that He trod.\nThe sheep and the oxen, the beast of the field,\nAll of these wonders make me know that He's real."),
      new StanzaModel("He used our prophet in many a way\nTo show forth His greatness in this our day.\nHe never changes; He's always the same,\nSo worship and praise Him and love His dear Name.")
    ], "F",
    new ChorusModel("How great is our God! How great is His Word!\nHe's the greatest one that ever was heard.\nHe rolled back the waters of the mighty\nRed Sea,\nAnd He said, \“I will lead you,\nPut your trust in me.\”")
  ),
  new HymnModel(219, "SO JUST BE FAITHFUL",
    [
      new StanzaModel("In these days of trials so near the end,\nWhen Christ from Glory doth now descend,\nMen's hearts are failing and filled with fear,\nWe know the end time is surely here."),
      new StanzaModel("In every church age a star did shine,\nTo help God's people a Truth to find;\nIn this last church age a star shines bright,\nSo friend receive It, walk in the Light."),
      new StanzaModel("Do not be fearful or filled with dread,\nYour prophet sleepeth, he is not dead;\nThe Bride is waiting now for that Voice,\nAnd in this hope we can now rejoice."),
      new StanzaModel("His Word of promise he gave the Bride,\nFrom his White Charger the prophet cried,\n“Yet one more time shall I ride this trail.”\nTHUS SAITH THE LORD can never fail.")
    ], "Eb",
    new ChorusModel("So just be faithful, believe His Word;\nStay with the Message that you have heard;\nList' to His prophet, his Message heed;\nWalk in the Light where His star doth lead.")
  ),
  new HymnModel(220, "BLEST BE THE TIE THAT BINDS",
    [
      new StanzaModel("Blest be the tie that binds\nOur hearts in Christian love;\nThe fellowship of kindred minds\nIs like to that above."),
      new StanzaModel("Before our Father's throne,\nWe pour our ardent prayers;\nOur fear, our hopes, our aims are one,\nOur comforts and our cares."),
      new StanzaModel("We share our mutual woes,\nOur mutual burdens bear;\nAnd often for each other flows\nThe sympathizing tear."),
      new StanzaModel("When we asunder part,\nIt gives us inward pain;\nBut we shall still be joined in heart,\nAnd hope to meet again.")
    ], "F",
  ),
  new HymnModel(221, "GOD BE WITH YOU",
    [
      new StanzaModel("God be with you till we meet again!\nBy His counsels guide, uphold you,\nWith His sheep securely fold you;\nGod be with you till we meet again!"),
      new StanzaModel("God be with you till we meet again!\n'Neath His wings securely hide you,\nDaily manna still provide you;\nGod be with you till we meet again!"),
      new StanzaModel("God be with you till we meet again!\nWhen life's perils thick confound you,\nPut His arms unfailing round you;\nGod be with you till we meet again!"),
      new StanzaModel("God be with you till we meet again!\nKeep love's banner floating o'er you,\nSmite death's threat'ning wave before you;\nGod be with you till we meet again!"),
      new StanzaModel("")
    ], "C",
    new ChorusModel("Till we meet! Till we meet!\nTill we meet at Jesus feet;\nTill we meet! Till we meet!\nGod be with you till we meet again!")
  ),
  new HymnModel(222, "TAKE THE NAME OF JESUS",
    [
      new StanzaModel("Take the name of Jesus with you,\nChild of sorrow and of woe;\nIt will joy and comfort give you,\nTake it, then, where'er you go."),
      new StanzaModel("Take the name of Jesus ever,\nAs a shield from every snare;\nIf temptations round you gather,\nBreathe that Holy Name in prayer."),
      new StanzaModel("O the precious Name of Jesus!\nHow it thrills our souls with joy,\nWhen His loving arms receive us,\nAnd His songs our tongues employ!"),
      new StanzaModel("At the name of Jesus bowing,\nFalling prostrate at His feet,\nKing of Kings in Heaven we'll crown Him,\nWhen our journey is complete.")
    ], "Ab",
    new ChorusModel("Precious name, O how sweet!\nHope of earth and joy of Heaven;\nPrecious name, O how sweet!\nHope of earth and joy of Heaven.")
  ),
  new HymnModel(223, "WE HAVE AN ANCHOR ",
    [
      new StanzaModel("Will your anchor hold in the storms of life,\nWhen the clouds unfold their wings of strife?\nWhen the strong tides lift, and the cable strain,\nWill your anchor shift, or firm remain?"),
      new StanzaModel("It is safely moor'd, 'twill the storm withstand,\nFor 'tis well secured by the Saviour's hand;\nAnd the cables, pass'd from His heart to mine,\nCan defy the blast, thro' strength divine."),
      new StanzaModel("It will firmly hold in the straits of fear,\nWhen the breakers have told the reef is near;\nTho' the tempest rave, and the wild winds blow,\nNot an angry wave shall our barque o'erflow."),
      new StanzaModel("It will surely hold in the floods of death,\nWhen the waters cold chill our latest breath;\nOn the rising tide it can never fail,\nWhile our hopes abide within the veil!"),
      new StanzaModel("When our eyes behold, thro' the gathering night,\nThe city of gold, our harbour bright,\nWe shall anchor fast by the heav'nly shore,\nWith the storms all past for evermore.")
    ], "Ab",
    new ChorusModel("We have an anchor that keeps the soul\nSteadfast and sure while the billows roll,\nFasten'd to the Rock which cannot move\nGrounded firm and deep in the Saviour's love.")
  ),
  new HymnModel(224, "MY FAITH HAS FOUND A RESTING PLACE",
    [
      new StanzaModel("My faith has found a resting place,\nNot in device nor creed;\nI trust the ever living One,\nHis wounds for me shall plead."),
      new StanzaModel("Enough for me that Jesus saves,\nThis ends my fear and doubt;\nA sinful soul I come to Him,\nHe'll never cast me out."),
      new StanzaModel("My heart is leaning on the Word,\nThe written Word of God;\nSalvation by my Saviour's name,\nSalvation through His blood."),
      new StanzaModel("My great Physician heals the sick,\nThe lost He came to save;\nFor me His precious blood He shed,\nFor me His life He gave.")
    ], "Eb",
    new ChorusModel("I need no other argument,\nI need no other plea,\nIt is enough that Jesus died,\nAnd that He died for me.")
  ),
  new HymnModel(225, "JESUS IS PASSING THIS WAY",
    [
      new StanzaModel("Is there a heart that is waiting,\nLonging for pardon to-day?\nHear the glad message proclaiming,\nJesus is passing this way."),
      new StanzaModel("Is there a heart that has wandered?\nCome with thy burden to-day;\nMercy is tenderly pleading,\nJesus is passing this way."),
      new StanzaModel("Is there a heart that is broken?\nWeary and sighing for rest?\nCome to the arms of thy Saviour,\nPillow thy head on His breast."),
      new StanzaModel("Come to thy only Redeemer,\nCome to His infinite love;\nCome to the gate that is leading\nHomeward to mansions above.")
    ], "F",
    new ChorusModel("Jesus is passing this way … This way …\nTo-day,….Jesus is passing this way…\nIs passing this way to-day.")
  ),
  new HymnModel(226, "TO GOD BE THE GLORY",
    [
      new StanzaModel("To God be the glory, great things He hath done,\nSo loved He the world that He gave us His son,\nWho Yielded His life an atonement for sin\nAnd opened the life Gate that all may go in."),
      new StanzaModel("O perfect redemption, the purchase of blood,\nTo every believer the promise of God;\nThe Vilest offender who truly believes,\nThat moment from Jesus a pardon receives."),
      new StanzaModel("Great things He hath taught us, great things\nHe hath done,\nAnd great our rejoicing through Jesus the Son;\nBut purer, and higher, and greater will be\nOur wonder, our transport when Jesus we see.")
    ], "Eb",
    new ChorusModel("Praise the Lord, praise Lord,\nLet the earth hear His voice!\nPraise the Lord, praise the Lord,\nLet the people rejoice!\nO come to the Father, through Jesus the son,\nAnd give Him the glory, great things He hath done.")
  ),
  new HymnModel(227, "BURN, BURN, HOLY-SPIRIT",
    [
      new StanzaModel("Burn, burn, Holy Spirit burn in me\nSet my heart on fire,\nFill me with the Holy Ghost,\nAnd God's full desire,\nMake me like the Christ of old,\nHealing and raising the dead,\nGive me the power that Jesus had,\nThrough the blood that was shed.")
    ], "C"
  ),
  new HymnModel(228, "SEND THE LIGHT", [
    new StanzaModel("There’s a call comes ringing o’er the restless wave,\nSend the light! Send the light!\nThere are souls to rescue, there are souls to save,\nSend the light! Send the light!"),
    new StanzaModel("We have heard the Macedonian call to-day\nSend the light! Send the light!\nAnd a golden off’ ring at the Cross we lay,\nSend the light! Send the light!"),
    new StanzaModel("Let us pray that grace may ev’rywhere abound,\nSend the light! Send the light!\nAnd a Christ-like spirit ev’rywhere be found,\nSend the light! Send the light!"),
    new StanzaModel("Let us not grow weary in the work of love\nSend the light! Send the light!\nLet us gather jewels for a crown above,\nSend the light! Send the light!")
    ], "F",
      new ChorusModel("Send the light, the blessed Gospel light!\nLet it shine from shore to shore!\nSend the light! And let its radiant beams\nLight the world for evermore.")
  ),

  new HymnModel(229, "TAKE MY LIFE LET IT BE", [
      new StanzaModel("Take my life, and let it be\nConsecrated, Lord, to Thee;\nTake my moments and my days,\nLet them flow in ceaseless praise."),
      new StanzaModel("Take my hands, and let them move\nAt the impulse of Thy love;\nTake my feet and let them be\nSwift and beautiful for Thee."),
      new StanzaModel("Take my voice, and let me sing\nAlways, only, for my King;\nTake my lips, and let them be\nFilled with messages from Thee."),
      new StanzaModel("Take my silver and my gold,\nNot a mite would I withhold;\nTake my intellect, and use\nEv’ry power as Thou shalt choose."),
      new StanzaModel("Take my will and make it Thine,\nIt shall be no longer mine;\nTake my heart, it is Thine own;\nIt shall be Thy royal throne."),
      new StanzaModel("Take my love; my Lord, I pour\nAt Thy feet its treasure store;\nTake myself, and I will be\nEver only ALL for Thee!")
  ], "G"),

  new HymnModel(230, "LOOK AND LIVE", [
      new StanzaModel("I've a message from the Lord, hallelujah!\nThe message unto you I'll give.\n'Tis recorded in His word, hallelujah!\nIt is only that you “look and live.”"),
      new StanzaModel("I've a message full of love, Hallelujah!\nA message, O my friend, for you.\n'Tis a message from above, hallelujah!\nJesus said it, and I know 'tis true."),
      new StanzaModel("Life is offered unto you, hallelujah!\nEternal life your soul shall have,\nIf you'll only look to Him, hallelujah!\nLook to Jesus Who alone can save.")
    ], "C",
      new ChorusModel("“Look and live” … my brother, live …\nLook to Jesus now and live,\nTis recorded in His word, hallelujah!\nIt is only that you “look and live.”")
  ),

  new HymnModel(231, "COUNT YOUR BLESSINGS", [
    new StanzaModel("When upon life's billows you are tempest-tossed,\nWhen you are discouraged, thinking all is lost,\nCount your many blessings, name them one by one,\nAnd it will surprise you what the Lord hath done."),
    new StanzaModel("Are you ever burdened with a load of care?\nDoes the cross seem heavy you are called to bear?\nCount your many blessings, every doubt will fly,\nAnd you will be singing as the days go by."),
    new StanzaModel("So amid the conflict, whether great or small,\nDo not be discouraged, God is over all,\nCount your many blessings, angels will attend,\nHelp and comfort give you to your journey's end.")
  ], "Bb",
      new ChorusModel("Count your blessings, name them one by one,\nCount your blessings, see what God hath done;\nCount your blessings, name them one by one,\nAnd it will surprise you what the Lord hath done.")
  ),

  new HymnModel(232, "THE MOVE IS ON", [
      new StanzaModel("The move is on my Lord the move is on,\nThe move is on my Lord the move is on,\nI can hear the rustle in the mulberry tree,\nAnd I know, I know, I know the move is on."),
      new StanzaModel("Move on brother, move on sister.\nThis is the moving day,\nMove a little closer,\nWhere the streams are flowing,\nMove on brother, move on.")
  ], "F"),

  new HymnModel(233, "SPREAD THE TIDINGS ROUND", [
      new StanzaModel("Oh, spread the tidings round,\nWherever man is found,\nWherever human heart and human woes abound;\nLet ev'ry Christian tongue proclaim the joyful sound:\n“The Comforter has come!”"),
      new StanzaModel("The long, long night is past,\nThe morning breaks at last;\nAnd hush'd the dreadful\nWall and fury of the blast,\nAs o'er the golden hills\nThe day advances fast!\n“The Comforter has come!”"),
      new StanzaModel("Lo, the great King of kings,\nWith healing in His wings,\nTo ev'ry captive soul\na full deliv'rance brings;\nAnd thro' the vacant cells\nthe songs of triumph rings:\n“The Comforter has come!”"),
      new StanzaModel("O boundless love divine!\nHow shall this tongue of mine\nTo wond'ring mortals tell\nThe matchless grace divine\nThat I, a child of hell,\nShould in His image shine!\n“The Comforter has come!”"),
      new StanzaModel("Sing till the echoes fly,\nAbove the vaulted sky,\nAnd all the saints above to all below reply,\nIn strains of endless love, the song that ne'er will die:\n“The Comforter has come!”")
  ], "C",
      new ChorusModel("The Comforter has come,\nthe Comforter has come!\nThe Holy Ghost from Heaven,\nthe Father's promise giv'n;\nOh, spread the tiding round\nWherever man is found,\nThe Comforter has come!")
  ),

  new HymnModel(234, "WHEN JESUS COMES TO REWARD", [
      new StanzaModel("When Jesus comes to reward His servants,\nWhether it be noon or night,\nFaithful to Him will He find us watching,\nWith our lamps all trimm'd and bright?"),
      new StanzaModel("If at the dawn of the early morning,\nHe shall call us one by one.\nWhen to the Lord we restore our talents,\nWill He answer thee “Well done?”"),
      new StanzaModel("Have we been true to the trust He left us?\nDo we seek to do our best?\nIf in our heart there is naught condemns us,\nWe shall have a glorious rest."),
      new StanzaModel("Blessed are those whom the Lord finds watching,\nIn His glory they shall share;\nIf He should come at the dawn or midnight,\nWill He find us watching there?")
  ], "C",
      new ChorusModel("Oh, can we say we are ready, brother,\nReady for the soul's bright home?\nSay, will He find you and me still watching,\nWaiting, waiting, when the Lord shall come?")
  ),

  new HymnModel(235, "CHRISTIAN, SEEK NOT YET REPOSE", [
      new StanzaModel("Christian, seek not yet repose;\nHear thy guardian angel say,\nThou art in the midst of foes:\nWatch and pray!"),
      new StanzaModel("Gird thy heavenly armour on;\nWear it ever, night and day,\nAmbushed lies the evil one:\nWatch and pray!"),
      new StanzaModel("Hear the victors who o’ercame;\nStill they mark each warrior’s way;\nAll with one sweet voice exclaim:\nWatch and pray!"),
      new StanzaModel("Hear, above all, hear thy Lord;\nHim thou lovest to obey;\nHide within thy heart his word:\nWatch and pray!"),
      new StanzaModel("Watch, as if on that alone;\nHung the issue of the day,\nPray, that help may be sent down:\nWatch and pray!")
  ], "Eb"),

  new HymnModel(236, "GOD OUR HELP", [
    new StanzaModel("O God, our help in ages past,\nOur hope for years to come,\nOur shelter from the stormy blast,\nAnd our eternal home!"),
    new StanzaModel("Under the shadow of Thy throne\nThy saints have dwelt secure;\nSufficient is Thine arm alone;\nAnd our defence is sure."),
    new StanzaModel("Before the hills in order stood,\nOr earth received her frame,\nFrom everlasting Thou art God,\nTo endless years the same."),
    new StanzaModel("A thousand ages in Thy sight\nAre like an evening gone\nShort as the watch that ends the night\nBefore the rising sun."),
    new StanzaModel("Time, like an ever rolling stream,\nBears all its sons away;\nThey fly forgotten, as a dream\nDies at the opening day."),
    new StanzaModel("O God, our help in ages past,\nOur hope for years to come,\nBe Thou our Guard while troubles last,\nAnd our eternal home.")
  ], "C"),

  new HymnModel(237, "PERFECT PEACE", [
      new StanzaModel("Peace, perfect peace, in this dark world of sin?\nThe blood of Jesus whispers peace within."),
      new StanzaModel("Peace, perfect peace, by thronging duties pressed?\nTo do the will of Jesus, this is rest."),
      new StanzaModel("Peace, perfect peace, with sorrows surging round?\nOn Jesus bosom naught but calm is found."),
      new StanzaModel("Peace, perfect peace, with loved ones far away?\nIn Jesus keeping we are safe, and they"),
      new StanzaModel("Peace, perfect peace, our future all unknown?\nJesus we know, and He is on the throne."),
      new StanzaModel("Peace, perfect peace, death shadowing us and ours?\nJesus has vanquished death and all its powers,"),
      new StanzaModel("It is enough earth’s struggles soon shall cease,\nAnd Jesus calls us to heaven’s perfect peace.")
  ], "Eb"),

  new HymnModel(238, "I WILL SING OF MY REDEEMER", [
      new StanzaModel("I will sing of my Redeemer,\nAnd His wondrous love to me;\nOn the cruel cross He suffered,\nFrom the curse to set me free."),
      new StanzaModel("I will tell the wondrous story,\nHow my lost estate to save,\nIn His boundless love and mercy,\nHe the ransom freely gave."),
      new StanzaModel("I will praise my Dear Redeemer,\nHis triumphant power I will tell,\nHow the victory He giveth,\nOver sin, and death, and hell."),
      new StanzaModel("I will sing of my Redeemer,\nAnd His heavenly love to me;\nHe from death to life hath brought me,\nSon of God, with Him to be.")
  ], "Eb",
      new ChorusModel("Sing, oh sing..... of my Redeemer....\nWith His Blood... He purchased me..\nOn the cross... He sealed my pardon,\nPaid the debt... and made me free.")
  ),

  new HymnModel(239, "NO FRIEND LIKE JESUS", [
      new StanzaModel("There’s not a friend like the lowly Jesus.\nNo, not one! No, not one!\nNone else can heal all our soul's diseases\nNo, not one! No, not one!"),
      new StanzaModel("No friend like Him is so high and holy,\nNo, not one! No, not one!\nAnd yet no friend is so meek and lowly,\nNo, not one! No, not one!"),
      new StanzaModel("There's not an hour that He is not near us\nNo, not one! No, not one!\nNo night so dark but His love can cheer us,\nNo, not one! No, not one!"),
      new StanzaModel("Did ever saint find this Friend forsake him?\nNo, not one! No, not one!\nOr sinner find that He would not take him?\nNo, not one! No, not one!"),
      new StanzaModel("Was e'er a gift like the Saviour given?\nNo, not one! No, not one!\nWill He refuse us a home in heaven?\nNo, not one! No, not one!")
  ], "F",
      new ChorusModel("Jesus knows all about our struggle\nHe will guide till the day is done.\nThere's not a Friend like the lowly Jesus,\nNo, not one! No, Not one!")
  ),

  new HymnModel(240, "TELL ME THE OLD STORY", [
      new StanzaModel("Tell me the old, old story\nOf unseen things above,\nOf Jesus and His glory,\nOf Jesus and His love.\nTell me the story simply,\nAs to a little child;\nFor I am weak and weary,\nAnd helpless and defiled."),
      new StanzaModel("Tell me the story slowly\nThat I may take it in\nThat wonderful redemption,\nGod's remedy for sin.\nTell me the story often,\nFor I forget so soon!\nThe “early dew” of morning\nHas passed away at noon."),
      new StanzaModel("Tell me the story softly,\nWith earnest tones, and grave;\nRemember! I'm the sinner\nWhom Jesus came to save\nTell me that story always,\nIf you would really be\nIn any time of trouble\nA comforter to me."),
      new StanzaModel("Tell me the same old story\nWhen you have cause to fear\nThat this world's empty glory\nIs costing me too dear\nYes; and when the world's glory\nIs dawning on my soul,\nTell me the old, old story,\n“Christ Jesus makes thee whole.”")
  ], "C",
      new ChorusModel("Tell me the old, old story\nTell me the old, old story\nTell me the old, old story\nOf Jesus and His love.")
  ),

  new HymnModel(241, "TRUST AND OBEY", [
      new StanzaModel("When we walk with the Lord,\nIn the light of His word,\nWhat a glory He sheds on our way!\nWhile we do His good will\nHe abides with us still,\nAnd with all who will trust and obey."),
      new StanzaModel("Not a shadow can rise,\nNot a cloud in the skies,\nBut His smile quickly drives it away;\nNot a doubt nor a fear\nNot a sigh nor a tear,\nCan abide while we trust and obey"),
      new StanzaModel("Not a burden we bear,\nNot a sorrow we share,\nBut our toil He doth richly repay:\nNot a grief nor a loss,\nNot a frown nor a cross,\nBut it blest if we trust and obey."),
      new StanzaModel("But we never can prove,\nThe delight of His love,\nUntil all on the altar we lay:\nFor the favour He shows,\nAnd the joy He bestows,\nAre for them who will trust and obey."),
      new StanzaModel("Then in fellowship sweet,\nWe will sit at His feet,\nOr we’ll walk by His side in the way;\nWhat He says we will do,\nWhere He sends, we will go,\nNever fear, only trust and obey.")
  ], "F",
      new ChorusModel("Trust and obey:\nFor there’s no other way,\nTo be happy in Jesus,\nBut to trust and obey.")
  ),

  new HymnModel(242, "TRUST IN GOD, DO THE RIGHT", [
      new StanzaModel("Courage brother! Do not stumble\nThough thy path be dark as night;\nThere's a star to guide the humble,\nTrust in God, and do the right."),
      new StanzaModel("Let the road be rough and dreary,\nAnd its end far out of sight;\nFoot it bravely! Strong or weary;\nTrust in God, and do the right."),
      new StanzaModel("Perish policy and cunning!\nPerish all that fears the light,\nWhether losing, whether winning,\nTrust in God, and do the right."),
      new StanzaModel("Trust no party, sect, or faction,\nTrust no leaders in the light,\nBut in every word and action,\nTrust in God, and do the right."),
      new StanzaModel("Trust no lovely forms of passion,\nFriends may look like angels bright;\nTrust no custom, school, or fashion,\nTrust in God, and do the right."),
      new StanzaModel("Simple rule, and safest guiding,\nInward peace, and inward might;\nStar upon our path abiding,\nTrust in God, and do the right."),
      new StanzaModel("Some will hate thee, some will love thee\nSome will flatter some will slight;\nCease from man, and look above thee,\nTrust in God, and do the right.")
  ], "Ab"),

  new HymnModel(243, "GOD MOVES MYSTERIOUSLY", [
    new StanzaModel("God moves in a mysterious way\nHis wonders to perform;\nHe plants His footsteps in the sea\nAnd rides upon the storm."),
    new StanzaModel("Deep in unfathomable mines\nOf never-falling skill,\nHe treasures up His bright designs\nAnd works His Sovereign will."),
    new StanzaModel("Ye fearful saints, fresh courage take!\nThe clouds ye so much dread\nAre big with mercy, and shall break\nIn blessing on your head."),
    new StanzaModel("Judge not the Lord by feeble sense\nBut trust Him for His grace;\nBehind a frowning providence\nHe hides a smiling face."),
    new StanzaModel("His purposes will ripen fast,\nUnfolding every hour;\nThe bud may have a bitter taste,\nBut sweet will be the flower."),
    new StanzaModel("Blind unbelief is sure to err,\nAnd scan His work in vain;\nGod is His own interpreter,\nAnd He will make it plain.")
  ], "Bb"),

  new HymnModel(244, "IT IS WELL WITH MY SOUL", [
    new StanzaModel("When peace like a river, attendeth my way\nWhen sorrows, like sea-billows, roll:\nWhatever my lot, Thou has taught me to know,\n“It is well, it is well with my soul”"),
    new StanzaModel("If Satan should buffet, if trials should come,\nLet this blest assurance control,\nThat Christ hath regarded my helpless estate,\nAnd hath shed His own blood for my soul."),
    new StanzaModel("My sin-oh, the bliss of this glorious thought-\nMy sin-not in part, but the whole,\nIs nail'd to His Cross, and I bear it no more;\nPraise the Lord, praise the Lord, O my soul!\nFor me, be it Christ, be it Christ hence to live!")
  ], "c",
    new ChorusModel("It is well… with my soul…\nIt is well, it is well with my soul.")
  ),

  new HymnModel(245, "WHO IS ON THE LORD'S SIDE", [
    new StanzaModel("Who is on the Lord's side?\nWho will serve the King?\nWho will be His helpers,\nOther lives to bring?\nWho will leave the world's side?\nWho will face the foe?\nWho is on the Lord's side?\nWho for Him will go?\nBy Thy call of mercy,\nBy Thy grace divine,\nWe are on the Lord's side,\nSaviour, we are Thine!"),
    new StanzaModel("Not for weight of glory,\nNor for crown and palm,\nEnter we the army,\nRaise the warrior psalm;\nBut for love that claimeth\nLives for whom He died:\nHe whom Jesus nameth\nMust be on His side!\nBy Thy love constraining,\nBy Thy grace divine,\nWe are on the Lord's side,\nSaviour, we are Thine!"),
    new StanzaModel("Jesus, Thou hast bought us,\nNot with gold or gem,\nBut with Thine own life-blood\nFor Thy diadem;\nWith Thy blessing filling\nAll who come to Thee,\nThou hast made us willing,\nThou hast made us free.\nBy Thy grand redemption,\nBy Thy grace divine,\nWe are on the Lord's side,\nSaviour, we are Thine!"),
    new StanzaModel("Fierce may be the conflict,\nStrong may be the foe;\nBut the King's own army\nNone can overthrow:\nRound His standard raging,\nVictory is secure,\nFor His truth unchanging\nMakes the triumph sure,\nJoyfully enlisting,\nBy Thy grace divine,\nWe are on the Lord's side\nSaviour, We are Thine!")
  ], "C"),

  new HymnModel(246, "COME TO THE SAVIOUR", [
    new StanzaModel("Come to the Saviour, make no delay;\nHere in His Word He has shown us the way;\nHere in our midst He's standing to-day,\nTenderly saying, “Come!”"),
    new StanzaModel("“Suffer the children!” oh, hear His voice!\nLet every heart leap forth and rejoice;\nAnd let us freely make Him our choice,\nDo not delay, but come."),
    new StanzaModel("Think once again, He's with us to-day;\nHeed now His blest command and obey;\nHear now His accents tenderly say,\n“Will you, my children, come?”")
  ], "Eb",
    new ChorusModel("Joyful, joyful will the meeting be,\nWhen from sin our hearts are pure and free,\nAnd we shall gather, Saviour, with Thee,\nIn our Eternal home.")
  ),

  new HymnModel(247, "WHERE WILL YOU SPEND ETERNITY", [
    new StanzaModel("Where will you spend eternity?\nThis question comes to you and me!\nTell me, what shall your answer be?\nWhere will you spend eternity?"),
    new StanzaModel("Many are choosing Christ to-day,\nTurning from all their sins away:\nHeav'n shall their happy portion be,\nWhere will you spend eternity?"),
    new StanzaModel("Leaving the strait and narrow way,\nGoing the downward road to-day.\nSad will their final ending be-\nLost thro' a long eternity!"),
    new StanzaModel("Repent, believe, this very hour,\nTrust in the Saviour's grace and power,\nThen will your joyous answer be,\nSav'd thro' a long eternity!")
  ], "F",
    new ChorusModel("Eternity! Eternity!\nWhere will you spend eternity?")
  ),

  new HymnModel(248, "PRECIOUS TO ME", [
    new StanzaModel("Peace like a river is flooding my soul,\nSince Christ, My Saviour, maketh me whole\nSweet peace abiding my portion shall be\nJesus, my Saviour, is precious to me."),
    new StanzaModel("Joy is abounding-my heart gaily sings,\nCleave I the heavens, mount up on wings.\nChrist hath exalted, my Soul He set free\nJesus, my Saviour, is precious to me."),
    new StanzaModel("Oh, precious Jesus, how lowly Thou art!\nCome, and abiding, rule in my heart:\nBreak ev'ry fetter. Thy face let me see.\nThen Thou shall ever be precious to me.")
  ], "Eb",
    new ChorusModel("Pre…cious to me…\nPre…cious is He…\nJesus shall ever… be pre…cious to me…")
  ),
  new HymnModel(249, "DEEPER, DEEPER", [
    new StanzaModel("Deeper, deeper! In the love of Jesus\nDaily let me go;\nHigher, higher in the school of wisdom,\nMore of grace to know."),
    new StanzaModel("Deeper, deeper! Blessed Holy Spirit,\nTake me deeper still,\nTill my life is wholly lost in Jesus,\nAnd His perfect will."),
    new StanzaModel("Deeper, deeper! Tho' it cost hard trials,\nDeeper let me go!\nRooted in the holy love of Jesus\nLet me fruitful grow."),
    new StanzaModel("Deeper, higher, everyday in Jesus,\nTill all conflict past,\nFinds me conqueror, and in His own image,\nPerfected at last.")
  ], "C",
    new ChorusModel("O deeper yet, I pray,\nAnd higher everyday,\nAnd wiser blessed Lord,\nIn Thy precious Holy Word.")
  ),

  new HymnModel(250, "AN OLD ACCOUNT SETTLED", [
    new StanzaModel("There was a time on earth when in the Book of Heav’n\nAn old account was standing for sins yet unforgiv’n\nMy name was at the top and many things below,\nI went up to the Keeper and settled long ago."),
    new StanzaModel("The old account was large and growing everyday,\nFor I was always sinning and never tried to pay,\nBut when I look ahead and saw such pain and woe,\nI said that I would settle, and settled long ago."),
    new StanzaModel("When at the judgement bar, I stand before my King,\nAnd He the book will open, He cannot find a thing,\nThen will my heart be glad while tears of joy will flow,\nBecause I had it settled and settled long ago."),
    new StanzaModel("O sinner seek the Lord, repent of all your sins,\nFor thus He has commanded, if you would enter in,\nAnd then if you should live, a hundred years below,\nE’en then you’ll not regret it, you settled it long ago.")
  ], "F",
    new ChorusModel("Long ago, down on my knees, long ago,\nYes, the old account was settled long ago.\n(Hallelujah)\nAnd the record’s clear today, for He washed my sins away,\nWhen the old account was settled long ago.")
  ),

  new HymnModel(251, "RESCUE THE PERISHING", [
    new StanzaModel("Rescue the perishing, care for the dying,\nSnatch them in pity from sin and the grave,\nWeep o’er the erring ones, lift up the fallen,\nTell them of Jesus, the mighty to save."),
    new StanzaModel("Tho’ they are slighting Him,\nStill, He is waiting,\nWaiting the penitent child to receive;\nPlead with them earnestly,\nPlead with them gently;\nHe will forgive if they only believe."),
    new StanzaModel("Down in the human heart,\nCrushed by the tempter,\nFeelings lie buried; that grace can restore;\nTouching by a loving heart,\nWakened by a kindness,\nChords that are broken will vibrate once more."),
    new StanzaModel("Rescue the perishing,\nDuty demands it;\nStrength for thy Labour the Lord will provide;\nBack to the narrow way patiently win them,\nTell the poor wand’rer a Saviour has died.")
  ], "Ab",
      new ChorusModel("Rescue the perishing, care for the dying;\nJesus is merciful, Jesus will save.")
  ),

  new HymnModel(252, "JESUS IS CALLING", [
      new StanzaModel("Jesus is tenderly calling thee home\nCalling today, Calling today;\nWhy from the sunshine of love\nWilt thou roam farther and farther away?"),
      new StanzaModel("Jesus is calling the weary to rest\nCalling today, calling today;\nBring Him thy burden and thou shalt be blest,\nHe will not turn you away."),
      new StanzaModel("Jesus is waiting, O come to Him now\nWaiting today, waiting today;\nCome with thy sins at His feet lowly bow;\nCome, and no longer delay."),
      new StanzaModel("Jesus is pleading, O list'n to His voice\nHear Him today, hear Him today;\nThey who believe on His name shall rejoice;\nQuickly arise and away.")
  ], "C",
      new ChorusModel("Calling today! Calling today!\nJesus is calling,\nIs tenderly calling to-day.")
  ),

  new HymnModel(253, "'TIS SO SWEET TO TRUST IN JESUS", [
      new StanzaModel("'Tis so sweet to trust in Jesus\nJust to take Him at His word;\nJust to rest upon His promise;\nJust to know. 'Thus saith the Lord”"),
      new StanzaModel("O! how sweet to trust in Jesus,\nJust to trust His cleansing blood;\nJust in simple faith to plunge me,\n'Neath the healing cleansing flood."),
      new StanzaModel("Yes! 'tis sweet to trust in Jesus,\nJust from sin and self to cease;\nJust from Jesus simply taking,\nLife, and rest, and joy, and peace."),
      new StanzaModel("I'm so glad I learned to trust Thee,\nPrecious Jesus, Saviour, Friend:\nAnd I know that Thou art with me,\nWilt be with me to the end.")
  ], "Ab",
      new ChorusModel("Jesus, Jesus, how I trust Him;\nHow I've proved Him o'er and o'er,\nJesus, Jesus, Precious Jesus!\nO! for grace to trust Him more.")
  ),

  new HymnModel(254, "SIN CAN NEVER ENTER THERE", [
      new StanzaModel("Heaven is a holy place,\nFilled with glory and with grace,\nSin can never enter there;\nAll within its gate are pure\nFrom defilement kept secure,\nSin can never enter there."),
      new StanzaModel("If you want to dwell at last,\nWhen your life on earth is past,\nIn that home so bright and fair,\nYou must here be cleans’d from sin,\nHave the Life of Christ within,\nSin can never enter there."),
      new StanzaModel("You may live in sin below,\nHeaven’s grace refuse to know,\nBut you can not enter there;\nIt will stop you at the door,\nBar you out forever more,\nSin can never enter there."),
      new StanzaModel("If you cling to sin till death,\nWhen you draw your latest breath,\nYou will sink in dark despair,\nTo the region of the lost,\nThus to prove at awful cost,\nSin can never enter there")
  ], "",
      new ChorusModel("Sin can never enter there;\nSin can never enter there;\nSo, if at the Judgment bar,\nSinful spots your soul shall mar,\nYou can never enter there.")
  ),

  new HymnModel(255, "JOY UNSPEAKABLE", [
      new StanzaModel("It is joy unspeakable and full of glory,\nFull of glory, full of glory\nIt is joy unspeakable and full of glory,\nAnd a heart has never yet been told.")
  ], ""),

  new HymnModel(256, "O WHY NOT TONIGHT", [
      new StanzaModel("O do not let the Word depart,\nAnd close thine eyes against the light,\nPoor sinner, harden not your heart,\nBe saved, O tonight?"),
      new StanzaModel("Tomorrow's sun may never rise\nTo bless thy long deluded sight;\nThis is the time, O then, be wise\nBe saved, O tonight."),
      new StanzaModel("Our Lord in pity lingers still\nAnd wilt thus His love requite?\nRenounce at once thy stubborn will,\nBe saved, O tonight."),
      new StanzaModel("Our blessed Lord refuses none\nWho would to Him their souls unite;\nBelieve, obey, the work is done,\nBe saved, O tonight.")
  ], "",
      new ChorusModel("O why not tonight?\nO why not tonight?\nWilt thou be save?\nThen why not tonight?")
  ),

  new HymnModel(257, "I NEED THEE", [
      new StanzaModel("I need Thee ev’ry hour,\nMost gra-cious Lord;\nNo ten-der voice like Thine\nCan peace af-ford."),
      new StanzaModel("I need Thee ev’ery hour;\nStay Thou near by;\nTemp-ta-tions lose their power\nWhen Thou art nigh."),
      new StanzaModel("I need Thee ev-ery hour,\nIn joy or pain;\nCome quick-ly and a-bide\nOr life is vain."),
      new StanzaModel("I need Thee ev’ery hour,\nTeach me Thy will;\nAnd Thy rich promi-s-es\nIn me ful-fill."),
      new StanzaModel("I need Thee every hour\nMost Holy One\nOh make me Thine indeed\nThou blessed son.")
  ], "Ab",
      new ChorusModel("I need Thee, O I need Thee;\nEv’ery hour I need Thee;\nO bless me now, my saviour\nI come to Thee!")
  ),

  new HymnModel(258, "I WOULD NOT BE DENIED", [
      new StanzaModel("When pangs of death seized on my soul,\nUn-to the Lord I cried,\nTill Je-sus came and made me whole,\nI would not be denied."),
      new StanzaModel("As Ja-cob in the days of old,\nI wrestled with the Lord;\nAnd instant, with a cour-age bold,\nI stood up-on His Word."),
      new StanzaModel("Old Sa-tan said my Lord was gone\nAnd would not hear my pray'r,\nBut, praise the Lord! the work is done,\nAnd Christ the Lord is here.")
  ], "",
      new ChorusModel("I would not be de-nied,\nI would not be de-nied,\nTill Jesus came and made me whole,\nI would not be denied.")
  ),

  new HymnModel(259, "HE LEADETH ME", [
    new StanzaModel("He leadeth me! O blessed thought!\nO words with heavenly comfort fraught!\nWhate'er I do, where'er I be,\nStill 'tis God's hand that leadeth me."),
    new StanzaModel("Sometimes 'mid scenes of deepest gloom,\nSometimes when Eden's bowers bloom,\nBy waters still, o'er troubled seas,\nStill 'tis His hand that leadeth me."),
    new StanzaModel("Lord, I would clasp Thy hand in mine,\nNor ev-er murmur nor re-pine,\nContent whatev-er lot I see,\nSince 'tis my God that leadeth me!"),
    new StanzaModel("And when my task on earth is done,\nWhen, by grace, the victory's won,\nE'en death's cold wave, I will not flee\nSince God thru Jordan leadeth me.")
  ], "C",
      new ChorusModel("He leadeth me, He leadeth me,\nBy His own hand He leadeth me:\nHis faithful follow'r I would be,\nFor by His hand He leadeth me.")
  ),

  new HymnModel(260, "I LOVE TO TELL THE STORY", [
      new StanzaModel("I love to tell the story,\nOf unseen things above,\nOf Jesus and His glory,\nOf Jesus and His love,\nI love to tell the story,\nBecause I know it's true,\nIt satisfies my longings,\nAs nothing else can do."),
      new StanzaModel("I love to tell the story.\nMore wonderful it seems,\nThan all the golden fancies,\nOf all our golden dreams\nI love to tell the story,\nIt did so much for me,\nAnd that is just the reason,\nI tell it now to thee."),
      new StanzaModel("I love to tell the story,\n'Tis pleasant to repeat,\nWhat seems, each time I tell it,\nMore wonderfully sweet,\nI love to tell the story,\nFor some have never heard,\nThe message of salvation,\nFrom God's own Holy word."),
      new StanzaModel("I love to tell the story,\nFor those who know it best,\nSeem hungering and thirsting,\nTo hear it like the rest,\nAnd when it seems of glory,\nI sing the new, new song,\n'twill be the old, old story,\nThat I have loved so long.")
  ], "Ab",
      new ChorusModel("I love to tell the story,\n'twill be my theme in glory,\nTo tell the old, old, story\nOf Jesus and His love.")
  ),

  new HymnModel(261, "JESUS SAVES", [
      new StanzaModel("We have heard a joyful sound.\nJesus saves! Jesus saves!\nSpread the gladness all around,\nJesus saves! Jesus saves!\nBear the news to ev'ry land,\nClimb the steeps and cross the waves,\nOnward,'tis our Lord's command,\nJesus saves! Jesus saves!"),
      new StanzaModel("Waft it on the rolling tide,\nJesus saves! Jesus saves!\nTell to sinners far and wide,\nJesus saves! Jesus saves!\nSing, ye islands of the sea,\nEcho back, ye ocean caves,\nEarth shall keep her jubilee,\nJesus saves! Jesus saves!"),
      new StanzaModel("Sing above the battle's strife,\nJesus saves! Jesus saves!\nBy His death and endless life,\nJesus saves! Jesus saves!\nSing it softly thro' the gloom,\nWhen the heart for mercy craves\nSing in triumph o'er the tomb,\nJesus saves! Jesus saves!"),
      new StanzaModel("Give the wind a mighty voice,\nJesus saves! Jesus saves!\nLet the nations now rejoice,\nJesus saves! Jesus saves!\nShout salvation full and free,\nHighest hills and deepest caves,\nThis our song of victory,\nJesus saves! Jesus saves!")
  ], "G"),

  new HymnModel(262, "THE SON HATH MADE ME FREE", [
      new StanzaModel("I was once in Egypt’s bondage, Egypt’s bondage\nBut deliverance came to me, came to me,\nAnd I’m living now in Canaan, now in Canaan,\nFor the Son hath made me free,\nFor the Son made me free."),
      new StanzaModel("I was once slave to Satan, slave to Satan,\nAnd He worked His will in me, yes in me;\nBut I’m bound by sin no longer, bound no longer,\nFor the Son hath made me free,\nFor the Son made me free,"),
      new StanzaModel("Worldly pleasures can not charm me, cannot charm me,\nNo delight in them I see, none for me,\nFashion, folly, pride have left me, they have left me,\nFor the Son hath made me free\nFor the Son made me free"),
      new StanzaModel("All my fear all condemnation, condemnation,\nAll that stood ‘twist’ God and me, God and me,\nPraise His name! are left behind me, Left behind me,\nFor the Son hath made me free\nFor the Son made me free.")
  ], "F",
      new ChorusModel("I am dwelling now in Canaan, now in Canaan\nJesus’ Blood avails for me; yes for me;\nI am free from condemnation\nFor the Son hath made me free.")
  ),

  new HymnModel(263, "NEARER TO THEE", [
      new StanzaModel("Nearer, my God, to Thee\nNearer to Thee\nE'en though it be a cross\nThat raiseth me\nStill all my song shall be\nNearer, my God, to Thee\nNearer, my God, to Thee\nNearer to Thee."),
      new StanzaModel("Though like a wanderer\nThe sun gone down\nDarkness be over me\nMy rest a stone\nYet in my dreams I'd be\nNearer, my God, to Thee\nNearer, my God, to Thee\nNearer to Thee."),
      new StanzaModel("There let the way appear\nSteps unto heav'n\nAll that Thou sendest me\nIn mercy giv'n\nAngels to beckon me\nNearer, my God, to Thee\nNearer, my God, to Thee\nNearer, to Thee."),
      new StanzaModel("Then with my waking thoughts\nBright with Thy praise\nOut of my stony griefs\nBethel I'll raise\nSo by my woes to be\nNearer, my God, to Thee\nNearer, my God, to Thee\nNearer, to Thee."),
      new StanzaModel("Or if on joyful wing\nCleaving the sky\nSun, moon, and stars forgot\nUpward I fly\nStill all my song shall be\nNearer, my God, to Thee\nNearer, my God, to Thee\nNearer, to Thee.")
  ], "G"),

  new HymnModel(264, "VICTORY AHEAD", [
      new StanzaModel("When the host of Israel, led by God,\nRound the wall of Jericho softly trod;\nTrusting in the Lord, the felt the conq’ror’s tread,\nBy faith they saw the victory ahead."),
      new StanzaModel("David, with a shepherd’s sling and five stones,\nMet the giant on the field all alone;\nTrusting in the Lord, He knew what God had said,\nBy faith he saw the victory ahead."),
      new StanzaModel("Daniel prayed unto the Lord thrice each day,\nThen unto the lion’s den led the way;\nTrusting in the Lord, he did not fear or dread,\nBy faith he saw the victory ahead."),
      new StanzaModel("Often with carnal mind I was tried,\nAsking for deliverance oft I cried,\nTrusting in the Lord, I reckoned I was dead,\nBy faith I saw the victory ahead."),
      new StanzaModel("When like those who’ve gone before to that land,\nBy death’s river cold and dark I shall stand;\nTrusting in the Lord, I will not fear or dread,\nBy faith I see the victory ahead.")
  ], "Eb",
      new ChorusModel("Victory ahead! Victory ahead!\nThru the blood of Jesus victory ahead.\nTrusting in the Lord I hear the conq’ror’s tread,\nBy faith I see the victory ahead.")
  ),

  new HymnModel(265, "FIGHT THE GOOD FIGHT", [
      new StanzaModel("Fight the good fight with all thy might\nChrist is thy strength, and Christ thy right\nLay hold on life and it shall be\nThy joy and crown eternally."),
      new StanzaModel("Run the straight race\nThrough God’s good grace\nLift up thine eyes and seek His face\nLift with its path before us lies\nChrist is the way and Christ the prize."),
      new StanzaModel("Cast care aside;\nLean on thy guide\nLean, and His mercy will provide,\nLean, and the trusting soul shall prove\nChrist is its life and Christ its love"),
      new StanzaModel("Faint not, nor fear;\nHis arms are near;\nHe changeth not and thou art dear;\nOnly believe and thou shalt see\nThat Christ is all in all to thee.")
  ], "C"),

  new HymnModel(266, "HOW SWEET THE NAME", [
      new StanzaModel("How sweet the name of Jesus sounds\nIn a believer's ear;\nIt soothes his sorrows, heals his wounds\nAnd drives away his fear."),
      new StanzaModel("It makes the wounded spirit whole,\nAnd calms the troubled breast;\n'tis manna to the hungry soul,\nAnd to the weary rest."),
      new StanzaModel("Dear name, the Rock on which I build\nMy shield and hiding-place,\nMy never-failing treasury, filled\nWith boundless stores of grace."),
      new StanzaModel("Jesus, my Shepherd, Saviour, Friend.\nMy Prophet, Priest and King,\nMy Lord, my Life my Way, my End,\nAccept the praise I bring."),
      new StanzaModel("Till then, I would Thy love proclaim\nWith every fleeting breath;\nAnd may the music of Thy name\nRefresh my soul in death.")
  ], "C"),
  new HymnModel(267, "LORD SPEAK TO ME", [
    new StanzaModel("Lord, speak to me, that I may speak\nIn living echoes of Thy tone,\nAs thou hast sought, so let me seek,\nThy erring children lost and lone."),
    new StanzaModel("Oh, lead me, Lord that I may lead,\nThe wandering and that wavering feet,\nOh, feed me, Lord, that I may feed,\nThy hungering once with manna sweet."),
    new StanzaModel("Oh, strengthen me, that while I stand,\nFirm on the rock, and strong in Thee,\nI may stretch out a loving hand\nTo wrestlers with the troubled sea!"),
    new StanzaModel("Oh, teach me, Lord, that I may teach\nThe precious things Thou dost impart,\nAnd wing my words, that they may reach\nThe hidden depths of many a heart!"),
    new StanzaModel("Oh, give Thine own sweet rest to me,\nThat I may speak, with soothing power\nA word in season, as from Thee,\nTo weary ones in needful hour.")
  ], "F"),

  new HymnModel(268, "ABIDE WITH ME", [
      new StanzaModel("Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide:\nWhen other helper fail, and comforts flee,\nHelp of the helpless, oh, abide with me!"),
      new StanzaModel("Swift to its close ebbs out life's little day;\nEarth's joy grows dim, its glories pass away;\nChange and decay in all around I see;\nO Thou, who changest not, abide with me."),
      new StanzaModel("Come not In terrors, as the King of kings;\nBut kind and good, with healing in Thy wing;\nTears for all woes, a heart for every plea;\nCome, Friend of sinners, thus abide with me."),
      new StanzaModel("I need Thy presence every passing hour;\nWhat but Thy grace can foils, the tempter's power?\nWho like Thyself my guide and stay can be?\nThrough cloud and sunshine, oh, abide with me!"),
      new StanzaModel("I fear no foe, with Thee at hand to bless:\nIlls have no weight, and tears no bitterness:\nWhere is death's sting? Where, grave, thy victory?\nI triumph still, if Thou abide with me."),
      new StanzaModel("Hold Thou Thy Cross before my closing eyes;\nShine through the gloom, and point me to the skies;\nHeaven's morning breaks, and earth's vain shadows flee;\nIn life, in death, O Lord, abide with me!")
  ], "Ab"),

  new HymnModel(269, "THY KINGDOM COME, OH GOD", [
      new StanzaModel("Thy kingdom come, O God;\nThy rule, O Christ, begin:\nBreak with Thy iron rod\nThe tyrannies of sin."),
      new StanzaModel("Where is Thy reign of peace;\nAnd purity and love?\nWhen shall all hatred cease,\nAs in the realms above?"),
      new StanzaModel("When comes the promise time\nThat war shall be no more,\nAnd lust, oppression, crime,\nShall flee Thy face before?"),
      new StanzaModel("We pray Thee, Lord arise,\nAnd come in Thy great might;\nReceive our longing eyes,\nWhich languish for Thy sight"),
      new StanzaModel("Men scorn Thy sacred Name,\nAnd wolves devour Thy fold;\nBy many deeds of shame\nWe learn that love grows cold."),
      new StanzaModel("O’er heathen lands afar\nThick darkness broodeth yet;\nArise, O Morning Star,\nArise, and never set.")
  ], "Eb"),

  new HymnModel(270, "STAND UP FOR JESUS", [
      new StanzaModel("Stand up, stand up for Jesus\nYe soldiers of the cross\nLift high His royal banner\nIt must not suffer loss\nFrom victory unto victory\nHis army shall He lead\nTill every foe is vanquished\nAnd Christ is Lord indeed."),
      new StanzaModel("Stand up, stand up for Jesus\nThe trumpet call obey\nForth to the mighty conflict\nIn this His glorious day\nYe who are men, now serve Him\nAgainst unnumbered foes\nLet courage rise with danger\nAnd strength to strength oppose."),
      new StanzaModel("Stand up, stand up for Jesus\nStand in His strength alone\nThe arm of flesh will fail you\nYe dare not trust your own\nPut on the gospel armour\nEach piece put on with prayer\nWhere duty calls or danger\nBe never wanting there."),
      new StanzaModel("Stand up, stand up for Jesus\nThe strife will not be long\nThis day the noise of battle\nThe next, the victor’s song\nTo him that overcometh\nA crown of life shall be\nHe, with the King of Glory\nShall reign eternally.")
  ], "Eb", new ChorusModel("")),

  new HymnModel(271, "THY WAY NOT MINE O LORD", [
      new StanzaModel("Thy way, not mine, O Lord,\nHowever dark it be;\nLead me by Thine own hand;\nChoose out the path for me."),
      new StanzaModel("Smooth let it be or rough,\nIt will be still the best,\nWinding or straight, it leads\nRight onward to Thy rest."),
      new StanzaModel("I dare not choose my lot;\nI would not if I might;\nChoose thou for me, my God,\nSo shall I walk alright."),
      new StanzaModel("The Kingdom that I seek\nIs Thine; So let the way\nThat leads to it be Thine,\nElse I must surely go astray."),
      new StanzaModel("Take thou my cup, and it\nWith joy or sorrow fill,\nAs best to Thee may seem,\nChoose Thou my good or ill."),
      new StanzaModel("Choose Thou for me my friends,\nMy sickness or my health;\nChoose Thou my cares for me\nMy poverty or wealth."),
      new StanzaModel("Not mine, not mine the choice,\nIn things or great or small;\nBe Thou my Guide, my Strength\nMy Wisdom, and my All.")
  ], "C"),

  new HymnModel(272, "I AM COMING LORD", [
      new StanzaModel("That calls me, Lord, to Thee\nFor cleansing in Thy precious blood\nThat flowed on Calvary."),
      new StanzaModel("Though coming weak and vile,\nThou dost my strength assure;\nThou dost my vileness fully cleanse,\nTill spotless all and pure."),
      new StanzaModel("‘Tis Jesus call me on\nTo perfect faith and love,\nTo perfect hope, and peace and trust,\nFor earth and heaven above"),
      new StanzaModel("‘Tis Jesus who confirms\nThe blessed work within,\nBy adding grace to welcomed grace,\nWhere reigned the power of sin."),
      new StanzaModel("And He the witness gives\nTo loyal hearts and free,\nThat every promise is fulfilled,\nIf faith but bring the plea."),
      new StanzaModel("All hail, atoning blood!\nAll hail, redeeming grace!\nAll hail, the gift of Christ, our Lord,\nOur strength and righteousness!")
  ], "F",
      new ChorusModel("I am coming, Lord\nComing now to Thee;\nTrusting only in the blood\nThat flowed on Calvary.")
  ),

  new HymnModel(273, "GIVE ME OIL IN MY LAMP", [
      new StanzaModel("Give me oil in my Lamp,\nKeep me burning,\nGive me oil in my Lamp, I pray.\nGive oil in my Lamp,\nKeep me burning,\nKeep me burning 'till the break of day."),
      new StanzaModel("Make me a fisher of men,\nKeep me seeking,\nMake me a fisher of men, I pray.\nMake me a fisher of men,\nKeep me seeking,\nSeeking souls ‘till Jesus comes again."),
      new StanzaModel("Give me joy in my heart,\nkeep me praising,\nGive me joy in my heart, I pray.\nGive me joy in my heart,\nKeep me praising,\nKeep me praising ‘till the break of day."),
      new StanzaModel("Give me love in my heart,\nKeep me serving,\nGive me love in my heart, I pray.\nGive me love in my heart,\nKeep me serving,\nKeep me serving ‘till the break of day.")
  ], "Eb",
      new ChorusModel("Sing Hosannah! Sing Hosannah!\nSing Hosannah to the King of kings!\nSing Hosannah! Sing Hosannah!\nSing Hosannah to the King!")
  ),

  new HymnModel(274, "THROUGH THE LOVE OF GOD", [
      new StanzaModel("Through the love of God our Saviour\nAll will be well;\nFree and changeless is His favour,\nAll, All is well.\nPrecious is the Blood that healed us,\nPerfect is the grace that sealed us,\nStrong the hand stretched forth to shield us,\nAll will be well."),
      new StanzaModel("Though we pass through tribulation,\nAll will be well;\nOurs is such a free salvation,\nAll, all is well.\nHappy, still in God confiding,\nFruitful, if in Christ abiding,\nHoly, through the spirit's guiding\nAll will be well."),
      new StanzaModel("We expect a bright tomorrow\nAll will be well;\nFaith can sing through days of sorrow\nAll, all is well.\nOn our Father's love relying,\nJesus every need supplying,\nOr in living, or in dying,\nAll will be well.")
  ], "G"),

  new HymnModel(275, "HE THAT IS DOWN", [
    new StanzaModel("He that is down needs fear no fall,\nHe that is low, no pride,\nHe that is humble ever shall\nHave God to be his guide."),
    new StanzaModel("I am content with what I have,\nLittle be it or much;\nAnd, Lord, contentment still I crave;\nBecause Thou savest such."),
    new StanzaModel("Fullness to such a burden is\nThat go on pilgrimage;\nHere little, and hereafter bliss,\nIs best from age to age.")
  ], "F"),

  new HymnModel(276, "WONDERFUL JESUS", [
    new StanzaModel("Wonderful, Wonderful, Jesus,\nHe is my friend, true to the end.\nHe gave himself to redeem me,\nJesus, wonderful Lord.")
  ], ""),

  new HymnModel(277, "SEEK YE FIRST THE KINGDOM", [
    new StanzaModel("Seek ye first the kingdom of God,\nAnd His righteousness.\nAnd all these things,\nShall be added unto you,\nHalle-lu-Hallelu-jah"),
    new StanzaModel("Man shall not live by bread alone.\nBut by every Word\nThat proceedeth from the mouth of God.\nHalle-lu-Hallelu-jah"),
    new StanzaModel("Ask, and it shall be given unto you,\nSeek, and ye shall find.\nKnock, and it shall be opened unto you.\nHalle-lu-Hallelu-jah")
  ], ""),

  new HymnModel(278, "TAKE MY HAND, PRECIOUS LORD", [
    new StanzaModel("Precious Lord, take my hand,\nLead me on, let me stand,\nI'm tired, I’m weak, I’m lone,\nThrough the storm, through the night,\nLead me on to the light:\nTake my hand precious Lord,\nLead me home."),
    new StanzaModel("When my way grows drear,\nPrecious Lord, linger near,\nWhen my light is almost gone,\nHear my cry, hear my call,\nHold my hand lest I fall:\nTake my hand precious Lord,\nLead me home."),
    new StanzaModel("When the darkness appears\nAnd the night draws near,\nAnd the day is past and gone,\nAt the river I stand,\nGuide my feet, hold my hand:\nTake my hand precious Lord,\nLead me home."),
    new StanzaModel("When my work is all done,\nAnd my race here is run,\nLet me see by the light,\nThou hast shown,\nThat fair city so bright,\nWhere the lamb is the light:\nTake my hand precious Lord,\nLead me home.")
  ], ""),

  new HymnModel(279, "WELCOME", [
    new StanzaModel("WELCOME, welcome, welcome,\nHoly Ghost we welcome Thee,\nCome with power this very hour,\nHoly Ghost we welcome Thee,")
  ], ""),

  new HymnModel(280, "THANK YOU LORD FOR SAVING ME", [
    new StanzaModel("THANK you, thank you Lord for saving me;\nThank you, thank you Lord for setting me free.\nOnce I was lost, but now I am found,\nNow my soul is heaven bound.\nThank you, thank you Lord for saving me.")
  ], ""),

  new HymnModel(281, "ALL THAT I HAVE", [
    new StanzaModel("All that I have, all that I am,\nAll I shall ever be,\nCannot repay the love debt I owe,\nI surrender to Thee.")
  ], ""),

  new HymnModel(282, "JESUS, NAME ABOVE ALL NAMES", [
    new StanzaModel("Jesus, name above all names\nBeautiful Saviour, glorious Lord\nEmmanuel, God is with us\nBlessed redeemer, Living word")
  ], ""),

  new HymnModel(283, "HE BROUGHT ME IN", [
    new StanzaModel("HE brought me in, He brought me in,\nOh, I thank God, He brought me in,\nJust look out yonder, where I have been,\nOh, I thank God, He brought me in."),
    new StanzaModel("(He took me in …)"),
    new StanzaModel("(He brought me out …)")
  ], ""),

  new HymnModel(284, "IT’S SETTING ME FREE", [
    new StanzaModel("IT’S setting me free,\nThis Holy Ghost power;\nIt’s setting me free, this very hour;\nIt’s down in my soul\nIt’s making me whole;\nIt’s setting me free, free, free,\nThis holy Ghost power.")
  ], ""),

  new HymnModel(285, "IN THE UPPER ROOM", [
    new StanzaModel("In the upper-room with Jesus,\nSitting at His nail-scarred feet,\nOh, what rich and full communion,\nFellowship divine and sweet.")
  ], ""),

  new HymnModel(286, "GREAT IS THE LORD & GREATLY TO BE PRAISED", [
    new StanzaModel("Great is the Lord and greatly to be praised,\nIn the city of our God,\nIn the mountain of His holiness,\nBeautiful for situation,\nThe joy of the whole earth\nIs mount Zion on the sides of the north,\nThe city of the great King,\nIs mount Zion on the sides of the north\nThe city of the great King!")
  ], ""),

  new HymnModel(287, "LET EVERYTHING WITHIN ME", [
    new StanzaModel("Let everything within me, cry Holy\nLet everything within me, cry Holy\nHoly, Holy, Holy is the lamb that was slain."),
    new StanzaModel("Let everything within me, cry Glory\nLet everything within me, cry Glory\nGlory, glory, glory to the Lamb that was slain."),
    new StanzaModel("(Let everything within me, cry Jesus …)"),
    new StanzaModel("(Let everything within me, cry Worthy …)")
  ], ""),

  new HymnModel(288, "I WANT GOD’S WAY", [
    new StanzaModel("I Want God’s way to be my way,\nAs I journey here below.\nFor there is no other highway\nThat a child of God should go.\nThough the road be steep and rough,\nIf He leads me it’s enough,\nI want God’s way to be my way every day.")
  ], ""),

  new HymnModel(289, "THIS IS THE EVENING TIME", [
    new StanzaModel("This is the evening time,\nIt’s later than you think.\nThe bride is preparing now\nFor her Lord to meet.\nAll things are ready now.\nThe bridegroom, I hear;\nHe that hath an ear to hear,\nThe evening time is here.")
  ], ""),

  new HymnModel(290, "EVERY PROMISE IS MINE", [
    new StanzaModel("Every promise in the book is mine\nEvery chapter, every verse, every line\nI am trusting in His love divine,\nEvery promise in the book is mine.")
  ], ""),

  new HymnModel(291, "IN THE NAME OF JESUS", [
    new StanzaModel("In the name of Jesus, in the name of Jesus\nWe have the victory,\nIn the Name of Jesus, in the name of Jesus\nDemons will have to flee.\nWhen we stand in the name of Jesus,\nTell me who can stand before,\nIn the precious Name of Jesus,\nWe have the victory.")
  ], ""),

  new HymnModel(292, "JESUS BLOOD", [
    new StanzaModel("Jesus blood will never lose its power.\nNo never; no never!\nJesus blood avails for sin forever,\nAnd will never lose its power.")
  ], ""),

  new HymnModel(293, "GOD IS SO GOOD", [
    new StanzaModel("GOD Is so good,\nGOD Is so good,\nGOD Is so good,\nHe's so good to me."),
    new StanzaModel("He saved my sin-sick soul,\nHe set my spirit free,\nHe healed my broken heart,\nHe's so good to me."),
    new StanzaModel("(He answers prayer …)"),
    new StanzaModel("(I love Him so …)"),
    new StanzaModel("(He's coming soon …)")
  ], ""),

  new HymnModel(294, "GLAD DAY", [
    new StanzaModel("Glad day when I was born again\nGlad day when I was born again.\nGlad day when I was born again.\nIt was a glad day when I was born again."),
    new StanzaModel("The sins I used to do, I do them no more,\nThe sins I used to do, I do them no more,\nThe sins I used to do, I do them no more,\nIt was a glad day when I was born again.")
  ], ""),

  new HymnModel(295, "THIS IS THE DAY", [
    new StanzaModel("This is the day, this is the day\nThat the Lord has made,\nThat the Lord has made.\nWe will rejoice, we will rejoice\nAnd be glad in it, and be glad in it.\nThis is the day that the Lord has made;\nWe will rejoice and be glad in it,\nThis is the day, this is the day\nThat the Lord has made.")
  ], ""),

  new HymnModel(296, "I LIKE THE OLD TIME WAY", [
    new StanzaModel("I like the old time singing, shouting\nI like the old-time way,\nI like the old time singing, shouting\nPreaching, praying,\nI like the old-time way."),
    new StanzaModel("I sing about my Saviour everywhere I go.\nEverywhere I go, everywhere I go:\nI sing about my Saviour everywhere I go,\nFor there’s joy, joy in my soul.")
  ], ""),

  new HymnModel(297, "HE IS LORD", [
    new StanzaModel("Jehovah of the Old Testament is Jesus Christ\nof the New Testament,\nMy Lord my God, is Jehovah the Almighty\nHe has been given a name above all names.\nEvery knee shall bow and every tongue confess.\nHe has been given a name above all names\nThat Jesus Christ is the Lord."),
    new StanzaModel("He is Lord, He is Lord, (Amen)\nHe has risen from the dead, He is Lord.\nEvery knee shall bow, every tongue, confess.\nThat Jesus Christ is Lord.")
  ], ""),

  new HymnModel(298, "WE SHALL OVERCOME", [
    new StanzaModel("We shall overcome, we shall overcome,\nBy the words of our mouths,\nAnd the blood of the Lamb,\nWe shall overcome.")
  ], ""),

  new HymnModel(299, "WORTHY", [
    new StanzaModel("Worthy, worthy,\nWorthy, the lamb that was slain,\nWorthy, worthy,\nWorthy, the lamb that was slain."),
    new StanzaModel("Praise him, praise him,\nPraise the lamb that was slain,\nPraise him, praise him,\nPraise the lamb that was slain."),
    new StanzaModel("(Love him…)"),
    new StanzaModel("(Serve him…)")
  ], ""),

  new HymnModel(300, "CREATE IN ME A CLEAN HEART", [
    new StanzaModel("Create in me a clean heart, O God\nAnd renew a right spirit within me.\nCreate in me a clean heart, O God\nAnd renew a right spirit within me.\nCast me not away from thy presence, Oh God\nAnd take not Thy Holy Spirit from me\nRestore unto me the joy of Thy salvation\nAnd renew a right spirit within me.")
  ], ""),

  new HymnModel(301, "HEAVENLY FATHER, I APPRECIATE YOU", [
    new StanzaModel("Heavenly Father, I appreciate you,\nHeavenly Father I appreciate you,\nI love you, adore you, bow down before you,\nHeavenly Father, I appreciate you."),
    new StanzaModel("Son of God, what a wonder you are\nSon of God, what a wonder you are,\nYou cleansed my soul from sin,\nYou set the Holy Ghost within me,\nSon of God, what a wonder You are."),
    new StanzaModel("Holy Spirit you’re a comfort to me\nHoly Spirit you’re a comfort to me,\nYou lead me, you guide me,\nYou’re dwelling inside me,\nHoly Spirit you’re a comfort to me.")
  ], ""),

  new HymnModel(302, "BEHOLD I LIVE", [
    new StanzaModel("John was in the spirit on the Lord’s day,\nHe heard a voice from Heaven\nAnd this is what it said;\nI’m the Alpha and Omega\nThe beginning and the end;\nBehold I live forevermore.\nBehold I live, behold I live,\nBehold I live forevermore,\nBehold I live, behold I live,\nBehold I live forevermore.")
  ], ""),

  new HymnModel(303, "TOUCHING JESUS", [
    new StanzaModel("A woman tried many phy-si-cians\nYet grew worse, so to Jesus she came;\nAnd when the crowd tried to restrain her,\nShe whis-pered, these word thro’ her pain."),
    new StanzaModel("I was bound when I knelt at that old altar,\nBut they said Je-sus! Could meet ev’ry need;\n(And) when this pris-‘ner could fin-ly touched Je-sus;\nHe set me free, praise the Lord! I’m free indeed.")
  ], "",
    new ChorusModel("Touching Jesus is all that (really) matters,\nThen your life will never be the same,\nAnd there’s only one way to touch Him\nJust believe when you call on His name.")
  ),

  new HymnModel(304, "I WANT MORE OF JESUS", [
    new StanzaModel("I want more of Jesus\nMore and more and more\nI want more of Jesus\nThan I’ve ever had before,\nI want more of His great love\nSo rich, so full and free.\nI want more of Jesus,\nSo I’ll give Him more of me.")
  ], ""),

  new HymnModel(305, "I'M A NEW CREATION", [
    new StanzaModel("Hallelujah, He redeemed me,\nI’ve been born again to win,\nI thank God, He justified me\nOf His fullness have we all received of Him\nI’m a new creation, I'm a brand-new man,\nOld things are passed away, I am born again,\nMore than a conqueror, that's who I am,\nI am a new creation, I'm a brand-new man.")
  ], ""),

  new HymnModel(306, "GOD CAN DO ANYTHING", [
    new StanzaModel("God can do anything, anything, anything,\nMy God can do anything,\nHe made the earth and all therein,\nHe saved my soul from every sin,\nMy God can do anything.")
  ], ""),

  new HymnModel(307, "HE’S CHANGING ME", [
    new StanzaModel("From glory to glory He’s changing me,\nChanging me, changing me.\nHis likeness and image to perfect in me,\nThe love of God shown to the world\nFor He’s changing, changing me,\nFrom earthly things to the heavenly.\nHis likeness and image to perfect in me,\nThe love of God shown to the world.")
  ], ""),

  new HymnModel(308, "BRIGHTEN THE CORNER", [
    new StanzaModel("Brighten the corner where you are\nBrighten the corner where you are\nSomeone far from Jesus\nMay behold your light afar\nBrighten the corner where you are."),
    new StanzaModel("Brighten the corner where you are,\nBrighten the corner where you are,\nShine your light for Jesus\nYou must shine it from your heart\nBrighten the corner where you are.")
  ], ""),

  new HymnModel(309, "IT’S THE LIFE", [
    new StanzaModel("It’s the life behind the name,\nThat makes the demons tremble.\nIt’s the life behind the name,\nThat makes the proud heart humble.\nIt was God who devised a plan,\nThat in all things like a man,\nHe would live, so He could give\nTo us the life behind the name.")
  ], ""),

  new HymnModel(310, "HOSANNA", [
    new StanzaModel("Oh, magnify the Lord with me,\nFor He is worthy to be praised.\nOh, magnify the Lord with me,\nFor He is worthy to be praised."),
    new StanzaModel("Glory, glory to His name,\nHe lives and reigns forevermore.\nGlory, glory to His name,\nHe lives and reigns forevermore."),
    new StanzaModel("Jehovah Jireh is His name\nFor He provideth all my needs.\nJehovah Jireh is His name\nFor He provideth all my needs.")
  ], "",
    new ChorusModel("Hosanna! Blessed be the Rock,\nBlessed be the Rock of my salvation!\nHosanna! Blessed be the Rock,\nBlessed be the Rock of my Salvation!")
  ),

  new HymnModel(311, "KNOW YE NOT", [
    new StanzaModel("Know ye not, know ye not, ye are the temple\nKnow ye not, know ye not, ye are the temple\nKnow ye not, know ye not, ye are the temple\nYe are the temple of the Holy Ghost."),
    new StanzaModel("Yes I know, yes I know I am a temple\nYes I know, yes I know I am a temple\nYes I know, yes I know I am a temple\nI am a temple of the Holy Ghost."),
    new StanzaModel("Full of praise, full of power, full of glory\nFull of praise, full of power, full of glory\nFull of praise, full of power, full of glory\nI am a temple of the Holy Ghost.")
  ], ""),

  new HymnModel(312, "KEEP ME TRUE", [
    new StanzaModel("Keep me true, Lord Jesus keep me true,\nKeep me true, Lord Jesus keep me true,\nThere’s a race that I must run,\nThere are victories to be won,\nGive me power, every hour, to be true.")
  ], ""),

  new HymnModel(313, "LONGING FOR JESUS", [
    new StanzaModel("Longing, longing for Jesus\nI have a longing in my heart for Him\nJust to be near Him, to feel His presence\nI have a longing in my heart for Him.")
  ], ""),

  new HymnModel(314, "EMMANUEL", [
    new StanzaModel("Emmanuel, Emmanuel;\nHis name is called Emmanuel.\nHe’s God with us, revealed in us.\nHis name is called Emmanuel.")
  ], ""),

  new HymnModel(315, "JESUS, JESUS, JESUS", [
    new StanzaModel("Jesus, Jesus, Jesus\nThere’s just something about that name,\nMaster, Saviour, Jesus!\nLike the fragrance after the rain.\nJesus, Jesus, Jesus!\nLet all Heaven and earth proclaim,\nKings and kingdoms will all pass away,\nBut there’s something about the name!")
  ], ""),

  new HymnModel(316, "I’LL SAY YES", [
    new StanzaModel("I’LL say yes, yes, yes.\nI’ll say yes, yes, yes.\nI’ll say yes Lord; I’ll say yes Lord.\nI’ll say yes, yes, yes.")
  ], ""),

  new HymnModel(317, "JUST ANY DAY NOW", [
    new StanzaModel("Each time I stop and take time to look around me;\nI see the sign of His appearing everywhere,\nThe things He said will come to pass are now before us\nAnd I feel a strong excitement in the air."),
    new StanzaModel("Oh, there is this longing in my heart of His appearing;\nI’ll gladly leave behind these trails here below,\nFor the journey has been long and I’m so weary,\nBut Lord somehow, I feel I’m so much closer home.")
  ], "",
    new ChorusModel("Just any day now our Lord is coming He’ll be returning,\nFor you and me oh I’ve been waiting and I’ve\nbeen watching\nJust any day now, His face I’ll see.")
  ),

  new HymnModel(318, "ALL HAIL KING JESUS", [
    new StanzaModel("All hail king Jesus, all hail Emmanuel,\nKing of kings, Lord of lords,\nBright morning star\nAnd throughout eternity\nI’m going to praise Him\nAnd forevermore, I will reign with Him.")
  ], ""),

  new HymnModel(319, "WHAT A MIGHTY GOD", [
    new StanzaModel("What a mighty God we serve,\nWhat a mighty God we serve,\nAngels bow before Him,\nHeaven and earth adore Him,\nWhat a mighty God we serve.")
  ], ""),

  new HymnModel(320, "BLESS THE LORD O MY SOUL", [
    new StanzaModel("Bless the Lord O my soul\nBless the Lord O my soul\nAnd all that is within me\nBless (Praise) His Holy Name.")
  ], ""),

  new HymnModel(321, "I'LL FLY AWAY", [
    new StanzaModel("Some glad morning when this life is o'er\nI'll fly away,\nTo a home on God's celestial shore,\nI'll fly away."),
    new StanzaModel("When the shadows of this life have grown,\nI'll fly away;\nLike a bird from prison bars has flown,\nI'll fly away."),
    new StanzaModel("Just a few more weary days and then,\nI'll fly away;\nTo a land where joys shall never end,\nI'll fly away.")
  ], "",
    new ChorusModel("I'll fly away, O glory, I'll fly away;\nWhen I die, (I won't die) hallelujah by and by,\nI'll fly away.")
  ),

  new HymnModel(322, "THE GREAT EMANCIPATOR", [
    new StanzaModel("Once my heart and soul were fettered\nBy the binding chains of sin.\nBut the Great Emancipator,\nSet me free to worship Him."),
    new StanzaModel("Like a lost lamb I was drifting\nO so helpless and alone,\nBut the seeking Shepherd found me,\nLed me to my Father's home.")
  ], "",
    new ChorusModel("Glory, Glory, Hallelujah,\nBlessed be His Holy name!\nHe's that Great Emancipator,\nThat's the song of the Redeemed!")
  ),

  new HymnModel(323, "THE ORIGINAL LIFE", [
    new StanzaModel("God’s attributes were manifested\nTo His Bride in this last age.\nWe have caught the revelation\nBy the last prophets' message.\nAnd we know who we are\nAnd what we are raised up for,\nPraise the Lord, for the Original Life."),
    new StanzaModel("We are the word made flesh today\nThis is what the Scriptures say.\nAnd our names are seen within,\nRedeemed and perfect without sin.\nYes, we are anointed and inspired\nBy our God, who's the Original Life."),
    new StanzaModel("Our eyes of understanding\nHe has opened up at last.\nAnd sweet victory is ours\nWho were chained down in the past.\nTrue jubilee has responded\nTo our God, Who's the Original Life."),
    new StanzaModel("We are called unto adoption\nFull authority and power.\nSleeping saints will wake and join us\nFor translation in this hour.\nGentiles' days soon will be over\nGlory, hallelujah!\nTo our God, Who's the Original Life.")
  ], "",
    new ChorusModel("The Original Life, the Original Seed\nThe Original word is what I believe.\nThe son of Man is revealed\nThe seventh seal is unveiled\nThe Original Life, the original seed.")
  ),

  new HymnModel(324, "THE CHURCH’S ONE FOUNDATION", [
    new StanzaModel("The church’s one foundation\nIs Jesus Christ her Lord\nShe is His new creation\nBy water and the word\nFrom heaven He came and\nsought her to be His holy bride\nWith His own blood He bought her\nAnd for her life He died."),
    new StanzaModel("Elect from every nation\nYet one o’er all the earth\nHer charter of salvation\nOne Lord, one faith, one birth\nOne holy name she blesses\nPartakes one holy food\nAnd to one hope she presses\nWith every grace endued."),
    new StanzaModel("Though with a scornful wonder\nMen see her sore oppressed\nBy schisms rent asunder\nBy heresies distressed\nYet saints their watch are keeping\nTheir cry goes up, “how long?”\nAnd soon the night of weeping"),
    new StanzaModel("‘Mid toil and tribulation\nAnd tumult of her war\nShe waits the consummation\nOf peace forevermore\nTill with the vision glorious\nHer longing eyes are blest\nAnd the great Church victorious\nShall be the Church at rest.")
  ], ""),

  new HymnModel(325, "HIS BANNER OVER ME IS LOVE", [
    new StanzaModel("He brought me to His banqueting table\nHis banner over me is love;\nHe brought me to His banqueting table\nHis banner over me is love;\nHe brought me to His banqueting table\nHis banner over me is love;\nHis banner over me is love."),
    new StanzaModel("He set straight paths before my feet\nHis banner over me is love,\nHe set straight paths before my feet\nHis banner over me is love,\nHe set straight paths before my feet\nHis banner over me is love,\nHis banner over me is love."),
    new StanzaModel("He broke the chains and He set me free\nHis banner over me is love\nHe broke the chains and He set me free\nHis banner over me is love\nHe broke the chains and He set me free\nHis banner over me is love\nHis banner over me is love."),
    new StanzaModel("I am my Beloved's and He is mine\nHis banner over me is love,\nI am my Beloved's and He is mine\nHis banner over me is love,\nI am my Beloved's and He is mine\nHis banner over me is love,\nHis banner over me is love."),
    new StanzaModel("I'm safe and secure in the rock of ages\nHis banner over me is love,\nI'm safe and secure in the rock of ages\nHis banner over me is love,\nI'm safe and secure in the rock of ages\nHis banner over me is love,\nHis banner over me is love.")
  ], ""),

  new HymnModel(326, "WE ARE HEIRS", [
    new StanzaModel("We are heirs of the Father\nWe are joint-heirs with the son.\nWe are people of His Kingdom\nWe are family, we are one."),
    new StanzaModel("We are washed, we are sanctified.\nWe are cleansed by His blood.\nWe are born of the spirit\nWe are children of the Lord."),
    new StanzaModel("We are members of His body\nWe are objects of His love.\nWe're partakers of His holiness\nWe are citizens of heaven above."),
    new StanzaModel("We're partakers of His suffering;\nWe're partakers of His grace.\nWe shall meet Him to be like Him\nWe shall see Him face to face."),
    new StanzaModel("We are longing for His coming\nWe are looking to the skies;\nWe are watching, we are waiting,\nWe shall dwell with Him, we shall rise."),
    new StanzaModel("We shall reign with Him forever;\nMen and angels shout and sing.\nFor dominion has been given\nTo the family of the King.")
  ], ""),

  new HymnModel(327, "HE TOUCHED ME", [
    new StanzaModel("Shackled by a heavy burden\n'Neath a load of guilt and shame,\nThen the hand of Jesus touched me,\nAnd now I am no longer the same."),
    new StanzaModel("Since I met this blessed Saviour,\nSince He cleansed and made me whole,\nI shall never cease to praise Him,\nI'll shout it while eternity rolls.")
  ], "",
    new ChorusModel("He touched me,\nYes, He touched me;\nAnd oh, the joy\nThat floods my soul,\nSomething happened,\nAnd now I know,\nHe touched me\nAnd made me whole.")
  ),

  new HymnModel(328, "THIS WORLD IS NOT MY HOME", [
    new StanzaModel("This world is not my home\nI'm just a' passing through\nMy treasures are laid up\nSomewhere beyond the blue.\nThe angels beckon me\nFrom heaven's open door\nAnd I can't feel at home\nIn this world anymore."),
    new StanzaModel("They're all expecting me\nAnd that's one thing I know\nI fixed it up with Jesus\nMany years ago.\nI know He'll see me through\nTho' I am weak and poor\nAnd I can't feel at home\nIn this world anymore."),
    new StanzaModel("I have a loving mother\nJust over in glory land\nAnd I don't expect to stop\nuntil I shake her hand\nShe's waiting now for me\nIn heaven's open door\nAnd I can't feel at home\nIn this world anymore"),
    new StanzaModel("Just over in Gloryland,\nWe'll live eternally;\nThe saints on every hand\nAre shouting “VICTORY”\nThe songs of sweetest praise\nDrift back from heaven's shore\nAnd I can't feel at home\nIn this world anymore.")
  ], "",
    new ChorusModel("O Lord you know,\nI have no friend like you\nIf heaven's not my home\nThen Lord what will I do?\nThe angels beckon me\nFrom heaven's open door\nAnd I can't feel at home\nIn this world anymore.")
  ),

  new HymnModel(329, "BORN, BORN, BORN AGAIN", [
    new StanzaModel("Born, born, born again\nThank God I’m born again,\nBorn, born, born again,\nThank God I’m born again,\nBorn of the water\nAnd the Spirit and the blood\nThank God I’m born again,\nBorn of the water\nAnd the Spirit and the blood\nThank God I’m born again.")
  ], ""),

  new HymnModel(330, "I'M IN THAT NUMBER", [
    new StanzaModel("I'm in that number, I'm in that number,\nI'm in that number robed in white;\nI'm in that number, I'm in that number,\nI'm in that number robed in white."),
    new StanzaModel("That blood-washed number,\nI'm in that number robed in white;\nThat blood-washed number,\nThat blood-washed number,\nI'm in that number robed in white."),
    new StanzaModel("John saw that number,\nThat blood-washed number,\nJohn saw that number all robed in white;\nJohn saw that number,\nThat blood-washed number,\nJohn saw that number robed in white.")
  ], ""),

  new HymnModel(331, "GLORIOUS PEACE", [
    new StanzaModel("Glorious peace that never shall cease,\nHeartaches can’t enter these beautiful streets,\nNo pain, no woe, no rich, no poor,\nIt’s glorious to know that we’re nearing the shore.")
  ], "",
    new ChorusModel("We’re nearing the shore,\nWe’re nearing the shore,\nTroubles soon will be over, we’ll suffer no more,\nTrials all past, it’s victory at last,\nO it is wonderful to be nearing the shore.")
  ),

  new HymnModel(332, "GOODNESS AND MERCY", [
    new StanzaModel("A pilgrim was I and a wand’ring,\nIn the cold night of sin I did roam,\nWhen Jesus the Good Shepherd Found me,\nAnd now I am on my way home."),
    new StanzaModel("He restoreth my soul when I’m weary,\nHe giveth me strength day by day,\nHe leads me beside the still waters\nHe guards me each step of the way."),
    new StanzaModel("When I walk thro’ the dark lonesome valley,\nMy saviour will walk with me there,\nAnd safely His great hand will lead me,\nTo the mansions He’s gone to prepare.")
  ], "",
    new ChorusModel("Surely Goodness and mercy shall follow me,\nAll the days, all the days of my life.\nSurely Goodness and Mercy shall follow me,\nAll the days, all the days of my life.\nAnd I shall dwell in the house of the Lord forever,\nAnd I shall feast at the table spread for me,\nSurely Goodness and Mercy shall follow me,\nAll the days, all the days of my life.")
  ),

  new HymnModel(333, "MY GLORY", [
    new StanzaModel("My glory and the lifter of my head\nMy glory and the lifter of my head\nFor Thou O Lord art a shield to me\nMy gory and the lifter of my head.")
  ], "",
    new ChorusModel("I cried unto the Lord with my voice\nI cried unto the Lord with my voice\nAnd He heard me out of His holy hill…")
  ),

  new HymnModel(334, "ALL OVER THE WORLD", [
    new StanzaModel("All over the world\nThe Spirit is moving,\nAll over the world\nAs the Prophet said it would be,\nAll over the world\nThere's a mighty revelation,\nOf the glory of the Lord,\nAs the waters cover the sea."),
    new StanzaModel("All over the Church\nThe Spirit is moving,\nAll over the Church\nAs the Prophet said it would be,\nAll over the Church\nThere's a mighty revelation\nOf the glory of the Lord,\nAs the waters cover the sea."),
    new StanzaModel("Deep down in my heart\nThe Spirit is moving,\nDeep down in my heart\nAs the Prophet said it would be,\nDeep down in my heart\nThere's a mighty revelation\nOf the glory of the Lord,\nAs the waters cover the sea.")
  ], ""),

  new HymnModel(335, "THY LOVING KINDNESS", [
    new StanzaModel("Thy loving kindness is better than life\nThy loving kindness is better than life\nMy lips shall praise Thee, thus will I bless Thee\nThy loving kindness is better than life."),
    new StanzaModel("I’ll lift my hands up unto Thy name\nI’ll lift my hands up unto Thy name\nMy lips shall praise Thee, thus will I bless Thee\nThy loving kindness is better than life.")
  ], ""),

  new HymnModel(336, "TO GOD BE THE GLORY", [
    new StanzaModel("To God be the glory\nTo God be the glory\nTo God be the glory\nFor the things He has done.\nWith His blood He has saved me,\nWith His power He has raised me,\nTo God be the glory\nFor the things He has done.")
  ], ""),

  new HymnModel(337, "OH, COME LET US ADORE HIM", [
    new StanzaModel("Oh, come let us adore Him,\nOh, come let us adore Him,\nOh, come let us adore Him,\nChrist the Lord."),
    new StanzaModel("For He alone is worthy,\nFor He alone is worthy,\nFor He alone is worthy,\nChrist the Lord."),
    new StanzaModel("He is the Lily of the Valley,\nHe is the Lily of the Valley,\nHe is the Lily of the Valley,\nChrist the Lord.")
  ], ""),

  new HymnModel(338, "THOU WILT KEEP HIM IN PERFECT PEACE", [
    new StanzaModel("Thou wilt keep Him in perfect peace\nThou wilt keep Him in perfect peace\nThou wilt keep Him in perfect peace\nWhose mind is stayed on Thee."),
    new StanzaModel("Marvel not that I say unto you\nMarvel not that I say unto you\nMarvel not that I say unto you\nYou must be born again."),
    new StanzaModel("Though your sins as scarlet be\nThough your sins as scarlet be\nThough your sins as scarlet be\nThey shall be white as snow."),
    new StanzaModel("If the Son shall set you free\nIf the Son shall set you free\nIf the Son shall set you free\nYou shall be free indeed.")
  ], ""),

  new HymnModel(339, "GRACIOUS FATHER", [
    new StanzaModel("Gracious Father, gracious Father,\nWe’re so blest to be your children, gracious Father,\nAnd we lift our hearts before you,\nAs a token of our love,\nGracious Father, gracious Father."),
    new StanzaModel("Precious Jesus, precious Jesus,\nWe’re so glad that you’ve redeemed us, precious Jesus,\nAnd we lift our hands before you,\nAs a token of our love,\nPrecious Jesus, precious Jesus."),
    new StanzaModel("Holy Spirit, Holy Spirit,\nCome and fill our hearts anew, Holy Spirit.\nAnd we lift our voice before you,\nAs a token of our love,\nHoly Spirit, Holy Spirit."),
    new StanzaModel("Hallelujah, hallelujah,\nHallelujah, hallelujah,\nAnd we lift our hearts before you,\nAs a token of our love,\nHallelujah, hallelujah.")
  ], ""),

  new HymnModel(340, "UNTO THEE O LORD", [
    new StanzaModel("Unto Thee O Lord do I lift up my soul.\nUnto Thee O Lord do I lift up my soul."),
    new StanzaModel("Remember not the sins of my youth.\nRemember not the sins of my youth."),
    new StanzaModel("All the paths of the Lord are mercy and truth.\nAll the paths of the Lord are mercy and truth."),
    new StanzaModel("Turn Thee unto me, and have mercy upon me.\nTurn Thee unto me, and have mercy upon me."),
    new StanzaModel("O keep my soul and deliver me.\nO keep my soul and deliver me."),
    new StanzaModel("Let integrity and uprightness preserve me.\nLet integrity and uprightness preserve me.")
  ], "",
    new ChorusModel("O my God, I trust in Thee\nLet me not be ashamed\nLet not mine enemies triumph over me.")
  ),

  new HymnModel(341, "MY JESUS I LOVE THEE", [
    new StanzaModel("My Jesus, I love thee, I know Thou art mine,\nFor Thee all the follies of sin I resign;\nMy gracious Redeemer, my Saviour art Thou;\nIf ever I love Thee, my Jesus, tis now,"),
    new StanzaModel("I love Thee because Thou hath first loved me,\nAnd purchased my pardon on Calvary's tree;\nI love Thee for wearing the thorns on Thy brow,\nIf ever I love Thee my Jesus tis now."),
    new StanzaModel("I’ll love Thee in life, I will love Thee in death,\nAnd praise Thee as long as Thou lendest me breath,\nAnd say should the death dew lie cold on my brow,\nIf ever I loved Thee, my Jesus ‘tis now!"),
    new StanzaModel("In mansions of glory and endless delight,\nI'll ever adore Thee in heaven so bright;\nI'll sing with the glittering crown on my brow;\nIf ever I loved Thee my Jesus tis now.")
  ], ""),

  new HymnModel(342, "THERE IS A RIVER", [
    new StanzaModel("There is a river that flows from deep within,\nThere is a fountain that frees the soul from sin,\nCome to its water, there is a vast supply,\nJesus is the river, that never shall run dry."),
    new StanzaModel("There is a river that flows from God above,\nThere is a fountain that’s filled with His great love.\nCome to its water, there is a vast supply,\nJesus is the river, that never shall run dry.")
  ], ""),

  new HymnModel(343, "LET THE LORD HAVE HIS WAY", [
    new StanzaModel("Let the Lord have His way,\nIn your heart every day;\nThere's no rest, there's no peace,\n'Till the Lord has His way.\nPlace your life in His hands,\nRest secure in His plans,\nLet the Lord, let the Lord\nHave His way.")
  ], ""),

  new HymnModel(344, "ONLY TO BE WHAT HE WANTS", [
    new StanzaModel("Only to be what He wants me to be,\nEvery moment of every day,\nYielded completely to Jesus alone,\nEvery step of this pilgrim way.\nJust to be clay in the Potter’s hand,\nReady to do what His word commands,\nOnly to be what He wants me to be,\nEvery moment of every day.")
  ], ""),

  new HymnModel(345, "JESUS IS ALIVE", [
    new StanzaModel("Jesus is alive, Jesus is alive;\nHis is the blood that ransomed me,\nHis is the power that sets me free,\nHis is the life that is given to me,\nFor Jesus is alive.")
  ], ""),

  new HymnModel(346, "MAGNIFY THE LORD WITH ME", [
    new StanzaModel("O Magnify the Lord with me,\nBlessed lamb of Calvary,\nFor His grace so rich and free,\nMagnify the Lord with me.\nMagnify the Lord with me,\nBlessed Lamb of Calvary\nJesus gives the victory\nO magnify the Lord with me.")
  ], ""),

  new HymnModel(347, "THAT SOUNDS LIKE HOME TO ME", [
    new StanzaModel("Somewhere just across the Jordan river\nIs a place of everlasting joy and peace\nThe tree of life is blooming there forever\nAnd the crown of life is waiting there for me."),
    new StanzaModel("He said there’s mansion there inside the city\nThe crystal river flowing by the tree of life\nNo pain nor disappointment ever come there\nAnd Jesus Christ the Lamb will be the Light.")
  ], "",
    new ChorusModel("That sounds like home to me,\nThat’s where I long to be.\nThere’ll be no tears\nTo dim our eyes again.\nThe hills will echo with the story\nAs we sing of His grace and glory;\nWhere the saints of God will be,\nThat sounds like home to me.")
  ),

  new HymnModel(348, "THE TOMB NOW IS EMPTY", [
    new StanzaModel("The tomb now is empty,\nThe stone is rolled away,\nAnd Christ is alive in my heart.\nAnd death which is conquered\nIn me hath no part,\nFor Christ is alive in my heart.")
  ], ""),

  new HymnModel(349, "JESUS TOOK MY BURDEN", [
    new StanzaModel("Yes, Jesus took my burden,\nI could no longer bear,\nYes, Jesus took my burden\nIn answer to my prayer,\nMy anxious fears subsided,\nMy spirit was made strong\nFor Jesus took my burden\nAnd left me with a song.")
  ], ""),

  new HymnModel(350, "NOT BY MIGHT", [
    new StanzaModel("Not by might, nor by power,\nBut by my Spirit, saith the Lord\nNot by might, nor by power,\nBut by my Spirit, saith the Lord\nThis mountain shall be removed\nThis mountain shall be removed\nThis mountain shall be removed\nBy my Spirit, saith the Lord.")
  ], ""),

  new HymnModel(351, "THOU ART WORTHY", [
    new StanzaModel("Thou art worthy, Thou art worthy,\nThou art worthy O Lord,\nTo receive glory, glory and honour\nGlory and honour and power,\nFor Thou hast created all things\nAnd for Thy pleasure, they are and were created.")
  ], ""),

  new HymnModel(352, "REVELATION 22:1", [
    new StanzaModel("And He showed me a pure river\nOf water of life, clear as crystal,\nProceeding out of the throne of God.\nIn the midst of the street of it,\nAnd on either side of the river,\nWas there the tree of life.")
  ], ""),

  new HymnModel(353, "THE LORD REIGNETH", [
    new StanzaModel("The Lord reigneth, the Lord reigneth.\nBlessed be the name of our God.\nThe Lord reigneth, the Lord reigneth.\nBlessed be the name of our God.\nLet the heavens be glad\nAnd the earth rejoice.\nLet men say among the nations:\nThe Lord reigneth, the Lord reigneth.\nBlessed be the name of our God.")
  ], ""),

  new HymnModel(354, "I AM ONE OF THE FEW", [
    new StanzaModel("I am one of the few. one of the few,\nAnd by faith in God's word, I can claim it.\nTho' the way may seem long,\nTho' the opposition strong,\nFor the Bride there's a way provided.\nIf I plan to go through\nJust to hope will not do,\nI must be firmly decided\nTo follow the Lord by obeying His word\nAnd believe that I'm one of the few.")
  ], ""),

  new HymnModel(355, "I'M LIVING ON THE MOUNTAIN", [
    new StanzaModel("I'M living on the mountain\nUnderneath a cloudless sky\nI'm drinking at the fountain\nThat never shall run dry.\nO yes, I'm feasting on the manna\nFrom a bountiful supply.\nFor I am dwelling in Beulah land.")
  ], ""),

  new HymnModel(356, "I'VE BEEN REDEEMED", [
    new StanzaModel("I've been redeemed, by love divine,\nOh. glory, glory, Christ is mine,\nAll to Him I now resign.\nI have been, I have been redeemed.")
  ], ""),

  new HymnModel(357, "SWEET WILL OF GOD", [
    new StanzaModel("Sweet will of God,\nStill fold me closer.\n‘Till I am wholly lost in Thee.\nSweet will of God still fold me Closer\n‘Till I am wholly lost in Thee.")
  ], ""),

  new HymnModel(358, "HE IS ABLE", [
    new StanzaModel("My God is able, He is able\nI know my God is able,\nI know my God is able,\nTo carry me through.\nMy God is able, He is able\nI know my God is able,\nI know my God is able,\nTo carry me through.\nFor He has healed the broken hearted\nHe has set the captive free,\nHealed the sick\nRaised the dead and walked upon the sea\nMy God is able, He is able,\nI know my God,\nI know my God is able to carry me through.")
  ], ""),

  new HymnModel(359, "WHEREVER I GO", [
    new StanzaModel("Wherever I go, I'll praise Him\nWherever I go, I'll praise Him,\nFor His love surrounds me like a sea.\nI'll praise the name of Jesus\nLift up the name of Jesus\nFor the name of Jesus lifted me.")
  ], ""),

  new HymnModel(360, "I AM BLESSED", [
    new StanzaModel("I am blessed, I am blessed.\nEvery day that I live I am blessed.\nWhen I wake up in the morning\nWhen I lay my head to rest\nI am blessed, I am blessed.")
  ], ""),

  new HymnModel(361, "HE SIGNED THE DEED", [
    new StanzaModel("He signed the deed with His Atoning Blood,\nHe ever lives to make the promise good;\nTho’ all the hosts of hell\nMarch in to make a second claim,\nThey all march out\nAt the mention of His name.")
  ], ""),

  new HymnModel(362, "SPIRIT NOW MELT AND MOVE", [
    new StanzaModel("Spirit now melt and move,\nAll of our hearts with love;\nBreathe on us from above,\nWith old time power.")
  ], ""),

  new HymnModel(363, "I WILL SING OF THE MERCIES", [
    new StanzaModel("I will sing of the mercies of the Lord forever\nI will sing, I will sing.\nI will sing of the mercies of the Lord forever\nI will sing of the mercies of the Lord.\nWith my mouth shall I make known\nThy faithfulness, Thy faithfulness,\nWith my mouth shall I make known\nThy faithfulness to all generations.\nI will sing to the mercies of the Lord forever\nI will sing of the mercies of the Lord.")
  ], ""),

  new HymnModel(364, "MY HEART IS STIRRED", [
    new StanzaModel("My heart is stirred\nWhen e'er I think of Jesus,\nThat precious Name sets the captive free;\nThe only Name through which I find Salvation\nNo name on earth,\nHas meant so much to me.")
  ], ""),

  new HymnModel(365, "NO TURNING BACK", [
    new StanzaModel("I have decided to follow Jesus,\nI have decided to follow Jesus,\nI have decided to follow Jesus,\nNo turning back, no turning back."),
    new StanzaModel("The cross before me the world behind me,\nThe cross before me the world behind me,\nThe cross before me the world behind me,\nNo turning back, no turning back."),
    new StanzaModel("Take this whole world but give me Jesus,\nTake this whole world but give me Jesus,\nTake this whole world but give me Jesus,\nI won't turn back, I won't turn back."),
    new StanzaModel("I have started for the kingdom,\nI have started for the kingdom,\nI have started for the kingdom,\nI won't turn back, I won't turn back."),
    new StanzaModel("Though none go with me, still will I follow,\nThough none go with me, still will I follow,\nThough none go with me, still will I follow,\nNo turning back, no turning back.")
  ], ""),

  new HymnModel(366, "IF YOU KNOW THE LORD", [
    new StanzaModel("If you know the Lord,\nYou’ll need nobody else.\nTo see you through,\nThe darkest night;\nYou can walk alone;\nYou’ll only need the Lord;\nTo see you on the road that’s right,\nTake time to pray, every day;\nAnd as you’re heading home,\nHe’ll show you the way,\nIf you know the Lord.\nYou’ll need nobody else,\nYou’ll see the light;\nHis wonderful light.")
  ], ""),

  new HymnModel(367, "LORD, LORD, LORD", [
    new StanzaModel("Lord, Lord, Lord,\nYou've surely been good to me;\nLord, Lord, Lord,\nYou've surely been good to me;\nLord, Lord, Lord,\nYou've surely been good to me;\nYou have done what this world could not do."),
    new StanzaModel("You saved my soul when I was lost\nYou've surely been good to me;\nYou saved my soul when I was lost\nYou've surely been good to me;\nYou saved my soul when I was lost\nYou've surely been good to me;\nYou have done what this world could not do."),
    new StanzaModel("You filled me with the Holy Ghost,\nYou've surely been good to me;\nYou filled me with the Holy Ghost,\nYou've surely been good to me;\nYou filled me with the Holy Ghost,\nYou've surely been good to me;\nYou have done what this world could not do."),
    new StanzaModel("You healed my body when I was sick.\nYou've surely been good to me;\nYou healed my body when I was sick.\nYou've surely been good to me;\nYou healed my body when I was sick.\nYou've surely been good to me;\nYou have done what this world could not do.")
  ], ""),

  new HymnModel(368, "BURDENS NOW ARE LIGHTER", [
    new StanzaModel("Burdens now are lighter, brighter is my way\nIt is such a joy to walk with Him\nWhen this journey here is o'er\nI'll set my feet on heaven's shore\nEternity all joy will just begin."),
    new StanzaModel("When my Jesus saved me, washed my sins away\nCast them in the bottom of the sea\nPicked me up, turned me around\nSet my feet on higher ground\nNow I'm walking happy, glad and free.")
  ], "",
    new ChorusModel("O glory, glory hallelujah\nPraise the Lord today I know I'm free\nHe is with me and if I stay close to Him\nSafe from harm and danger I will be")
  ),

  new HymnModel(369, "JUST A LITTLE LONGER", [
    new StanzaModel("Just a little longer,\nAnd the trumpet of God shall sound\nJust a little longer,\nAnd we’ll be Glory bound,\nLook away to Heaven\nYour redemption draweth nigh\nJust a little longer,\nAnd we’ll meet Him the sky."),
    new StanzaModel("Just across the bridge,\nThere’ll be no sorrow\nJust across the bridge,\nThere’ll be no pain;\nGod’s Son is going to shine\nAcross the river,\nAnd we’ll never be unhappy again."),
    new StanzaModel("Ten thousand years,\nWe’ll just be started,\nTen thousand years,\nWe’ll just have begun;\nWhen the battle is over\nSweet victory is won,\nTen thousand years,\nAnd we’ve just begun.")
  ], ""),

  new HymnModel(370, "HE'S ON THE INSIDE", [
    new StanzaModel("He’s on the inside\nOf those pearly gates.\nHe's on the inside of heaven,\nThere He waits.\nHe'll call for me by name,\nI'll answer and I'll go\nTo be with Him who died\nAnd lives to love me so.")
  ], ""),

  new HymnModel(371, "LEARNING TO LEAN", [
    new StanzaModel("Learning to lean, learning to lean\nI’m learning to lean on Jesus\nGaining more power than I ever dreamed\nI’m learning to lean on Jesus."),
    new StanzaModel("Sad broken hearted at an altar I knelt\nI found peace that is so serene\nAnd all that He asks is a childlike trust\nAnd a heart that is learning to lean.")
  ], ""),

  new HymnModel(372, "'TIS TRUE", [
    new StanzaModel("'Tis true, oh yes 'tis true\nGod's wonderful promise is true!\nFor I've trusted and tested and tri\nAnd I know God's promise is true.")
  ], ""),

  new HymnModel(373, "THE PEARLY GATES", [
    new StanzaModel("He the pearly gates will open,\nSo that I may enter in,\nFor He purchased my redemption,\nAnd forgave me all my sins.")
  ], ""),

  new HymnModel(374, "LORD I'M COMING NOW TO THEE", [
    new StanzaModel("Lord I'm coming now to Thee\nLay Thy nail scarred hand on me\nLet Thy healing virtue flow\nAnd I shall be made whole.")
  ], ""),

  new HymnModel(375, "MAKE ME MORE LIKE THEE", [
    new StanzaModel("Make me more like Thee Jesus\nMake me more like Thee\nGive me a heart that’s filled with love\nAnd make me more like Thee.")
  ], ""),

  new HymnModel(376, "JESUS I'LL NEVER FORGET", [
    new StanzaModel("Jesus, I'll never forget\nWhat You've done for me,\nJesus, I'll never forget\nHow You set me free\nJesus, I'll never forget\nHow You brought me out\nJesus, I'll never forget, no, never.")
  ], ""),

  new HymnModel(377, "UNTIL YOU KNOW", [
    new StanzaModel("If you could own all the world and its money,\nYou could put up enough to reach the skies above,\nIf you could know everything,\nYou want to know about my faith,\nYet you’ve known nothing until you’ve\nKnown the love of God."),
    new StanzaModel("If in your lifetime you could meet everybody,\nAnd you could call every name from here to yonder,\nIf you’ve not come face to face with Jesus\nAnd His saving grace,\nFriends you’ve known nothing,\nUntil you know the love of God."),
    new StanzaModel("If in your lifetime you could learn all the theology\nAnd you could know every line of the scriptures,\nIf you’ve not known the Revelation\nOf Malachi four and end-time seal,\nFriends you’ve known nothing,\nUntil you know the love of God.")
  ], "",
    new ChorusModel("Until you know the loving hand\nThat reaches down to fallen man\nAnd picks him up above the plain\nWhere he has trod\nUntil you know just how it feels,\nTo know that God is really real,\nThen you’ve known nothing,\nUntil you know the love of God.")
  ),

  new HymnModel(378, "SWEET JESUS", [
    new StanzaModel("Sweet Jesus, sweet Jesus,\nWhat a wonder You are,\nYou're brighter than the morning star;\nYou're fairer, much fairer,\nThan the lily that grows by the wayside,\nPrecious, more precious than gold;\nJust Like the Rose of Sharon,\nYou're fairer than the fair,\nYou are all my heart and soul's desire,\nSweet Jesus, sweet Jesus,\nWhat a wonder you are,\nYou're precious, more precious than gold.")
  ], "Eb"),

  new HymnModel(379, "OVERCOMING POWER", [
    new StanzaModel("Overcoming Power\nIs what we have today;\nOvercoming power\nTo keep the devil away.\nOvercoming power\nSo we'll become the Word.\nThat's when we'll leave this sinful earth.\nAnd go to meet the Lord.")
  ], "F"),

  new HymnModel(380, "IN TIMES LIKE THESE", [
    new StanzaModel("In times like these you need a Saviour\nIn times like these you need an anchor\nBe very sure, be very sure,\nYour anchor holds and grips the solid rock."),
    new StanzaModel("In times like these you need the Bible,\nIn times like these O be not idle,\nBe very sure, be very sure,\nYour anchor holds and grips the solid rock."),
    new StanzaModel("In times like these, I have a Saviour,\nIn times like these, I have an anchor,\nI'm very sure, I'm very sure,\nMy anchor holds and grips the solid rock.")
  ], "G",
    new ChorusModel("This rock is Jesus, yes, He's the One,\nThis rock is Jesus, the only One;\nBe very sure, be very sure,\nYour anchor holds and grips the solid rock.")
  ),

  new HymnModel(381, "OH MY LOVING BROTHER", [
    new StanzaModel("Oh, the judgement day is coming\nWhat an awful day 'twill be,\nChrist forever is my refuge\nRock of ages cleft for me."),
    new StanzaModel("At the sounding of the trumpet,\nAt the dawning of the day,\nWorldly pleasures with their treasures,\nShall forever pass away."),
    new StanzaModel("Poor lost sinners will be crying,\nFor the home they'll never see,\nBut the ransomed will be singing\nRock of ages, cleft for me.")
  ], "F",
    new ChorusModel("Oh, my loving brother,\nWhen the world's on fire,\nDon't you want God's bosom\nTo be your pillow,\nHide me over in the rock of ages\nRock of ages cleft for me.")
  ),

  new HymnModel(382, "LIGHTS OF THAT CITY", [
    new StanzaModel("John tells of a city, that he saw coming down,\nWhere no sorrow or death will be known,\nThat someday we could go there\nThrough His marvelous grace,\nForever live in that heavenly home."),
    new StanzaModel("And sometimes when I'm burdened,\nAnd my cross seems hard to bear,\nAnd old Satan, he tries to dim my view,\nWell, I just look unto Jesus,\nHe is standing close by,\nThen once again, His great light shines through.")
  ], "F",
    new ChorusModel("I can almost see the lights of that city,\nI see them gathering, all around\nThe great white throne;\nWith faith in my Saviour,\nAnd His wonderful love,\nOh, I can almost see the lights of home.")
  ),

  new HymnModel(383, "I'M LOOKING FOR A CITY", [
    new StanzaModel("I'm looking for a city,\nThe one not made by hands,\nI'm looking over Jordan,\nI see the Promised Land,\nThe waters will be parted\nAnd I'll be on my way,\nAs we're crossing over Jordan I can say:"),
    new StanzaModel("I'm drinking from the fountain\nThat floweth from on high,\nA well of blessed waters\nThat never shall run dry,\nI'm feasting on God's manna,\nI'm praying day by day,\nAnd that everlasting joy is here to stay."),
    new StanzaModel("I've heard the prophet's message,\nI've placed it in my heart,\nI've got the revelation\nThat never shall depart,\nThe Rapture is upon us,\nThe stage is set to go.\nWe have this precious promise we all know.")
  ], "G",
    new ChorusModel("Now I have that everlasting joy within,\nSince He came and took away my sin,\nThe moment that He blessed me,\nHe made me fully whole,\nWith that everlasting joy within my soul.")
  ),

  new HymnModel(384, "ALL THAT THRILLS MY SOUL", [
    new StanzaModel("Who can cheer the heart like Jesus,\nBy His presence all divine?\nTrue and tender, pure and precious,\nO how blest to call Him mine!"),
    new StanzaModel("Love of Christ so freely given,\nGrace of God beyond degree,\nMercy higher than the heaven,\nDeeper than the deepest sea."),
    new StanzaModel("What a wonderful redemption!\nNever can a mortal know\nHow my sin, tho'red like crimson,\nCan be whiter than the snow."),
    new StanzaModel("Every need His hand supplying,\nEvery good in Him I see;\nOn His strength divine relying,\nHe is all in all to me."),
    new StanzaModel("By the crystal flowing river\nWith the ransomed I will sing,\nAnd forever and forever\nPraise and glorify the king.")
  ], "",
    new ChorusModel("All that thrills my soul is Jesus;\nHe is more than life to me;\nAnd the fairest of ten thousand,\nIn my blessed Lord I see.")
  ),

  new HymnModel(385, "MY SINS ARE GONE", [
    new StanzaModel("You ask me why I’m happy\nSo, I’ll just tell you why,\nBecause my sins are gone;\nAnd when I meet the scoffers\nWho ask me where they are,\nI say, my sins are gone."),
    new StanzaModel("‘Twas at the old-time altar\nWhere God came in my heart,\nAnd now my sins are gone;\nThe Lord took full possession,\nThe devil did depart,\nI’m glad my sins are gone."),
    new StanzaModel("When Satan comes to tempt me\nAnd tries to make me doubt,\nI say, my sins are gone;\nYou got me into trouble,\nBut Jesus got me out,\nI’m glad my sins are gone."),
    new StanzaModel("I’m living now for Jesus,\nI’m happy night and day,\nBecause my sins are gone\nMy Soul is filled with music,\nWith all my heart I say, I know my sins are gone.")
  ], "Eb",
    new ChorusModel("They’re underneath the Blood,\nOn the Cross of Calvary,\nAs far removed as darkness is from dawn;\nIn the sea of God’s forgetfulness,\nThat’s good enough for me,\nPraise God, my sins are gone.")
  ),

  new HymnModel(386, "HE SET ME FREE", [
    new StanzaModel("Once like a bird in prison I dwelt.\nNo freedom from my sorrow I felt.\nThen Jesus came and listened to me,\nAnd glory to God, He set me free."),
    new StanzaModel("Now I am climbing higher each day,\nDarkness of night has drifted away.\nMy feet are planted on higher ground,\nAnd glory to God, I’m homeward bound."),
    new StanzaModel("Good-bye to sin and things that confound,\nNaught of this world shall turn me around,\nDaily I’m working, I’m praying too,\nAnd glory to God, I’m going through.")
  ], "G",
    new ChorusModel("He set me free, yes, He set me free.\nHe broke the bonds of prison for me.\nI’m glory bound my Jesus to see,\nFor glory to God, He set me free.")
  ),

  new HymnModel(387, "LEAD ME TO CALVARY", [
    new StanzaModel("King of my life I crown Thee now,\nThine shall the glory be;\nLest I forget Thy thorn-crowned brow,\nLead me to Calvary."),
    new StanzaModel("Show me the tomb where Thou was laid,\nTenderly mourned and wept:\nAngels in robes of light arrayed,\nGuarded Thee whilst Thou slept."),
    new StanzaModel("Let me, like Mary, through the gloom,\nCome with a gift to Thee:\nShow to me now the empty tomb,\nLead me to Calvary."),
    new StanzaModel("May I be willing, Lord, to bear,\nDaily my cross for Thee:\nEven Thy cup of grief to share,\nThou hast borne all for me."),
    new StanzaModel("Fill me, O Lord, with Thy desire,\nFor all who know not Thee:\nThen touch my lips with holy fire,\nTo speak of Calvary.")
  ], "Eb",
    new ChorusModel("Lest I forget Gethsemane,\nLest I forget Thine agony,\nLest I forget Thy love for me,\nLead me to Calvary.")
  ),

  new HymnModel(388, "WHISPER A PRAYER", [
    new StanzaModel("Whisper a prayer in the morning,\nWhisper a prayer at noon,\nWhisper a prayer in the evening,\nTo keep your heart in tune."),
    new StanzaModel("God answers prayer in the morning,\nGod answers prayer at noon,\nGod answers prayer in the evening,\nSo, keep your heart in tune."),
    new StanzaModel("Jesus may come in the morning,\nJesus may come at noon,\nJesus may come in the evening,\nSo, keep your heart in tune.")
  ], "G"
  ),

  new HymnModel(389, "PRAISE THE LORD", [
    new StanzaModel("Praise the Lord, praise His holy name,\npraise the Lord, every day the same;\nPraise the Lord, praise His holy name,\npraise, O praise the Lord."),
    new StanzaModel("He brought me out of bondage,\npraise His holy name,\nHe brought me out of bondage,\nPraise His holy name,\nHe brought me out of bondage,\npraise His holy name,\nPraise, O praise the Lord.")
  ], "C"
  ),

  new HymnModel(390, "THANK GOD I AM FREE", [
    new StanzaModel("For a long time, I travelled\nDown a long lonely road;\nMy heart was so heavy in sin I sank low.\nThen I heard about Jesus,\nWhat a wonderful hour;\nI’m so glad that I found out\nHe could bring me out\nThrough His saving power."),
    new StanzaModel("Like a bird out of prison\nThat has taken its flight;\nLike a blind man that God\nGave back his sight.\nLike a poor wretched beggar\nThat’s found fortune and fame,\nI’m so glad that I found out\nHe could bring me out\nThro’ His holy name.")
  ], "G",
    new ChorusModel("Thank God I am free, free, free\nFrom this world of sin.\nWashed in the blood of Jesus,\nI’ve been born again.\nHallelujah, I’m saved, saved, saved\nBy His wonderful grace.\nI’m so glad that I found out\nHe could bring me out\nAnd show me the way.")
  ),

  new HymnModel(391, "MY LORD KNOWS THE WAY", [
    new StanzaModel("My Lord knows the way\nThrough the wilderness;\nAll I have to do is follow.\nMy Lord knows the way\nThrough the wilderness;\nAll I have to do is follow.\nStrength for today is mine always,\nAnd all that I need for tomorrow;\nMy Lord knows the way\nThrough the wilderness;\nAll I have to do is follow.")
  ], "F"
  ),

  new HymnModel(392, "HE PAID A DEBT", [
    new StanzaModel("He paid a debt He did not owe,\nI owed a debt I could not pay,\nI needed someone to wash my sins away;\nAnd now I sing a brand-new song,\nAmazing grace all day long,\nChrist Jesus paid a debt\nThat I could never pay."),
    new StanzaModel("He paid a debt at Calvary,\nHe cleansed my soul and set me free,\nI’m glad that Jesus did all my sins erase.\nI now can sing a brand new song,\nAmazing grace all day long,\nChrist Jesus paid a debt\nThat I could never pay."),
    new StanzaModel("One day He’s coming back for me,\nTo live with Him eternally,\nWon’t it be glory to see Him on that day!\nI then will sing a brand-new song,\nAmazing grace all day long\nChrist Jesus paid a debt\nThat I could never pay.")
  ], "C"
  ),

  new HymnModel(393, "ALL I WANT TO DO IS LOVE HIM", [
    new StanzaModel("All I want to do is love Him\nSo glad I feel His love for me,\nJesus paid the price of redemption\nOn the cross of Calvary.\nSo, every day my heart will praise Him\nI know I’ll never be the same\nAll I want to do is love Him,\nLove His holy name.")
  ], "C"
  ),

  new HymnModel(394, "WE SHALL BE CHANGED", [
    new StanzaModel("We shall be changed,\nWe shall be changed,\nChanged from mortal to immortality\nIn the twinkling of an eye.")
  ], "Ab"
  ),

  new HymnModel(395, "PSALM 122:1", [
    new StanzaModel("I was glad when they said unto me,\nI was glad when they said unto me,\nI was glad when they said unto me,\n“Let us go into the house of the Lord.”")
  ], "C"
  ),

  new HymnModel(396, "NOBODY BUT YOU, LORD", [
    new StanzaModel("Nobody but you, Lord, nobody but you,\nCan keep me happy, can keep me true.\nAll through life’s journey\nYou’ll carry me through,\nNobody but you, Lord, nobody but you.")
  ], "C"
  ),

  new HymnModel(397, "I LOVE MY JESUS", [
    new StanzaModel("I love my Jesus, for He’s my Saviour,\nAnd He has brought me unto the fountain;\nThe blessed fountain of Living Water,\nThe crystal fountain that never shall run dry.")
  ], ""
  ),

  new HymnModel(398, "VICTORY ALL THE TIME", [
    new StanzaModel("Victory, victory blessed blood bought\nvictory,\nVictory, victory, victory all the time,\nAs Jehovah liveth, strength divine He\ngiveth,\nUnto those who know Him victory all the time.")
  ], ""
  ),

  new HymnModel(399, "I like the old time way", [
    new StanzaModel("I Like the old time singing, shouting\nI like the old time way,\nI like the old time singing, shouting\nPreaching, praying,\nI like the old time way."),
    new StanzaModel("I sing about my Saviour everywhere I go.\nEverywhere I go, every where I go:\nI sing about my Saviour everywhere I go,\nFor there’s joy, joy in my soul.")
  ], "G",
    new ChorusModel("")
  ),

  new HymnModel(400, "Manifesting time", [
    new StanzaModel("The voice of my Beloved!\nBehold! He quickly comes!\nSweeping over the mountains,\nOver the hills He runs!\nI long to hear His voice!\nI long to hear Him say,\n“Arise, my love, my fair one,\nCome away,”"),
    new StanzaModel("The grapes are yours and mine,\nLittle foxes spoil the vine,\nFor the vineyard blossoms forth\nHer harvest time!\nKeep your eyes on things above\nDon’t look at me or you.\nSee that Lovely One\nHe’s coming in plain view!"),
    new StanzaModel("In the cleft of the rock,\nIn the secret place so high!\n“Til the daybreak and the shadows flee away!\nOh, in that mountain place,\nA sweet smell is coming thro”\nHe’s that Lovely One__\nHe’s coming in plain view!")
  ], "C",
    new ChorusModel("It’s manifesting time,\nThe fruits are on the vine\nAnd the Lovely One\nIs coming in plain view,\nOh, to cap God’s chosen Bride,\nRedemption draweth nigh;\nHe’s that Lovely One\nHe’s coming in plain view!")
  )

]
