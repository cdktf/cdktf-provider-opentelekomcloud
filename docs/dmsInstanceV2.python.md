# `dmsInstanceV2` Submodule <a name="`dmsInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsInstanceV2 <a name="DmsInstanceV2" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2 opentelekomcloud_dms_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v2

dmsInstanceV2.DmsInstanceV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  available_zones: typing.List[str],
  engine: str,
  engine_version: str,
  name: str,
  product_id: str,
  security_group_id: str,
  storage_space: typing.Union[int, float],
  storage_spec_code: str,
  subnet_id: str,
  vpc_id: str,
  access_user: str = None,
  description: str = None,
  disk_encrypted_enable: typing.Union[bool, IResolvable] = None,
  disk_encrypted_key: str = None,
  enable_publicip: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintain_begin: str = None,
  maintain_end: str = None,
  partition_num: typing.Union[int, float] = None,
  password: str = None,
  public_bandwidth: typing.Union[int, float] = None,
  publicip_id: typing.List[str] = None,
  retention_policy: str = None,
  specification: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DmsInstanceV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#available_zones DmsInstanceV2#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#engine DmsInstanceV2#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#engine_version DmsInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#name DmsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#product_id DmsInstanceV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#security_group_id DmsInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.storageSpace">storage_space</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#storage_space DmsInstanceV2#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#storage_spec_code DmsInstanceV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#subnet_id DmsInstanceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#vpc_id DmsInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.accessUser">access_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#access_user DmsInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#description DmsInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.diskEncryptedEnable">disk_encrypted_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#disk_encrypted_enable DmsInstanceV2#disk_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.diskEncryptedKey">disk_encrypted_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#disk_encrypted_key DmsInstanceV2#disk_encrypted_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.enablePublicip">enable_publicip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#enable_publicip DmsInstanceV2#enable_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#id DmsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#maintain_begin DmsInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.maintainEnd">maintain_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#maintain_end DmsInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.partitionNum">partition_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#partition_num DmsInstanceV2#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#password DmsInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.publicBandwidth">public_bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#public_bandwidth DmsInstanceV2#public_bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.publicipId">publicip_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#publicip_id DmsInstanceV2#publicip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.retentionPolicy">retention_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#retention_policy DmsInstanceV2#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.specification">specification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#specification DmsInstanceV2#specification}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#tags DmsInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.availableZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#available_zones DmsInstanceV2#available_zones}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#engine DmsInstanceV2#engine}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#engine_version DmsInstanceV2#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#name DmsInstanceV2#name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#product_id DmsInstanceV2#product_id}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#security_group_id DmsInstanceV2#security_group_id}.

---

##### `storage_space`<sup>Required</sup> <a name="storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.storageSpace"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#storage_space DmsInstanceV2#storage_space}.

---

##### `storage_spec_code`<sup>Required</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.storageSpecCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#storage_spec_code DmsInstanceV2#storage_spec_code}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#subnet_id DmsInstanceV2#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#vpc_id DmsInstanceV2#vpc_id}.

---

##### `access_user`<sup>Optional</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.accessUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#access_user DmsInstanceV2#access_user}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#description DmsInstanceV2#description}.

---

##### `disk_encrypted_enable`<sup>Optional</sup> <a name="disk_encrypted_enable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.diskEncryptedEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#disk_encrypted_enable DmsInstanceV2#disk_encrypted_enable}.

---

##### `disk_encrypted_key`<sup>Optional</sup> <a name="disk_encrypted_key" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.diskEncryptedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#disk_encrypted_key DmsInstanceV2#disk_encrypted_key}.

---

##### `enable_publicip`<sup>Optional</sup> <a name="enable_publicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.enablePublicip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#enable_publicip DmsInstanceV2#enable_publicip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#id DmsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.maintainBegin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#maintain_begin DmsInstanceV2#maintain_begin}.

---

##### `maintain_end`<sup>Optional</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.maintainEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#maintain_end DmsInstanceV2#maintain_end}.

---

##### `partition_num`<sup>Optional</sup> <a name="partition_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.partitionNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#partition_num DmsInstanceV2#partition_num}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#password DmsInstanceV2#password}.

---

##### `public_bandwidth`<sup>Optional</sup> <a name="public_bandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.publicBandwidth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#public_bandwidth DmsInstanceV2#public_bandwidth}.

---

##### `publicip_id`<sup>Optional</sup> <a name="publicip_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.publicipId"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#publicip_id DmsInstanceV2#publicip_id}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.retentionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#retention_policy DmsInstanceV2#retention_policy}.

