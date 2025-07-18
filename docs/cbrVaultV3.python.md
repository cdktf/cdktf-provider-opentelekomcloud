# `cbrVaultV3` Submodule <a name="`cbrVaultV3` Submodule" id="@cdktf/provider-opentelekomcloud.cbrVaultV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CbrVaultV3 <a name="CbrVaultV3" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3 opentelekomcloud_cbr_vault_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing: CbrVaultV3Billing,
  name: str,
  auto_bind: typing.Union[bool, IResolvable] = None,
  auto_expand: typing.Union[bool, IResolvable] = None,
  backup_policy_id: str = None,
  bind_rules: typing.Union[IResolvable, typing.List[CbrVaultV3BindRules]] = None,
  description: str = None,
  enterprise_project_id: str = None,
  id: str = None,
  locked: typing.Union[bool, IResolvable] = None,
  resource: typing.Union[IResolvable, typing.List[CbrVaultV3Resource]] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.billing">billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | billing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.autoBind">auto_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.autoExpand">auto_expand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.bindRules">bind_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]</code> | bind_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#description CbrVaultV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#locked CbrVaultV3#locked}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.resource">resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.billing"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#billing CbrVaultV3#billing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `auto_bind`<sup>Optional</sup> <a name="auto_bind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.autoBind"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}.

---

##### `auto_expand`<sup>Optional</sup> <a name="auto_expand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.autoExpand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}.

---

##### `backup_policy_id`<sup>Optional</sup> <a name="backup_policy_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.backupPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}.

---

##### `bind_rules`<sup>Optional</sup> <a name="bind_rules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.bindRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]

bind_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#bind_rules CbrVaultV3#bind_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#description CbrVaultV3#description}.

---

##### `enterprise_project_id`<sup>Optional</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.enterpriseProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.locked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#locked CbrVaultV3#locked}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.resource"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling">put_billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules">put_bind_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource">put_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind">reset_auto_bind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand">reset_auto_expand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId">reset_backup_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules">reset_bind_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId">reset_enterprise_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetLocked">reset_locked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource">reset_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_billing` <a name="put_billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling"></a>

```python
def put_billing(
  object_type: str,
  protect_type: str,
  size: typing.Union[int, float],
  charging_mode: str = None,
  cloud_type: str = None,
  consistent_level: str = None,
  console_url: str = None,
  extra_info: typing.Mapping[str] = None,
  is_auto_pay: typing.Union[bool, IResolvable] = None,
  is_auto_renew: typing.Union[bool, IResolvable] = None,
  period_num: typing.Union[int, float] = None,
  period_type: str = None
) -> None
```

###### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}.

---

###### `protect_type`<sup>Required</sup> <a name="protect_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.protectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}.

---

###### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

###### `charging_mode`<sup>Optional</sup> <a name="charging_mode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.chargingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}.

---

###### `cloud_type`<sup>Optional</sup> <a name="cloud_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.cloudType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}.

---

###### `consistent_level`<sup>Optional</sup> <a name="consistent_level" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.consistentLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}.

---

###### `console_url`<sup>Optional</sup> <a name="console_url" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.consoleUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}.

---

###### `extra_info`<sup>Optional</sup> <a name="extra_info" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.extraInfo"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}.

---

###### `is_auto_pay`<sup>Optional</sup> <a name="is_auto_pay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.isAutoPay"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}.

---

###### `is_auto_renew`<sup>Optional</sup> <a name="is_auto_renew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.isAutoRenew"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}.

---

###### `period_num`<sup>Optional</sup> <a name="period_num" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.periodNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}.

---

###### `period_type`<sup>Optional</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.periodType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}.

---

##### `put_bind_rules` <a name="put_bind_rules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules"></a>

