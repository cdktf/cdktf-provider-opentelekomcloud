# `dmsInstanceV1` Submodule <a name="`dmsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsInstanceV1 <a name="DmsInstanceV1" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1 opentelekomcloud_dms_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v1

dmsInstanceV1.DmsInstanceV1(
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
  id: str = None,
  maintain_begin: str = None,
  maintain_end: str = None,
  partition_num: typing.Union[int, float] = None,
  password: str = None,
  retention_policy: str = None,
  specification: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#available_zones DmsInstanceV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#engine DmsInstanceV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#engine_version DmsInstanceV1#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#name DmsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#product_id DmsInstanceV1#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#security_group_id DmsInstanceV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.storageSpace">storage_space</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#storage_space DmsInstanceV1#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#storage_spec_code DmsInstanceV1#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#subnet_id DmsInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#vpc_id DmsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.accessUser">access_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#access_user DmsInstanceV1#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#description DmsInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#id DmsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#maintain_begin DmsInstanceV1#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.maintainEnd">maintain_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#maintain_end DmsInstanceV1#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.partitionNum">partition_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#partition_num DmsInstanceV1#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#password DmsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.retentionPolicy">retention_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#retention_policy DmsInstanceV1#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.specification">specification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#specification DmsInstanceV1#specification}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.availableZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#available_zones DmsInstanceV1#available_zones}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#engine DmsInstanceV1#engine}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#engine_version DmsInstanceV1#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#name DmsInstanceV1#name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#product_id DmsInstanceV1#product_id}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#security_group_id DmsInstanceV1#security_group_id}.

---

##### `storage_space`<sup>Required</sup> <a name="storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.storageSpace"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#storage_space DmsInstanceV1#storage_space}.

---

##### `storage_spec_code`<sup>Required</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.storageSpecCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#storage_spec_code DmsInstanceV1#storage_spec_code}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#subnet_id DmsInstanceV1#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#vpc_id DmsInstanceV1#vpc_id}.

---

##### `access_user`<sup>Optional</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.accessUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#access_user DmsInstanceV1#access_user}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#description DmsInstanceV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#id DmsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.maintainBegin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#maintain_begin DmsInstanceV1#maintain_begin}.

---

##### `maintain_end`<sup>Optional</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.maintainEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#maintain_end DmsInstanceV1#maintain_end}.

---

##### `partition_num`<sup>Optional</sup> <a name="partition_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.partitionNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#partition_num DmsInstanceV1#partition_num}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#password DmsInstanceV1#password}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.retentionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#retention_policy DmsInstanceV1#retention_policy}.

---

##### `specification`<sup>Optional</sup> <a name="specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.specification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#specification DmsInstanceV1#specification}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetAccessUser">reset_access_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetMaintainBegin">reset_maintain_begin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetMaintainEnd">reset_maintain_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetPartitionNum">reset_partition_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetSpecification">reset_specification</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access_user` <a name="reset_access_user" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetAccessUser"></a>

```python
def reset_access_user() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintain_begin` <a name="reset_maintain_begin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetMaintainBegin"></a>

```python
def reset_maintain_begin() -> None
```

##### `reset_maintain_end` <a name="reset_maintain_end" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetMaintainEnd"></a>

```python
def reset_maintain_end() -> None
```

##### `reset_partition_num` <a name="reset_partition_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetPartitionNum"></a>

```python
def reset_partition_num() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```

##### `reset_specification` <a name="reset_specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetSpecification"></a>

```python
def reset_specification() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DmsInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v1

dmsInstanceV1.DmsInstanceV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v1

dmsInstanceV1.DmsInstanceV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v1

dmsInstanceV1.DmsInstanceV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v1

dmsInstanceV1.DmsInstanceV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DmsInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsInstanceV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.connectAddress">connect_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.resourceSpecCode">resource_spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupName">security_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.usedStorageSpace">used_storage_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcName">vpc_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.accessUserInput">access_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.availableZonesInput">available_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainBeginInput">maintain_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainEndInput">maintain_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.partitionNumInput">partition_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.retentionPolicyInput">retention_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.specificationInput">specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpaceInput">storage_space_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpecCodeInput">storage_spec_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.accessUser">access_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainEnd">maintain_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.partitionNum">partition_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.retentionPolicy">retention_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.specification">specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpace">storage_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connect_address`<sup>Required</sup> <a name="connect_address" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.connectAddress"></a>

```python
connect_address: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_spec_code`<sup>Required</sup> <a name="resource_spec_code" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.resourceSpecCode"></a>

```python
resource_spec_code: str
```

- *Type:* str

---

##### `security_group_name`<sup>Required</sup> <a name="security_group_name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupName"></a>

```python
security_group_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `used_storage_space`<sup>Required</sup> <a name="used_storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.usedStorageSpace"></a>

```python
used_storage_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `vpc_name`<sup>Required</sup> <a name="vpc_name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcName"></a>

```python
vpc_name: str
```

- *Type:* str

---

##### `access_user_input`<sup>Optional</sup> <a name="access_user_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.accessUserInput"></a>

```python
access_user_input: str
```

- *Type:* str

---

##### `available_zones_input`<sup>Optional</sup> <a name="available_zones_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.availableZonesInput"></a>

```python
available_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintain_begin_input`<sup>Optional</sup> <a name="maintain_begin_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainBeginInput"></a>

```python
maintain_begin_input: str
```

- *Type:* str

---

##### `maintain_end_input`<sup>Optional</sup> <a name="maintain_end_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainEndInput"></a>

```python
maintain_end_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_num_input`<sup>Optional</sup> <a name="partition_num_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.partitionNumInput"></a>

```python
partition_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.retentionPolicyInput"></a>

```python
retention_policy_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `specification_input`<sup>Optional</sup> <a name="specification_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.specificationInput"></a>

```python
specification_input: str
```

- *Type:* str

---

##### `storage_space_input`<sup>Optional</sup> <a name="storage_space_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpaceInput"></a>

```python
storage_space_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_spec_code_input`<sup>Optional</sup> <a name="storage_spec_code_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpecCodeInput"></a>

```python
storage_spec_code_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `access_user`<sup>Required</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.accessUser"></a>

```python
access_user: str
```

- *Type:* str

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.availableZones"></a>

```python
available_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintain_begin`<sup>Required</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

---

##### `maintain_end`<sup>Required</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition_num`<sup>Required</sup> <a name="partition_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.partitionNum"></a>

```python
partition_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.retentionPolicy"></a>

```python
retention_policy: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.specification"></a>

```python
specification: str
```

- *Type:* str

---

##### `storage_space`<sup>Required</sup> <a name="storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpace"></a>

```python
storage_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_spec_code`<sup>Required</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpecCode"></a>

```python
storage_spec_code: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsInstanceV1Config <a name="DmsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dms_instance_v1

dmsInstanceV1.DmsInstanceV1Config(
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
  id: str = None,
  maintain_begin: str = None,
  maintain_end: str = None,
  partition_num: typing.Union[int, float] = None,
  password: str = None,
  retention_policy: str = None,
  specification: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#available_zones DmsInstanceV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#engine DmsInstanceV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#engine_version DmsInstanceV1#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#name DmsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#product_id DmsInstanceV1#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#security_group_id DmsInstanceV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.storageSpace">storage_space</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#storage_space DmsInstanceV1#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.storageSpecCode">storage_spec_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#storage_spec_code DmsInstanceV1#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#subnet_id DmsInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#vpc_id DmsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.accessUser">access_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#access_user DmsInstanceV1#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#description DmsInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#id DmsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#maintain_begin DmsInstanceV1#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.maintainEnd">maintain_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#maintain_end DmsInstanceV1#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.partitionNum">partition_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#partition_num DmsInstanceV1#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#password DmsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.retentionPolicy">retention_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#retention_policy DmsInstanceV1#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.specification">specification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#specification DmsInstanceV1#specification}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.availableZones"></a>

```python
available_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#available_zones DmsInstanceV1#available_zones}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#engine DmsInstanceV1#engine}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#engine_version DmsInstanceV1#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#name DmsInstanceV1#name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#product_id DmsInstanceV1#product_id}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#security_group_id DmsInstanceV1#security_group_id}.

---

##### `storage_space`<sup>Required</sup> <a name="storage_space" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.storageSpace"></a>

```python
storage_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#storage_space DmsInstanceV1#storage_space}.

---

##### `storage_spec_code`<sup>Required</sup> <a name="storage_spec_code" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.storageSpecCode"></a>

```python
storage_spec_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#storage_spec_code DmsInstanceV1#storage_spec_code}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#subnet_id DmsInstanceV1#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#vpc_id DmsInstanceV1#vpc_id}.

---

##### `access_user`<sup>Optional</sup> <a name="access_user" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.accessUser"></a>

```python
access_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#access_user DmsInstanceV1#access_user}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#description DmsInstanceV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#id DmsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#maintain_begin DmsInstanceV1#maintain_begin}.

---

##### `maintain_end`<sup>Optional</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#maintain_end DmsInstanceV1#maintain_end}.

---

##### `partition_num`<sup>Optional</sup> <a name="partition_num" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.partitionNum"></a>

```python
partition_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#partition_num DmsInstanceV1#partition_num}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#password DmsInstanceV1#password}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.retentionPolicy"></a>

```python
retention_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#retention_policy DmsInstanceV1#retention_policy}.

---

##### `specification`<sup>Optional</sup> <a name="specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.specification"></a>

```python
specification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/dms_instance_v1#specification DmsInstanceV1#specification}.

---



