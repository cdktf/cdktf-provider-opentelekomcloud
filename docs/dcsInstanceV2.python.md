# `dcsInstanceV2` Submodule <a name="`dcsInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcsInstanceV2 <a name="DcsInstanceV2" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2 opentelekomcloud_dcs_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zones: typing.List[str],
  capacity: typing.Union[int, float],
  engine: str,
  flavor: str,
  name: str,
  subnet_id: str,
  vpc_id: str,
  access_user: str = None,
  backup_policy: DcsInstanceV2BackupPolicy = None,
  deleted_nodes: typing.List[str] = None,
  description: str = None,
  enable_whitelist: typing.Union[bool, IResolvable] = None,
  engine_version: str = None,
  id: str = None,
  maintain_begin: str = None,
  maintain_end: str = None,
  parameters: typing.Union[IResolvable, typing.List[DcsInstanceV2Parameters]] = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_ip: str = None,
  rename_commands: typing.Mapping[str] = None,
  reserved_ips: typing.List[str] = None,
  security_group_id: str = None,
  ssl_enable: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  template_id: str = None,
  timeouts: DcsInstanceV2Timeouts = None,
  whitelist: typing.Union[IResolvable, typing.List[DcsInstanceV2WhitelistStruct]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#availability_zones DcsInstanceV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#capacity DcsInstanceV2#capacity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#engine DcsInstanceV2#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#flavor DcsInstanceV2#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#subnet_id DcsInstanceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#vpc_id DcsInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.accessUser">access_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#access_user DcsInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.deletedNodes">deleted_nodes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#deleted_nodes DcsInstanceV2#deleted_nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#description DcsInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.enableWhitelist">enable_whitelist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#enable_whitelist DcsInstanceV2#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#engine_version DcsInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#maintain_begin DcsInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.maintainEnd">maintain_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#maintain_end DcsInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]</code> | parameters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#password DcsInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#port DcsInstanceV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#private_ip DcsInstanceV2#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.renameCommands">rename_commands</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#rename_commands DcsInstanceV2#rename_commands}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.reservedIps">reserved_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#reserved_ips DcsInstanceV2#reserved_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#security_group_id DcsInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.sslEnable">ssl_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#ssl_enable DcsInstanceV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#tags DcsInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#template_id DcsInstanceV2#template_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.whitelist">whitelist</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]</code> | whitelist block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#availability_zones DcsInstanceV2#availability_zones}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#capacity DcsInstanceV2#capacity}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#engine DcsInstanceV2#engine}.

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.flavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#flavor DcsInstanceV2#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#subnet_id DcsInstanceV2#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#vpc_id DcsInstanceV2#vpc_id}.

---

##### `access_user`<sup>Optional</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.accessUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#access_user DcsInstanceV2#access_user}.

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.backupPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#backup_policy DcsInstanceV2#backup_policy}

---

##### `deleted_nodes`<sup>Optional</sup> <a name="deleted_nodes" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.deletedNodes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#deleted_nodes DcsInstanceV2#deleted_nodes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#description DcsInstanceV2#description}.

---

##### `enable_whitelist`<sup>Optional</sup> <a name="enable_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.enableWhitelist"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#enable_whitelist DcsInstanceV2#enable_whitelist}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#engine_version DcsInstanceV2#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.maintainBegin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#maintain_begin DcsInstanceV2#maintain_begin}.

---

##### `maintain_end`<sup>Optional</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.maintainEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#maintain_end DcsInstanceV2#maintain_end}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.parameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#parameters DcsInstanceV2#parameters}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#password DcsInstanceV2#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#port DcsInstanceV2#port}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#private_ip DcsInstanceV2#private_ip}.

---

##### `rename_commands`<sup>Optional</sup> <a name="rename_commands" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.renameCommands"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#rename_commands DcsInstanceV2#rename_commands}.

---

##### `reserved_ips`<sup>Optional</sup> <a name="reserved_ips" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.reservedIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#reserved_ips DcsInstanceV2#reserved_ips}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#security_group_id DcsInstanceV2#security_group_id}.

---

##### `ssl_enable`<sup>Optional</sup> <a name="ssl_enable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.sslEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#ssl_enable DcsInstanceV2#ssl_enable}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#tags DcsInstanceV2#tags}.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.templateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#template_id DcsInstanceV2#template_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#timeouts DcsInstanceV2#timeouts}

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.whitelist"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]

whitelist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#whitelist DcsInstanceV2#whitelist}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy">put_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putWhitelist">put_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetAccessUser">reset_access_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetBackupPolicy">reset_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetDeletedNodes">reset_deleted_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetEnableWhitelist">reset_enable_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetMaintainBegin">reset_maintain_begin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetMaintainEnd">reset_maintain_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetRenameCommands">reset_rename_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetReservedIps">reset_reserved_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetSecurityGroupId">reset_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetSslEnable">reset_ssl_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTemplateId">reset_template_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetWhitelist">reset_whitelist</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_policy` <a name="put_backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy"></a>

```python
def put_backup_policy(
  backup_at: typing.List[typing.Union[int, float]],
  begin_at: str,
  backup_type: str = None,
  period_type: str = None,
  save_days: typing.Union[int, float] = None
) -> None
```

###### `backup_at`<sup>Required</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy.parameter.backupAt"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#backup_at DcsInstanceV2#backup_at}.

---

###### `begin_at`<sup>Required</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy.parameter.beginAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#begin_at DcsInstanceV2#begin_at}.

---

###### `backup_type`<sup>Optional</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy.parameter.backupType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#backup_type DcsInstanceV2#backup_type}.

---

###### `period_type`<sup>Optional</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy.parameter.periodType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#period_type DcsInstanceV2#period_type}.

---

###### `save_days`<sup>Optional</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy.parameter.saveDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#save_days DcsInstanceV2#save_days}.

---

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[DcsInstanceV2Parameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#create DcsInstanceV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#delete DcsInstanceV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#update DcsInstanceV2#update}.

---

##### `put_whitelist` <a name="put_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putWhitelist"></a>

```python
def put_whitelist(
  value: typing.Union[IResolvable, typing.List[DcsInstanceV2WhitelistStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putWhitelist.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]

---

##### `reset_access_user` <a name="reset_access_user" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetAccessUser"></a>

```python
def reset_access_user() -> None
```

##### `reset_backup_policy` <a name="reset_backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetBackupPolicy"></a>

```python
def reset_backup_policy() -> None
```

##### `reset_deleted_nodes` <a name="reset_deleted_nodes" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetDeletedNodes"></a>

```python
def reset_deleted_nodes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_whitelist` <a name="reset_enable_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetEnableWhitelist"></a>

```python
def reset_enable_whitelist() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintain_begin` <a name="reset_maintain_begin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetMaintainBegin"></a>

```python
def reset_maintain_begin() -> None
```

##### `reset_maintain_end` <a name="reset_maintain_end" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetMaintainEnd"></a>

```python
def reset_maintain_end() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_rename_commands` <a name="reset_rename_commands" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetRenameCommands"></a>

```python
def reset_rename_commands() -> None
```

##### `reset_reserved_ips` <a name="reset_reserved_ips" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetReservedIps"></a>

```python
def reset_reserved_ips() -> None
```

##### `reset_security_group_id` <a name="reset_security_group_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetSecurityGroupId"></a>

```python
def reset_security_group_id() -> None
```

##### `reset_ssl_enable` <a name="reset_ssl_enable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetSslEnable"></a>

```python
def reset_ssl_enable() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_id` <a name="reset_template_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTemplateId"></a>

```python
def reset_template_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_whitelist` <a name="reset_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetWhitelist"></a>

```python
def reset_whitelist() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DcsInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DcsInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DcsInstanceV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DcsInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcsInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference">DcsInstanceV2BackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.bandwidthInfo">bandwidth_info</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList">DcsInstanceV2BandwidthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cacheMode">cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cpuType">cpu_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.launchedAt">launched_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maxMemory">max_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList">DcsInstanceV2ParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.productType">product_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.readonlyDomainName">readonly_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupName">security_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.shardingCount">sharding_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetCidr">subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference">DcsInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.transparentClientIpEnable">transparent_client_ip_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.usedMemory">used_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcName">vpc_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.whitelist">whitelist</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList">DcsInstanceV2WhitelistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.accessUserInput">access_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.backupPolicyInput">backup_policy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.deletedNodesInput">deleted_nodes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.enableWhitelistInput">enable_whitelist_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.flavorInput">flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainBeginInput">maintain_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainEndInput">maintain_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.renameCommandsInput">rename_commands_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.reservedIpsInput">reserved_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.sslEnableInput">ssl_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.whitelistInput">whitelist_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.accessUser">access_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.deletedNodes">deleted_nodes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.enableWhitelist">enable_whitelist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainEnd">maintain_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.renameCommands">rename_commands</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.reservedIps">reserved_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.sslEnable">ssl_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_policy`<sup>Required</sup> <a name="backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.backupPolicy"></a>

```python
backup_policy: DcsInstanceV2BackupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference">DcsInstanceV2BackupPolicyOutputReference</a>

---

##### `bandwidth_info`<sup>Required</sup> <a name="bandwidth_info" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.bandwidthInfo"></a>

```python
bandwidth_info: DcsInstanceV2BandwidthInfoList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList">DcsInstanceV2BandwidthInfoList</a>

---

##### `cache_mode`<sup>Required</sup> <a name="cache_mode" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cacheMode"></a>

```python
cache_mode: str
```

- *Type:* str

---

##### `cpu_type`<sup>Required</sup> <a name="cpu_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cpuType"></a>

```python
cpu_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `launched_at`<sup>Required</sup> <a name="launched_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.launchedAt"></a>

```python
launched_at: str
```

- *Type:* str

---

##### `max_memory`<sup>Required</sup> <a name="max_memory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maxMemory"></a>

```python
max_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.parameters"></a>

```python
parameters: DcsInstanceV2ParametersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList">DcsInstanceV2ParametersList</a>

---

##### `product_type`<sup>Required</sup> <a name="product_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.productType"></a>

```python
product_type: str
```

- *Type:* str

---

##### `readonly_domain_name`<sup>Required</sup> <a name="readonly_domain_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.readonlyDomainName"></a>

```python
readonly_domain_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_name`<sup>Required</sup> <a name="security_group_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupName"></a>

```python
security_group_name: str
```

- *Type:* str

---

##### `sharding_count`<sup>Required</sup> <a name="sharding_count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.shardingCount"></a>

```python
sharding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_cidr`<sup>Required</sup> <a name="subnet_cidr" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetCidr"></a>

```python
subnet_cidr: str
```

- *Type:* str

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.timeouts"></a>

```python
timeouts: DcsInstanceV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference">DcsInstanceV2TimeoutsOutputReference</a>

---

##### `transparent_client_ip_enable`<sup>Required</sup> <a name="transparent_client_ip_enable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.transparentClientIpEnable"></a>

```python
transparent_client_ip_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `used_memory`<sup>Required</sup> <a name="used_memory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.usedMemory"></a>

```python
used_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `vpc_name`<sup>Required</sup> <a name="vpc_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcName"></a>

```python
vpc_name: str
```

- *Type:* str

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.whitelist"></a>

```python
whitelist: DcsInstanceV2WhitelistStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList">DcsInstanceV2WhitelistStructList</a>

---

##### `access_user_input`<sup>Optional</sup> <a name="access_user_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.accessUserInput"></a>

```python
access_user_input: str
```

- *Type:* str

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_policy_input`<sup>Optional</sup> <a name="backup_policy_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.backupPolicyInput"></a>

```python
backup_policy_input: DcsInstanceV2BackupPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deleted_nodes_input`<sup>Optional</sup> <a name="deleted_nodes_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.deletedNodesInput"></a>

```python
deleted_nodes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_whitelist_input`<sup>Optional</sup> <a name="enable_whitelist_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.enableWhitelistInput"></a>

```python
enable_whitelist_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `flavor_input`<sup>Optional</sup> <a name="flavor_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.flavorInput"></a>

```python
flavor_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintain_begin_input`<sup>Optional</sup> <a name="maintain_begin_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainBeginInput"></a>

```python
maintain_begin_input: str
```

- *Type:* str

---

##### `maintain_end_input`<sup>Optional</sup> <a name="maintain_end_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainEndInput"></a>

```python
maintain_end_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[DcsInstanceV2Parameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `rename_commands_input`<sup>Optional</sup> <a name="rename_commands_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.renameCommandsInput"></a>

```python
rename_commands_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reserved_ips_input`<sup>Optional</sup> <a name="reserved_ips_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.reservedIpsInput"></a>

```python
reserved_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `ssl_enable_input`<sup>Optional</sup> <a name="ssl_enable_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.sslEnableInput"></a>

```python
ssl_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DcsInstanceV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `whitelist_input`<sup>Optional</sup> <a name="whitelist_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.whitelistInput"></a>

```python
whitelist_input: typing.Union[IResolvable, typing.List[DcsInstanceV2WhitelistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]

---

##### `access_user`<sup>Required</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.accessUser"></a>

```python
access_user: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deleted_nodes`<sup>Required</sup> <a name="deleted_nodes" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.deletedNodes"></a>

```python
deleted_nodes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_whitelist`<sup>Required</sup> <a name="enable_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.enableWhitelist"></a>

```python
enable_whitelist: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintain_begin`<sup>Required</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

---

##### `maintain_end`<sup>Required</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `rename_commands`<sup>Required</sup> <a name="rename_commands" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.renameCommands"></a>

```python
rename_commands: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `reserved_ips`<sup>Required</sup> <a name="reserved_ips" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.reservedIps"></a>

```python
reserved_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `ssl_enable`<sup>Required</sup> <a name="ssl_enable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.sslEnable"></a>

```python
ssl_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DcsInstanceV2BackupPolicy <a name="DcsInstanceV2BackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2BackupPolicy(
  backup_at: typing.List[typing.Union[int, float]],
  begin_at: str,
  backup_type: str = None,
  period_type: str = None,
  save_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.backupAt">backup_at</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#backup_at DcsInstanceV2#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.beginAt">begin_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#begin_at DcsInstanceV2#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.backupType">backup_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#backup_type DcsInstanceV2#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.periodType">period_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#period_type DcsInstanceV2#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.saveDays">save_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#save_days DcsInstanceV2#save_days}. |

---

##### `backup_at`<sup>Required</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.backupAt"></a>

```python
backup_at: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#backup_at DcsInstanceV2#backup_at}.

---

##### `begin_at`<sup>Required</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.beginAt"></a>

```python
begin_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#begin_at DcsInstanceV2#begin_at}.

---

##### `backup_type`<sup>Optional</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#backup_type DcsInstanceV2#backup_type}.

---

##### `period_type`<sup>Optional</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#period_type DcsInstanceV2#period_type}.

---

##### `save_days`<sup>Optional</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.saveDays"></a>

```python
save_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#save_days DcsInstanceV2#save_days}.

---

### DcsInstanceV2BandwidthInfo <a name="DcsInstanceV2BandwidthInfo" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2BandwidthInfo()
```


### DcsInstanceV2Config <a name="DcsInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zones: typing.List[str],
  capacity: typing.Union[int, float],
  engine: str,
  flavor: str,
  name: str,
  subnet_id: str,
  vpc_id: str,
  access_user: str = None,
  backup_policy: DcsInstanceV2BackupPolicy = None,
  deleted_nodes: typing.List[str] = None,
  description: str = None,
  enable_whitelist: typing.Union[bool, IResolvable] = None,
  engine_version: str = None,
  id: str = None,
  maintain_begin: str = None,
  maintain_end: str = None,
  parameters: typing.Union[IResolvable, typing.List[DcsInstanceV2Parameters]] = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_ip: str = None,
  rename_commands: typing.Mapping[str] = None,
  reserved_ips: typing.List[str] = None,
  security_group_id: str = None,
  ssl_enable: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  template_id: str = None,
  timeouts: DcsInstanceV2Timeouts = None,
  whitelist: typing.Union[IResolvable, typing.List[DcsInstanceV2WhitelistStruct]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#availability_zones DcsInstanceV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#capacity DcsInstanceV2#capacity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#engine DcsInstanceV2#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#flavor DcsInstanceV2#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#subnet_id DcsInstanceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#vpc_id DcsInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.accessUser">access_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#access_user DcsInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.deletedNodes">deleted_nodes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#deleted_nodes DcsInstanceV2#deleted_nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#description DcsInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.enableWhitelist">enable_whitelist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#enable_whitelist DcsInstanceV2#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#engine_version DcsInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#maintain_begin DcsInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.maintainEnd">maintain_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#maintain_end DcsInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]</code> | parameters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#password DcsInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#port DcsInstanceV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#private_ip DcsInstanceV2#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.renameCommands">rename_commands</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#rename_commands DcsInstanceV2#rename_commands}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.reservedIps">reserved_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#reserved_ips DcsInstanceV2#reserved_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#security_group_id DcsInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.sslEnable">ssl_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#ssl_enable DcsInstanceV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#tags DcsInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.templateId">template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#template_id DcsInstanceV2#template_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.whitelist">whitelist</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]</code> | whitelist block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#availability_zones DcsInstanceV2#availability_zones}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#capacity DcsInstanceV2#capacity}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#engine DcsInstanceV2#engine}.

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#flavor DcsInstanceV2#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#subnet_id DcsInstanceV2#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#vpc_id DcsInstanceV2#vpc_id}.

---

##### `access_user`<sup>Optional</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.accessUser"></a>

```python
access_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#access_user DcsInstanceV2#access_user}.

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.backupPolicy"></a>

```python
backup_policy: DcsInstanceV2BackupPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#backup_policy DcsInstanceV2#backup_policy}

---

##### `deleted_nodes`<sup>Optional</sup> <a name="deleted_nodes" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.deletedNodes"></a>

```python
deleted_nodes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#deleted_nodes DcsInstanceV2#deleted_nodes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#description DcsInstanceV2#description}.

---

##### `enable_whitelist`<sup>Optional</sup> <a name="enable_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.enableWhitelist"></a>

```python
enable_whitelist: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#enable_whitelist DcsInstanceV2#enable_whitelist}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#engine_version DcsInstanceV2#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#maintain_begin DcsInstanceV2#maintain_begin}.

---

##### `maintain_end`<sup>Optional</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#maintain_end DcsInstanceV2#maintain_end}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[DcsInstanceV2Parameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#parameters DcsInstanceV2#parameters}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#password DcsInstanceV2#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#port DcsInstanceV2#port}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#private_ip DcsInstanceV2#private_ip}.

---

##### `rename_commands`<sup>Optional</sup> <a name="rename_commands" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.renameCommands"></a>

```python
rename_commands: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#rename_commands DcsInstanceV2#rename_commands}.

---

##### `reserved_ips`<sup>Optional</sup> <a name="reserved_ips" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.reservedIps"></a>

```python
reserved_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#reserved_ips DcsInstanceV2#reserved_ips}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#security_group_id DcsInstanceV2#security_group_id}.

---

##### `ssl_enable`<sup>Optional</sup> <a name="ssl_enable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.sslEnable"></a>

```python
ssl_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#ssl_enable DcsInstanceV2#ssl_enable}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#tags DcsInstanceV2#tags}.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#template_id DcsInstanceV2#template_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.timeouts"></a>

```python
timeouts: DcsInstanceV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#timeouts DcsInstanceV2#timeouts}

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.whitelist"></a>

```python
whitelist: typing.Union[IResolvable, typing.List[DcsInstanceV2WhitelistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]

whitelist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#whitelist DcsInstanceV2#whitelist}

---

### DcsInstanceV2Parameters <a name="DcsInstanceV2Parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2Parameters(
  id: str,
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#value DcsInstanceV2#value}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#value DcsInstanceV2#value}.

---

### DcsInstanceV2Timeouts <a name="DcsInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#create DcsInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#delete DcsInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#update DcsInstanceV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#create DcsInstanceV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#delete DcsInstanceV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#update DcsInstanceV2#update}.

---

### DcsInstanceV2WhitelistStruct <a name="DcsInstanceV2WhitelistStruct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2WhitelistStruct(
  group_name: str,
  ip_list: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#group_name DcsInstanceV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#ip_list DcsInstanceV2#ip_list}. |

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#group_name DcsInstanceV2#group_name}.

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.28/docs/resources/dcs_instance_v2#ip_list DcsInstanceV2#ip_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcsInstanceV2BackupPolicyOutputReference <a name="DcsInstanceV2BackupPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetBackupType">reset_backup_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetPeriodType">reset_period_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetSaveDays">reset_save_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_type` <a name="reset_backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetBackupType"></a>

```python
def reset_backup_type() -> None
```

##### `reset_period_type` <a name="reset_period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetPeriodType"></a>

```python
def reset_period_type() -> None
```

##### `reset_save_days` <a name="reset_save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetSaveDays"></a>

```python
def reset_save_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupAtInput">backup_at_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupTypeInput">backup_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.beginAtInput">begin_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.periodTypeInput">period_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.saveDaysInput">save_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupAt">backup_at</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.beginAt">begin_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.saveDays">save_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_at_input`<sup>Optional</sup> <a name="backup_at_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupAtInput"></a>

```python
backup_at_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `backup_type_input`<sup>Optional</sup> <a name="backup_type_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupTypeInput"></a>

```python
backup_type_input: str
```

- *Type:* str

---

##### `begin_at_input`<sup>Optional</sup> <a name="begin_at_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.beginAtInput"></a>

```python
begin_at_input: str
```

- *Type:* str

---

##### `period_type_input`<sup>Optional</sup> <a name="period_type_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.periodTypeInput"></a>

```python
period_type_input: str
```

- *Type:* str

---

##### `save_days_input`<sup>Optional</sup> <a name="save_days_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.saveDaysInput"></a>

```python
save_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_at`<sup>Required</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupAt"></a>

```python
backup_at: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `begin_at`<sup>Required</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.beginAt"></a>

```python
begin_at: str
```

- *Type:* str

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `save_days`<sup>Required</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.saveDays"></a>

```python
save_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DcsInstanceV2BackupPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a>

---


### DcsInstanceV2BandwidthInfoList <a name="DcsInstanceV2BandwidthInfoList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2BandwidthInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DcsInstanceV2BandwidthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DcsInstanceV2BandwidthInfoOutputReference <a name="DcsInstanceV2BandwidthInfoOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.bandwidth">bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.beginTime">begin_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.currentTime">current_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandCount">expand_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandEffectTime">expand_effect_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandIntervalTime">expand_interval_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.maxExpandCount">max_expand_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.nextExpandTime">next_expand_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.taskRunning">task_running</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfo">DcsInstanceV2BandwidthInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.bandwidth"></a>

```python
bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `begin_time`<sup>Required</sup> <a name="begin_time" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.beginTime"></a>

```python
begin_time: str
```

- *Type:* str

---

##### `current_time`<sup>Required</sup> <a name="current_time" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.currentTime"></a>

```python
current_time: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `expand_count`<sup>Required</sup> <a name="expand_count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandCount"></a>

```python
expand_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expand_effect_time`<sup>Required</sup> <a name="expand_effect_time" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandEffectTime"></a>

```python
expand_effect_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expand_interval_time`<sup>Required</sup> <a name="expand_interval_time" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandIntervalTime"></a>

```python
expand_interval_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_expand_count`<sup>Required</sup> <a name="max_expand_count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.maxExpandCount"></a>

```python
max_expand_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `next_expand_time`<sup>Required</sup> <a name="next_expand_time" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.nextExpandTime"></a>

```python
next_expand_time: str
```

- *Type:* str

---

##### `task_running`<sup>Required</sup> <a name="task_running" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.taskRunning"></a>

```python
task_running: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.internalValue"></a>

```python
internal_value: DcsInstanceV2BandwidthInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfo">DcsInstanceV2BandwidthInfo</a>

---


### DcsInstanceV2ParametersList <a name="DcsInstanceV2ParametersList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2ParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DcsInstanceV2ParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DcsInstanceV2Parameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]]

---


### DcsInstanceV2ParametersOutputReference <a name="DcsInstanceV2ParametersOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2ParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DcsInstanceV2Parameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>]

---


### DcsInstanceV2TimeoutsOutputReference <a name="DcsInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DcsInstanceV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>]

---


### DcsInstanceV2WhitelistStructList <a name="DcsInstanceV2WhitelistStructList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2WhitelistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DcsInstanceV2WhitelistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DcsInstanceV2WhitelistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]]

---


### DcsInstanceV2WhitelistStructOutputReference <a name="DcsInstanceV2WhitelistStructOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v2

dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DcsInstanceV2WhitelistStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>]

---