```python
def put_bind_rules(
  value: typing.Union[IResolvable, typing.List[CbrVaultV3BindRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]

---

##### `put_resource` <a name="put_resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource"></a>

```python
def put_resource(
  value: typing.Union[IResolvable, typing.List[CbrVaultV3Resource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]

---

##### `reset_auto_bind` <a name="reset_auto_bind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind"></a>

```python
def reset_auto_bind() -> None
```

##### `reset_auto_expand` <a name="reset_auto_expand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand"></a>

```python
def reset_auto_expand() -> None
```

##### `reset_backup_policy_id` <a name="reset_backup_policy_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId"></a>

```python
def reset_backup_policy_id() -> None
```

##### `reset_bind_rules` <a name="reset_bind_rules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules"></a>

```python
def reset_bind_rules() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enterprise_project_id` <a name="reset_enterprise_project_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId"></a>

```python
def reset_enterprise_project_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_locked` <a name="reset_locked" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetLocked"></a>

```python
def reset_locked() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource"></a>

```python
def reset_resource() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CbrVaultV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CbrVaultV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CbrVaultV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CbrVaultV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CbrVaultV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules">bind_rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId">provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput">auto_bind_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput">auto_expand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput">backup_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput">billing_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput">bind_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput">enterprise_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lockedInput">locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput">resource_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind">auto_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand">auto_expand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing"></a>

```python
billing: CbrVaultV3BillingOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a>

---

##### `bind_rules`<sup>Required</sup> <a name="bind_rules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules"></a>

```python
bind_rules: CbrVaultV3BindRulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource"></a>

```python
resource: CbrVaultV3ResourceList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a>

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `auto_bind_input`<sup>Optional</sup> <a name="auto_bind_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput"></a>

```python
auto_bind_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_expand_input`<sup>Optional</sup> <a name="auto_expand_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput"></a>

```python
auto_expand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_policy_id_input`<sup>Optional</sup> <a name="backup_policy_id_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput"></a>

```python
backup_policy_id_input: str
```

- *Type:* str

---

##### `billing_input`<sup>Optional</sup> <a name="billing_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput"></a>

```python
billing_input: CbrVaultV3Billing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `bind_rules_input`<sup>Optional</sup> <a name="bind_rules_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput"></a>

```python
bind_rules_input: typing.Union[IResolvable, typing.List[CbrVaultV3BindRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enterprise_project_id_input`<sup>Optional</sup> <a name="enterprise_project_id_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput"></a>

```python
enterprise_project_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `locked_input`<sup>Optional</sup> <a name="locked_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lockedInput"></a>

```python
locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput"></a>

```python
resource_input: typing.Union[IResolvable, typing.List[CbrVaultV3Resource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auto_bind`<sup>Required</sup> <a name="auto_bind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind"></a>

```python
auto_bind: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_expand`<sup>Required</sup> <a name="auto_expand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand"></a>

```python
auto_expand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enterprise_project_id`<sup>Required</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CbrVaultV3Billing <a name="CbrVaultV3Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3Billing(
  object_type: str,
  protect_type: str,
  size: typing.Union[int, float],
  charging_mode: str = None,
  cloud_type: str = None,
  consistent_level: str = None,
  console_url: str = None,
  extra_info: typing.Mapping[str] = None,
  is_auto_pay: typing.Union[bool, IResolvable] = None,
  is_auto_renew: typing.Union[bool, IResolvable] = None,
  period_num: typing.Union[int, float] = None,
  period_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType">protect_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode">charging_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType">cloud_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel">consistent_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl">console_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo">extra_info</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay">is_auto_pay</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew">is_auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum">period_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType">period_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}. |

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}.

---

##### `protect_type`<sup>Required</sup> <a name="protect_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType"></a>

```python
protect_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `charging_mode`<sup>Optional</sup> <a name="charging_mode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode"></a>

```python
charging_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}.

---

##### `cloud_type`<sup>Optional</sup> <a name="cloud_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType"></a>

```python
cloud_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}.

---

##### `consistent_level`<sup>Optional</sup> <a name="consistent_level" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel"></a>

```python
consistent_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}.

---

##### `console_url`<sup>Optional</sup> <a name="console_url" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl"></a>

```python
console_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}.

---

##### `extra_info`<sup>Optional</sup> <a name="extra_info" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo"></a>

```python
extra_info: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}.

---

##### `is_auto_pay`<sup>Optional</sup> <a name="is_auto_pay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay"></a>

```python
is_auto_pay: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}.

---

##### `is_auto_renew`<sup>Optional</sup> <a name="is_auto_renew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew"></a>

```python
is_auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}.

---

##### `period_num`<sup>Optional</sup> <a name="period_num" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum"></a>

```python
period_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}.

---

##### `period_type`<sup>Optional</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}.

---

### CbrVaultV3BindRules <a name="CbrVaultV3BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3BindRules(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#key CbrVaultV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#value CbrVaultV3#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#key CbrVaultV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#value CbrVaultV3#value}.

---

### CbrVaultV3Config <a name="CbrVaultV3Config" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing: CbrVaultV3Billing,
  name: str,
  auto_bind: typing.Union[bool, IResolvable] = None,
  auto_expand: typing.Union[bool, IResolvable] = None,
  backup_policy_id: str = None,
  bind_rules: typing.Union[IResolvable, typing.List[CbrVaultV3BindRules]] = None,
  description: str = None,
  enterprise_project_id: str = None,
  id: str = None,
  locked: typing.Union[bool, IResolvable] = None,
  resource: typing.Union[IResolvable, typing.List[CbrVaultV3Resource]] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | billing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind">auto_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand">auto_expand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules">bind_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]</code> | bind_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#description CbrVaultV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#locked CbrVaultV3#locked}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource">resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing"></a>

```python
billing: CbrVaultV3Billing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#billing CbrVaultV3#billing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `auto_bind`<sup>Optional</sup> <a name="auto_bind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind"></a>

