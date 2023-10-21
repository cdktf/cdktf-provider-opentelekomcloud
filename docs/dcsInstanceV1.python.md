# `opentelekomcloud_dcs_instance_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_dcs_instance_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1).

# `dcsInstanceV1` Submodule <a name="`dcsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcsInstanceV1 <a name="DcsInstanceV1" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1 opentelekomcloud_dcs_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1(
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
  capacity: typing.Union[int, float],
  engine: str,
  engine_version: str,
  name: str,
  product_id: str,
  subnet_id: str,
  vpc_id: str,
  backup_at: typing.List[typing.Union[int, float]] = None,
  backup_policy: DcsInstanceV1BackupPolicy = None,
  backup_type: str = None,
  begin_at: str = None,
  configuration: typing.Union[IResolvable, typing.List[DcsInstanceV1Configuration]] = None,
  description: str = None,
  enable_whitelist: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintain_begin: str = None,
  maintain_end: str = None,
  password: str = None,
  period_type: str = None,
  save_days: typing.Union[int, float] = None,
  security_group_id: str = None,
  timeouts: DcsInstanceV1Timeouts = None,
  whitelist: typing.Union[IResolvable, typing.List[DcsInstanceV1WhitelistStruct]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupAt">backup_at</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupType">backup_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.beginAt">begin_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]</code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.enableWhitelist">enable_whitelist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.maintainEnd">maintain_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.periodType">period_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.saveDays">save_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.whitelist">whitelist</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]</code> | whitelist block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.availableZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}.

---

##### `backup_at`<sup>Optional</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupAt"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_policy DcsInstanceV1#backup_policy}

---

##### `backup_type`<sup>Optional</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

##### `begin_at`<sup>Optional</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.beginAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.configuration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#configuration DcsInstanceV1#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}.

---

##### `enable_whitelist`<sup>Optional</sup> <a name="enable_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.enableWhitelist"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.maintainBegin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}.

---

##### `maintain_end`<sup>Optional</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.maintainEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}.

---

##### `period_type`<sup>Optional</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.periodType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

##### `save_days`<sup>Optional</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.saveDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#timeouts DcsInstanceV1#timeouts}

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.whitelist"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]

whitelist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#whitelist DcsInstanceV1#whitelist}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy">put_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist">put_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupAt">reset_backup_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupPolicy">reset_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupType">reset_backup_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBeginAt">reset_begin_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetEnableWhitelist">reset_enable_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainBegin">reset_maintain_begin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainEnd">reset_maintain_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPeriodType">reset_period_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSaveDays">reset_save_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSecurityGroupId">reset_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetWhitelist">reset_whitelist</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_backup_policy` <a name="put_backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy"></a>

```python
def put_backup_policy(
  backup_at: typing.List[typing.Union[int, float]],
  begin_at: str,
  period_type: str,
  backup_type: str = None,
  save_days: typing.Union[int, float] = None
) -> None
```

###### `backup_at`<sup>Required</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy.parameter.backupAt"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

###### `begin_at`<sup>Required</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy.parameter.beginAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

###### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy.parameter.periodType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

###### `backup_type`<sup>Optional</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy.parameter.backupType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

###### `save_days`<sup>Optional</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy.parameter.saveDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration"></a>