---

##### `specification`<sup>Optional</sup> <a name="specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.specification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#specification DmsInstanceV2#specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#tags DmsInstanceV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#timeouts DmsInstanceV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetAccessUser">reset_access_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDiskEncryptedEnable">reset_disk_encrypted_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDiskEncryptedKey">reset_disk_encrypted_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetEnablePublicip">reset_enable_publicip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainBegin">reset_maintain_begin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainEnd">reset_maintain_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPartitionNum">reset_partition_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicBandwidth">reset_public_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicipId">reset_publicip_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetSpecification">reset_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#create DmsInstanceV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#delete DmsInstanceV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#update DmsInstanceV2#update}.

---

##### `reset_access_user` <a name="reset_access_user" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetAccessUser"></a>

```python
def reset_access_user() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_encrypted_enable` <a name="reset_disk_encrypted_enable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDiskEncryptedEnable"></a>

```python
def reset_disk_encrypted_enable() -> None
```

##### `reset_disk_encrypted_key` <a name="reset_disk_encrypted_key" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDiskEncryptedKey"></a>

```python
def reset_disk_encrypted_key() -> None
```

##### `reset_enable_publicip` <a name="reset_enable_publicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetEnablePublicip"></a>

```python
def reset_enable_publicip() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintain_begin` <a name="reset_maintain_begin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainBegin"></a>

```python
def reset_maintain_begin() -> None
```

##### `reset_maintain_end` <a name="reset_maintain_end" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainEnd"></a>

```python
def reset_maintain_end() -> None
```

##### `reset_partition_num` <a name="reset_partition_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPartitionNum"></a>

```python
def reset_partition_num() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_public_bandwidth` <a name="reset_public_bandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicBandwidth"></a>

```python
def reset_public_bandwidth() -> None
```

##### `reset_publicip_id` <a name="reset_publicip_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicipId"></a>

```python
def reset_publicip_id() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```

##### `reset_specification` <a name="reset_specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetSpecification"></a>

```python
def reset_specification() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DmsInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v2

dmsInstanceV2.DmsInstanceV2.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v2

dmsInstanceV2.DmsInstanceV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v2

dmsInstanceV2.DmsInstanceV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v2

dmsInstanceV2.DmsInstanceV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DmsInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsInstanceV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connectAddress">connect_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicAccessEnabled">public_access_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicConnectAddress">public_connect_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.resourceSpecCode">resource_spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupName">security_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.sslEnable">ssl_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageResourceId">storage_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetCidr">subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference">DmsInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.totalStorageSpace">total_storage_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.usedStorageSpace">used_storage_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcName">vpc_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUserInput">access_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZonesInput">available_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedEnableInput">disk_encrypted_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedKeyInput">disk_encrypted_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicipInput">enable_publicip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBeginInput">maintain_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEndInput">maintain_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNumInput">partition_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidthInput">public_bandwidth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipIdInput">publicip_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicyInput">retention_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specificationInput">specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpaceInput">storage_space_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCodeInput">storage_spec_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUser">access_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedEnable">disk_encrypted_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedKey">disk_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicip">enable_publicip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEnd">maintain_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNum">partition_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidth">public_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipId">publicip_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicy">retention_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specification">specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpace">storage_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connect_address`<sup>Required</sup> <a name="connect_address" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connectAddress"></a>

```python
connect_address: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `node_num`<sup>Required</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nodeNum"></a>

```python
node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_access_enabled`<sup>Required</sup> <a name="public_access_enabled" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicAccessEnabled"></a>

```python
public_access_enabled: str
```

- *Type:* str

---

##### `public_connect_address`<sup>Required</sup> <a name="public_connect_address" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicConnectAddress"></a>

```python
public_connect_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_spec_code`<sup>Required</sup> <a name="resource_spec_code" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.resourceSpecCode"></a>

```python
resource_spec_code: str
```

- *Type:* str

---

##### `security_group_name`<sup>Required</sup> <a name="security_group_name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupName"></a>

```python
security_group_name: str
```

- *Type:* str

---

##### `ssl_enable`<sup>Required</sup> <a name="ssl_enable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.sslEnable"></a>

```python
ssl_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_resource_id`<sup>Required</sup> <a name="storage_resource_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageResourceId"></a>

```python
storage_resource_id: str
```

- *Type:* str

---

##### `subnet_cidr`<sup>Required</sup> <a name="subnet_cidr" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetCidr"></a>

```python
subnet_cidr: str
```

- *Type:* str

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeouts"></a>

```python
timeouts: DmsInstanceV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference">DmsInstanceV2TimeoutsOutputReference</a>