```python
auto_bind: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}.

---

##### `auto_expand`<sup>Optional</sup> <a name="auto_expand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand"></a>

```python
auto_expand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}.

---

##### `backup_policy_id`<sup>Optional</sup> <a name="backup_policy_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}.

---

##### `bind_rules`<sup>Optional</sup> <a name="bind_rules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules"></a>

```python
bind_rules: typing.Union[IResolvable, typing.List[CbrVaultV3BindRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]

bind_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#bind_rules CbrVaultV3#bind_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#description CbrVaultV3#description}.

---

##### `enterprise_project_id`<sup>Optional</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#locked CbrVaultV3#locked}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource"></a>

```python
resource: typing.Union[IResolvable, typing.List[CbrVaultV3Resource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}.

---

### CbrVaultV3Resource <a name="CbrVaultV3Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3Resource(
  backup_count: typing.Union[int, float] = None,
  backup_size: typing.Union[int, float] = None,
  exclude_volumes: typing.List[str] = None,
  id: str = None,
  include_volumes: typing.List[str] = None,
  name: str = None,
  protect_status: str = None,
  size: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount">backup_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize">backup_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes">exclude_volumes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes">include_volumes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus">protect_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#type CbrVaultV3#type}. |

---

##### `backup_count`<sup>Optional</sup> <a name="backup_count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount"></a>

```python
backup_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}.

---

##### `backup_size`<sup>Optional</sup> <a name="backup_size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize"></a>

```python
backup_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}.

---

##### `exclude_volumes`<sup>Optional</sup> <a name="exclude_volumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes"></a>

```python
exclude_volumes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_volumes`<sup>Optional</sup> <a name="include_volumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes"></a>

```python
include_volumes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `protect_status`<sup>Optional</sup> <a name="protect_status" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus"></a>

```python
protect_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cbr_vault_v3#type CbrVaultV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CbrVaultV3BillingOutputReference <a name="CbrVaultV3BillingOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3BillingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode">reset_charging_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType">reset_cloud_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel">reset_consistent_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl">reset_console_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo">reset_extra_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay">reset_is_auto_pay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew">reset_is_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum">reset_period_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType">reset_period_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_charging_mode` <a name="reset_charging_mode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode"></a>

```python
def reset_charging_mode() -> None
```

##### `reset_cloud_type` <a name="reset_cloud_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType"></a>

```python
def reset_cloud_type() -> None
```

##### `reset_consistent_level` <a name="reset_consistent_level" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel"></a>

```python
def reset_consistent_level() -> None
```

##### `reset_console_url` <a name="reset_console_url" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl"></a>

```python
def reset_console_url() -> None
```

##### `reset_extra_info` <a name="reset_extra_info" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo"></a>

```python
def reset_extra_info() -> None
```

##### `reset_is_auto_pay` <a name="reset_is_auto_pay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay"></a>

```python
def reset_is_auto_pay() -> None
```

##### `reset_is_auto_renew` <a name="reset_is_auto_renew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew"></a>

```python
def reset_is_auto_renew() -> None
```

##### `reset_period_num` <a name="reset_period_num" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum"></a>

```python
def reset_period_num() -> None
```

##### `reset_period_type` <a name="reset_period_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType"></a>

```python
def reset_period_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated">allocated</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene">frozen_scene</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode">spec_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit">storage_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used">used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput">charging_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput">cloud_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput">consistent_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput">console_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput">extra_info_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput">is_auto_pay_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput">is_auto_renew_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput">period_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput">period_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput">protect_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode">charging_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType">cloud_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel">consistent_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl">console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo">extra_info</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay">is_auto_pay</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew">is_auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum">period_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType">protect_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated`<sup>Required</sup> <a name="allocated" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated"></a>

```python
allocated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frozen_scene`<sup>Required</sup> <a name="frozen_scene" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene"></a>