```python
def put_configuration(
  value: typing.Union[IResolvable, typing.List[DcsInstanceV1Configuration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#create DcsInstanceV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#delete DcsInstanceV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#update DcsInstanceV1#update}.

---

##### `put_whitelist` <a name="put_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist"></a>

```python
def put_whitelist(
  value: typing.Union[IResolvable, typing.List[DcsInstanceV1WhitelistStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]

---

##### `reset_backup_at` <a name="reset_backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupAt"></a>

```python
def reset_backup_at() -> None
```

##### `reset_backup_policy` <a name="reset_backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupPolicy"></a>

```python
def reset_backup_policy() -> None
```

##### `reset_backup_type` <a name="reset_backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupType"></a>

```python
def reset_backup_type() -> None
```

##### `reset_begin_at` <a name="reset_begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBeginAt"></a>

```python
def reset_begin_at() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_whitelist` <a name="reset_enable_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetEnableWhitelist"></a>

```python
def reset_enable_whitelist() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintain_begin` <a name="reset_maintain_begin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainBegin"></a>

```python
def reset_maintain_begin() -> None
```

##### `reset_maintain_end` <a name="reset_maintain_end" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainEnd"></a>

```python
def reset_maintain_end() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_period_type` <a name="reset_period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPeriodType"></a>

```python
def reset_period_type() -> None
```

##### `reset_save_days` <a name="reset_save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSaveDays"></a>

```python
def reset_save_days() -> None
```

##### `reset_security_group_id` <a name="reset_security_group_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSecurityGroupId"></a>

```python
def reset_security_group_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_whitelist` <a name="reset_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetWhitelist"></a>

```python
def reset_whitelist() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DcsInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DcsInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DcsInstanceV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DcsInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcsInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference">DcsInstanceV1BackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList">DcsInstanceV1ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.internalVersion">internal_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maxMemory">max_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.noPasswordAccess">no_password_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.resourceSpecCode">resource_spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupName">security_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference">DcsInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.usedMemory">used_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcName">vpc_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelist">whitelist</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList">DcsInstanceV1WhitelistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZonesInput">available_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAtInput">backup_at_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicyInput">backup_policy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupTypeInput">backup_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAtInput">begin_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configurationInput">configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelistInput">enable_whitelist_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBeginInput">maintain_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEndInput">maintain_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodTypeInput">period_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDaysInput">save_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelistInput">whitelist_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAt">backup_at</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAt">begin_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelist">enable_whitelist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEnd">maintain_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDays">save_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_policy`<sup>Required</sup> <a name="backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicy"></a>

```python
backup_policy: DcsInstanceV1BackupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference">DcsInstanceV1BackupPolicyOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configuration"></a>

```python
configuration: DcsInstanceV1ConfigurationList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList">DcsInstanceV1ConfigurationList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `internal_version`<sup>Required</sup> <a name="internal_version" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.internalVersion"></a>

```python
internal_version: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `max_memory`<sup>Required</sup> <a name="max_memory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maxMemory"></a>

```python
max_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_password_access`<sup>Required</sup> <a name="no_password_access" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.noPasswordAccess"></a>

```python
no_password_access: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_spec_code`<sup>Required</sup> <a name="resource_spec_code" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.resourceSpecCode"></a>

```python
resource_spec_code: str
```

- *Type:* str

---

##### `security_group_name`<sup>Required</sup> <a name="security_group_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupName"></a>

```python
security_group_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeouts"></a>

```python
timeouts: DcsInstanceV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference">DcsInstanceV1TimeoutsOutputReference</a>

---

##### `used_memory`<sup>Required</sup> <a name="used_memory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.usedMemory"></a>

```python
used_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `vpc_name`<sup>Required</sup> <a name="vpc_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcName"></a>

```python
vpc_name: str
```

- *Type:* str

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelist"></a>

```python
whitelist: DcsInstanceV1WhitelistStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList">DcsInstanceV1WhitelistStructList</a>

---

##### `available_zones_input`<sup>Optional</sup> <a name="available_zones_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZonesInput"></a>

```python
available_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_at_input`<sup>Optional</sup> <a name="backup_at_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAtInput"></a>

```python
backup_at_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `backup_policy_input`<sup>Optional</sup> <a name="backup_policy_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicyInput"></a>

```python
backup_policy_input: DcsInstanceV1BackupPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

---

##### `backup_type_input`<sup>Optional</sup> <a name="backup_type_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupTypeInput"></a>

```python
backup_type_input: str
```

- *Type:* str

---

##### `begin_at_input`<sup>Optional</sup> <a name="begin_at_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAtInput"></a>

```python
begin_at_input: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configurationInput"></a>

```python
configuration_input: typing.Union[IResolvable, typing.List[DcsInstanceV1Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_whitelist_input`<sup>Optional</sup> <a name="enable_whitelist_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelistInput"></a>

```python
enable_whitelist_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintain_begin_input`<sup>Optional</sup> <a name="maintain_begin_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBeginInput"></a>

```python
maintain_begin_input: str
```

- *Type:* str

---

##### `maintain_end_input`<sup>Optional</sup> <a name="maintain_end_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEndInput"></a>

```python
maintain_end_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `period_type_input`<sup>Optional</sup> <a name="period_type_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodTypeInput"></a>

```python
period_type_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `save_days_input`<sup>Optional</sup> <a name="save_days_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDaysInput"></a>

```python
save_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DcsInstanceV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `whitelist_input`<sup>Optional</sup> <a name="whitelist_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelistInput"></a>

```python
whitelist_input: typing.Union[IResolvable, typing.List[DcsInstanceV1WhitelistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZones"></a>

```python
available_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_at`<sup>Required</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAt"></a>

```python
backup_at: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `begin_at`<sup>Required</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAt"></a>

```python
begin_at: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_whitelist`<sup>Required</sup> <a name="enable_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelist"></a>

```python
enable_whitelist: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintain_begin`<sup>Required</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

---

##### `maintain_end`<sup>Required</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `save_days`<sup>Required</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDays"></a>

```python
save_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DcsInstanceV1BackupPolicy <a name="DcsInstanceV1BackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1BackupPolicy(
  backup_at: typing.List[typing.Union[int, float]],
  begin_at: str,
  period_type: str,
  backup_type: str = None,
  save_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupAt">backup_at</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.beginAt">begin_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.periodType">period_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupType">backup_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.saveDays">save_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}. |

---

##### `backup_at`<sup>Required</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupAt"></a>

```python
backup_at: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

##### `begin_at`<sup>Required</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.beginAt"></a>

```python
begin_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

##### `backup_type`<sup>Optional</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

##### `save_days`<sup>Optional</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.saveDays"></a>

```python
save_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

### DcsInstanceV1Config <a name="DcsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  available_zones: typing.List[str],
  capacity: typing.Union[int, float],
  engine: str,
  engine_version: str,
  name: str,
  product_id: str,
  subnet_id: str,
  vpc_id: str,
  backup_at: typing.List[typing.Union[int, float]] = None,
  backup_policy: DcsInstanceV1BackupPolicy = None,
  backup_type: str = None,
  begin_at: str = None,
  configuration: typing.Union[IResolvable, typing.List[DcsInstanceV1Configuration]] = None,
  description: str = None,
  enable_whitelist: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintain_begin: str = None,
  maintain_end: str = None,
  password: str = None,
  period_type: str = None,
  save_days: typing.Union[int, float] = None,
  security_group_id: str = None,
  timeouts: DcsInstanceV1Timeouts = None,
  whitelist: typing.Union[IResolvable, typing.List[DcsInstanceV1WhitelistStruct]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupAt">backup_at</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupPolicy">backup_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupType">backup_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.beginAt">begin_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]</code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.enableWhitelist">enable_whitelist</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainEnd">maintain_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.periodType">period_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.saveDays">save_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.whitelist">whitelist</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]</code> | whitelist block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.availableZones"></a>

```python
available_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}.

---

##### `backup_at`<sup>Optional</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupAt"></a>

```python
backup_at: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupPolicy"></a>

```python
backup_policy: DcsInstanceV1BackupPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_policy DcsInstanceV1#backup_policy}

---

##### `backup_type`<sup>Optional</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

##### `begin_at`<sup>Optional</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.beginAt"></a>

```python
begin_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.configuration"></a>

```python
configuration: typing.Union[IResolvable, typing.List[DcsInstanceV1Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#configuration DcsInstanceV1#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}.

---

##### `enable_whitelist`<sup>Optional</sup> <a name="enable_whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.enableWhitelist"></a>

```python
enable_whitelist: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}.

---

##### `maintain_end`<sup>Optional</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}.

---

##### `period_type`<sup>Optional</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

##### `save_days`<sup>Optional</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.saveDays"></a>

```python
save_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.timeouts"></a>

```python
timeouts: DcsInstanceV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#timeouts DcsInstanceV1#timeouts}

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.whitelist"></a>

```python
whitelist: typing.Union[IResolvable, typing.List[DcsInstanceV1WhitelistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]

whitelist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#whitelist DcsInstanceV1#whitelist}

---

### DcsInstanceV1Configuration <a name="DcsInstanceV1Configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1Configuration(
  parameter_id: str,
  parameter_name: str,
  parameter_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterId">parameter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#parameter_id DcsInstanceV1#parameter_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterName">parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#parameter_name DcsInstanceV1#parameter_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterValue">parameter_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#parameter_value DcsInstanceV1#parameter_value}. |

---

##### `parameter_id`<sup>Required</sup> <a name="parameter_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterId"></a>

```python
parameter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#parameter_id DcsInstanceV1#parameter_id}.

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#parameter_name DcsInstanceV1#parameter_name}.

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#parameter_value DcsInstanceV1#parameter_value}.

---

### DcsInstanceV1Timeouts <a name="DcsInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#create DcsInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#delete DcsInstanceV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#update DcsInstanceV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#create DcsInstanceV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#delete DcsInstanceV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#update DcsInstanceV1#update}.

---

### DcsInstanceV1WhitelistStruct <a name="DcsInstanceV1WhitelistStruct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1WhitelistStruct(
  group_name: str,
  ip_list: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#group_name DcsInstanceV1#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#ip_list DcsInstanceV1#ip_list}. |

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#group_name DcsInstanceV1#group_name}.

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/dcs_instance_v1#ip_list DcsInstanceV1#ip_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcsInstanceV1BackupPolicyOutputReference <a name="DcsInstanceV1BackupPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetBackupType">reset_backup_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetSaveDays">reset_save_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_type` <a name="reset_backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetBackupType"></a>

```python
def reset_backup_type() -> None
```

##### `reset_save_days` <a name="reset_save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetSaveDays"></a>

```python
def reset_save_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAtInput">backup_at_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupTypeInput">backup_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAtInput">begin_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodTypeInput">period_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDaysInput">save_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAt">backup_at</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAt">begin_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDays">save_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_at_input`<sup>Optional</sup> <a name="backup_at_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAtInput"></a>

```python
backup_at_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `backup_type_input`<sup>Optional</sup> <a name="backup_type_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupTypeInput"></a>

```python
backup_type_input: str
```

- *Type:* str

---

##### `begin_at_input`<sup>Optional</sup> <a name="begin_at_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAtInput"></a>

```python
begin_at_input: str
```

- *Type:* str

---

##### `period_type_input`<sup>Optional</sup> <a name="period_type_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodTypeInput"></a>

```python
period_type_input: str
```

- *Type:* str

---

##### `save_days_input`<sup>Optional</sup> <a name="save_days_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDaysInput"></a>

```python
save_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_at`<sup>Required</sup> <a name="backup_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAt"></a>

```python
backup_at: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `begin_at`<sup>Required</sup> <a name="begin_at" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAt"></a>

```python
begin_at: str
```

- *Type:* str

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `save_days`<sup>Required</sup> <a name="save_days" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDays"></a>

```python
save_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DcsInstanceV1BackupPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

---


### DcsInstanceV1ConfigurationList <a name="DcsInstanceV1ConfigurationList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1ConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DcsInstanceV1ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DcsInstanceV1Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]]

---


### DcsInstanceV1ConfigurationOutputReference <a name="DcsInstanceV1ConfigurationOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterIdInput">parameter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterId">parameter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_id_input`<sup>Optional</sup> <a name="parameter_id_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterIdInput"></a>

```python
parameter_id_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_id`<sup>Required</sup> <a name="parameter_id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterId"></a>

```python
parameter_id: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DcsInstanceV1Configuration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>]

---


### DcsInstanceV1TimeoutsOutputReference <a name="DcsInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DcsInstanceV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>]

---


### DcsInstanceV1WhitelistStructList <a name="DcsInstanceV1WhitelistStructList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1WhitelistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DcsInstanceV1WhitelistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DcsInstanceV1WhitelistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]]

---


### DcsInstanceV1WhitelistStructOutputReference <a name="DcsInstanceV1WhitelistStructOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dcs_instance_v1

dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DcsInstanceV1WhitelistStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>]

---