---

##### `total_storage_space`<sup>Required</sup> <a name="total_storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.totalStorageSpace"></a>

```python
total_storage_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `used_storage_space`<sup>Required</sup> <a name="used_storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.usedStorageSpace"></a>

```python
used_storage_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `vpc_name`<sup>Required</sup> <a name="vpc_name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcName"></a>

```python
vpc_name: str
```

- *Type:* str

---

##### `access_user_input`<sup>Optional</sup> <a name="access_user_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUserInput"></a>

```python
access_user_input: str
```

- *Type:* str

---

##### `available_zones_input`<sup>Optional</sup> <a name="available_zones_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZonesInput"></a>

```python
available_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_encrypted_enable_input`<sup>Optional</sup> <a name="disk_encrypted_enable_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedEnableInput"></a>

```python
disk_encrypted_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_encrypted_key_input`<sup>Optional</sup> <a name="disk_encrypted_key_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedKeyInput"></a>

```python
disk_encrypted_key_input: str
```

- *Type:* str

---

##### `enable_publicip_input`<sup>Optional</sup> <a name="enable_publicip_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicipInput"></a>

```python
enable_publicip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintain_begin_input`<sup>Optional</sup> <a name="maintain_begin_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBeginInput"></a>

```python
maintain_begin_input: str
```

- *Type:* str

---

##### `maintain_end_input`<sup>Optional</sup> <a name="maintain_end_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEndInput"></a>

```python
maintain_end_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_num_input`<sup>Optional</sup> <a name="partition_num_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNumInput"></a>

```python
partition_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `public_bandwidth_input`<sup>Optional</sup> <a name="public_bandwidth_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidthInput"></a>

```python
public_bandwidth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicip_id_input`<sup>Optional</sup> <a name="publicip_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipIdInput"></a>

```python
publicip_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicyInput"></a>

```python
retention_policy_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `specification_input`<sup>Optional</sup> <a name="specification_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specificationInput"></a>

```python
specification_input: str
```

- *Type:* str

---

##### `storage_space_input`<sup>Optional</sup> <a name="storage_space_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpaceInput"></a>

```python
storage_space_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_spec_code_input`<sup>Optional</sup> <a name="storage_spec_code_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCodeInput"></a>

```python
storage_spec_code_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DmsInstanceV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `access_user`<sup>Required</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUser"></a>

```python
access_user: str
```

- *Type:* str

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZones"></a>

```python
available_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk_encrypted_enable`<sup>Required</sup> <a name="disk_encrypted_enable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedEnable"></a>

```python
disk_encrypted_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_encrypted_key`<sup>Required</sup> <a name="disk_encrypted_key" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedKey"></a>

```python
disk_encrypted_key: str
```

- *Type:* str

---

##### `enable_publicip`<sup>Required</sup> <a name="enable_publicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicip"></a>

```python
enable_publicip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintain_begin`<sup>Required</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

---

##### `maintain_end`<sup>Required</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition_num`<sup>Required</sup> <a name="partition_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNum"></a>

```python
partition_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `public_bandwidth`<sup>Required</sup> <a name="public_bandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidth"></a>

```python
public_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicip_id`<sup>Required</sup> <a name="publicip_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipId"></a>

```python
publicip_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicy"></a>

```python
retention_policy: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specification"></a>

```python
specification: str
```

- *Type:* str

---

##### `storage_space`<sup>Required</sup> <a name="storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpace"></a>

```python
storage_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_spec_code`<sup>Required</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCode"></a>

```python
storage_spec_code: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsInstanceV2Config <a name="DmsInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v2