```python
frozen_scene: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `spec_code`<sup>Required</sup> <a name="spec_code" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode"></a>

```python
spec_code: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_unit`<sup>Required</sup> <a name="storage_unit" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit"></a>

```python
storage_unit: str
```

- *Type:* str

---

##### `used`<sup>Required</sup> <a name="used" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used"></a>

```python
used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charging_mode_input`<sup>Optional</sup> <a name="charging_mode_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput"></a>

```python
charging_mode_input: str
```

- *Type:* str

---

##### `cloud_type_input`<sup>Optional</sup> <a name="cloud_type_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput"></a>

```python
cloud_type_input: str
```

- *Type:* str

---

##### `consistent_level_input`<sup>Optional</sup> <a name="consistent_level_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput"></a>

```python
consistent_level_input: str
```

- *Type:* str

---

##### `console_url_input`<sup>Optional</sup> <a name="console_url_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput"></a>

```python
console_url_input: str
```

- *Type:* str

---

##### `extra_info_input`<sup>Optional</sup> <a name="extra_info_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput"></a>

```python
extra_info_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_auto_pay_input`<sup>Optional</sup> <a name="is_auto_pay_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput"></a>

```python
is_auto_pay_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_renew_input`<sup>Optional</sup> <a name="is_auto_renew_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput"></a>

```python
is_auto_renew_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `period_num_input`<sup>Optional</sup> <a name="period_num_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput"></a>

```python
period_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type_input`<sup>Optional</sup> <a name="period_type_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput"></a>

```python
period_type_input: str
```

- *Type:* str

---

##### `protect_type_input`<sup>Optional</sup> <a name="protect_type_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput"></a>

```python
protect_type_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charging_mode`<sup>Required</sup> <a name="charging_mode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode"></a>

```python
charging_mode: str
```

- *Type:* str

---

##### `cloud_type`<sup>Required</sup> <a name="cloud_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType"></a>

```python
cloud_type: str
```

- *Type:* str

---

##### `consistent_level`<sup>Required</sup> <a name="consistent_level" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel"></a>

```python
consistent_level: str
```

- *Type:* str

---

##### `console_url`<sup>Required</sup> <a name="console_url" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl"></a>

```python
console_url: str
```

- *Type:* str

---

##### `extra_info`<sup>Required</sup> <a name="extra_info" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo"></a>

```python
extra_info: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_auto_pay`<sup>Required</sup> <a name="is_auto_pay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay"></a>

```python
is_auto_pay: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_auto_renew`<sup>Required</sup> <a name="is_auto_renew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew"></a>

```python
is_auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `period_num`<sup>Required</sup> <a name="period_num" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum"></a>

```python
period_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `protect_type`<sup>Required</sup> <a name="protect_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType"></a>

```python
protect_type: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue"></a>

```python
internal_value: CbrVaultV3Billing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---


### CbrVaultV3BindRulesList <a name="CbrVaultV3BindRulesList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3BindRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CbrVaultV3BindRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CbrVaultV3BindRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]]

---


### CbrVaultV3BindRulesOutputReference <a name="CbrVaultV3BindRulesOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3BindRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CbrVaultV3BindRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>]

---


### CbrVaultV3ResourceList <a name="CbrVaultV3ResourceList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3ResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CbrVaultV3ResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CbrVaultV3Resource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]]

---


### CbrVaultV3ResourceOutputReference <a name="CbrVaultV3ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cbr_vault_v3

cbrVaultV3.CbrVaultV3ResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount">reset_backup_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize">reset_backup_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes">reset_exclude_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes">reset_include_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus">reset_protect_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_count` <a name="reset_backup_count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount"></a>

```python
def reset_backup_count() -> None
```

##### `reset_backup_size` <a name="reset_backup_size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize"></a>

```python
def reset_backup_size() -> None
```

##### `reset_exclude_volumes` <a name="reset_exclude_volumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes"></a>

```python
def reset_exclude_volumes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_volumes` <a name="reset_include_volumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes"></a>

```python
def reset_include_volumes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_protect_status` <a name="reset_protect_status" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus"></a>

```python
def reset_protect_status() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput">backup_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput">backup_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput">exclude_volumes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput">include_volumes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput">protect_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount">backup_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize">backup_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes">exclude_volumes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes">include_volumes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus">protect_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_count_input`<sup>Optional</sup> <a name="backup_count_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput"></a>

```python
backup_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_size_input`<sup>Optional</sup> <a name="backup_size_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput"></a>

```python
backup_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_volumes_input`<sup>Optional</sup> <a name="exclude_volumes_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput"></a>

```python
exclude_volumes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_volumes_input`<sup>Optional</sup> <a name="include_volumes_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput"></a>

```python
include_volumes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protect_status_input`<sup>Optional</sup> <a name="protect_status_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput"></a>

```python
protect_status_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `backup_count`<sup>Required</sup> <a name="backup_count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount"></a>

```python
backup_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_size`<sup>Required</sup> <a name="backup_size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize"></a>

```python
backup_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_volumes`<sup>Required</sup> <a name="exclude_volumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes"></a>

```python
exclude_volumes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_volumes`<sup>Required</sup> <a name="include_volumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes"></a>

```python
include_volumes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protect_status`<sup>Required</sup> <a name="protect_status" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus"></a>

```python
protect_status: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CbrVaultV3Resource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>]

---



