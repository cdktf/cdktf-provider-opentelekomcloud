# `dataOpentelekomcloudHssHostGroupsV5` Submodule <a name="`dataOpentelekomcloudHssHostGroupsV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssHostGroupsV5 <a name="DataOpentelekomcloudHssHostGroupsV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5 opentelekomcloud_hss_host_groups_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

dataopentelekomcloudhsshostgroupsv5.NewDataOpentelekomcloudHssHostGroupsV5(scope Construct, id *string, config DataOpentelekomcloudHssHostGroupsV5Config) DataOpentelekomcloudHssHostGroupsV5
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config">DataOpentelekomcloudHssHostGroupsV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config">DataOpentelekomcloudHssHostGroupsV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetHostNum">ResetHostNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetRiskHostNum">ResetRiskHostNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetUnprotectHostNum">ResetUnprotectHostNum</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetHostNum` <a name="ResetHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetHostNum"></a>

```go
func ResetHostNum()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetName"></a>

```go
func ResetName()
```

##### `ResetRiskHostNum` <a name="ResetRiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetRiskHostNum"></a>

```go
func ResetRiskHostNum()
```

##### `ResetUnprotectHostNum` <a name="ResetUnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetUnprotectHostNum"></a>

```go
func ResetUnprotectHostNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

dataopentelekomcloudhsshostgroupsv5.DataOpentelekomcloudHssHostGroupsV5_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

dataopentelekomcloudhsshostgroupsv5.DataOpentelekomcloudHssHostGroupsV5_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

dataopentelekomcloudhsshostgroupsv5.DataOpentelekomcloudHssHostGroupsV5_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

dataopentelekomcloudhsshostgroupsv5.DataOpentelekomcloudHssHostGroupsV5_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudHssHostGroupsV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudHssHostGroupsV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssHostGroupsV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groups">Groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList">DataOpentelekomcloudHssHostGroupsV5GroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNumInput">HostNumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNumInput">RiskHostNumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNumInput">UnprotectHostNumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNum">HostNum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNum">RiskHostNum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNum">UnprotectHostNum</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groups"></a>

```go
func Groups() DataOpentelekomcloudHssHostGroupsV5GroupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList">DataOpentelekomcloudHssHostGroupsV5GroupsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `HostNumInput`<sup>Optional</sup> <a name="HostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNumInput"></a>

```go
func HostNumInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RiskHostNumInput`<sup>Optional</sup> <a name="RiskHostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNumInput"></a>

```go
func RiskHostNumInput() *string
```

- *Type:* *string

---

##### `UnprotectHostNumInput`<sup>Optional</sup> <a name="UnprotectHostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNumInput"></a>

```go
func UnprotectHostNumInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `HostNum`<sup>Required</sup> <a name="HostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNum"></a>

```go
func HostNum() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RiskHostNum`<sup>Required</sup> <a name="RiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNum"></a>

```go
func RiskHostNum() *string
```

- *Type:* *string

---

##### `UnprotectHostNum`<sup>Required</sup> <a name="UnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNum"></a>

```go
func UnprotectHostNum() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssHostGroupsV5Config <a name="DataOpentelekomcloudHssHostGroupsV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

&dataopentelekomcloudhsshostgroupsv5.DataOpentelekomcloudHssHostGroupsV5Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	HostNum: *string,
	Id: *string,
	Name: *string,
	RiskHostNum: *string,
	UnprotectHostNum: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.hostNum">HostNum</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.riskHostNum">RiskHostNum</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.unprotectHostNum">UnprotectHostNum</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}.

---

##### `HostNum`<sup>Optional</sup> <a name="HostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.hostNum"></a>

```go
HostNum *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}.

---

##### `RiskHostNum`<sup>Optional</sup> <a name="RiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.riskHostNum"></a>

```go
RiskHostNum *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}.

---

##### `UnprotectHostNum`<sup>Optional</sup> <a name="UnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.unprotectHostNum"></a>

```go
UnprotectHostNum *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}.

---

### DataOpentelekomcloudHssHostGroupsV5Groups <a name="DataOpentelekomcloudHssHostGroupsV5Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

&dataopentelekomcloudhsshostgroupsv5.DataOpentelekomcloudHssHostGroupsV5Groups {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssHostGroupsV5GroupsList <a name="DataOpentelekomcloudHssHostGroupsV5GroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

dataopentelekomcloudhsshostgroupsv5.NewDataOpentelekomcloudHssHostGroupsV5GroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudHssHostGroupsV5GroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference <a name="DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhsshostgroupsv5"

dataopentelekomcloudhsshostgroupsv5.NewDataOpentelekomcloudHssHostGroupsV5GroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostIds">HostIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostNum">HostNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.riskHostNum">RiskHostNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.unprotectHostNum">UnprotectHostNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups">DataOpentelekomcloudHssHostGroupsV5Groups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostIds`<sup>Required</sup> <a name="HostIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostIds"></a>

```go
func HostIds() *[]*string
```

- *Type:* *[]*string

---

##### `HostNum`<sup>Required</sup> <a name="HostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostNum"></a>

```go
func HostNum() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RiskHostNum`<sup>Required</sup> <a name="RiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.riskHostNum"></a>

```go
func RiskHostNum() *f64
```

- *Type:* *f64

---

##### `UnprotectHostNum`<sup>Required</sup> <a name="UnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.unprotectHostNum"></a>

```go
func UnprotectHostNum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudHssHostGroupsV5Groups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups">DataOpentelekomcloudHssHostGroupsV5Groups</a>

---