dmsInstanceV2.DmsInstanceV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  available_zones: typing.List[str],
  engine: str,
  engine_version: str,
  name: str,
  product_id: str,
  security_group_id: str,
  storage_space: typing.Union[int, float],
  storage_spec_code: str,
  subnet_id: str,
  vpc_id: str,
  access_user: str = None,
  description: str = None,
  disk_encrypted_enable: typing.Union[bool, IResolvable] = None,
  disk_encrypted_key: str = None,
  enable_publicip: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintain_begin: str = None,
  maintain_end: str = None,
  partition_num: typing.Union[int, float] = None,
  password: str = None,
  public_bandwidth: typing.Union[int, float] = None,
  publicip_id: typing.List[str] = None,
  retention_policy: str = None,
  specification: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DmsInstanceV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#available_zones DmsInstanceV2#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#engine DmsInstanceV2#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#engine_version DmsInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#name DmsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#product_id DmsInstanceV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#security_group_id DmsInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpace">storage_space</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#storage_space DmsInstanceV2#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#storage_spec_code DmsInstanceV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#subnet_id DmsInstanceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#vpc_id DmsInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.accessUser">access_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#access_user DmsInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#description DmsInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.diskEncryptedEnable">disk_encrypted_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#disk_encrypted_enable DmsInstanceV2#disk_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.diskEncryptedKey">disk_encrypted_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#disk_encrypted_key DmsInstanceV2#disk_encrypted_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.enablePublicip">enable_publicip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#enable_publicip DmsInstanceV2#enable_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#id DmsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#maintain_begin DmsInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainEnd">maintain_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#maintain_end DmsInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.partitionNum">partition_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#partition_num DmsInstanceV2#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#password DmsInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicBandwidth">public_bandwidth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#public_bandwidth DmsInstanceV2#public_bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicipId">publicip_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#publicip_id DmsInstanceV2#publicip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.retentionPolicy">retention_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#retention_policy DmsInstanceV2#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.specification">specification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#specification DmsInstanceV2#specification}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#tags DmsInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.availableZones"></a>

```python
available_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#available_zones DmsInstanceV2#available_zones}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#engine DmsInstanceV2#engine}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#engine_version DmsInstanceV2#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#name DmsInstanceV2#name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#product_id DmsInstanceV2#product_id}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#security_group_id DmsInstanceV2#security_group_id}.

---

##### `storage_space`<sup>Required</sup> <a name="storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpace"></a>

```python
storage_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#storage_space DmsInstanceV2#storage_space}.

---

##### `storage_spec_code`<sup>Required</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpecCode"></a>

```python
storage_spec_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#storage_spec_code DmsInstanceV2#storage_spec_code}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#subnet_id DmsInstanceV2#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#vpc_id DmsInstanceV2#vpc_id}.

---

##### `access_user`<sup>Optional</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.accessUser"></a>

```python
access_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#access_user DmsInstanceV2#access_user}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#description DmsInstanceV2#description}.

---

##### `disk_encrypted_enable`<sup>Optional</sup> <a name="disk_encrypted_enable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.diskEncryptedEnable"></a>

```python
disk_encrypted_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#disk_encrypted_enable DmsInstanceV2#disk_encrypted_enable}.

---

##### `disk_encrypted_key`<sup>Optional</sup> <a name="disk_encrypted_key" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.diskEncryptedKey"></a>

```python
disk_encrypted_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#disk_encrypted_key DmsInstanceV2#disk_encrypted_key}.

---

##### `enable_publicip`<sup>Optional</sup> <a name="enable_publicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.enablePublicip"></a>

```python
enable_publicip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#enable_publicip DmsInstanceV2#enable_publicip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#id DmsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#maintain_begin DmsInstanceV2#maintain_begin}.

---

##### `maintain_end`<sup>Optional</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#maintain_end DmsInstanceV2#maintain_end}.

---

##### `partition_num`<sup>Optional</sup> <a name="partition_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.partitionNum"></a>

```python
partition_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#partition_num DmsInstanceV2#partition_num}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#password DmsInstanceV2#password}.

---

##### `public_bandwidth`<sup>Optional</sup> <a name="public_bandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicBandwidth"></a>

```python
public_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#public_bandwidth DmsInstanceV2#public_bandwidth}.

---

##### `publicip_id`<sup>Optional</sup> <a name="publicip_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicipId"></a>

```python
publicip_id: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#publicip_id DmsInstanceV2#publicip_id}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.retentionPolicy"></a>

```python
retention_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#retention_policy DmsInstanceV2#retention_policy}.

---

##### `specification`<sup>Optional</sup> <a name="specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.specification"></a>

```python
specification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#specification DmsInstanceV2#specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#tags DmsInstanceV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.timeouts"></a>

```python
timeouts: DmsInstanceV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#timeouts DmsInstanceV2#timeouts}

---

### DmsInstanceV2Timeouts <a name="DmsInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v2

dmsInstanceV2.DmsInstanceV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#create DmsInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#delete DmsInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#update DmsInstanceV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#create DmsInstanceV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#delete DmsInstanceV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/dms_instance_v2#update DmsInstanceV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsInstanceV2TimeoutsOutputReference <a name="DmsInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v2

dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DmsInstanceV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>]

---



