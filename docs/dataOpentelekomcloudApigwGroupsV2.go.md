# `dataOpentelekomcloudApigwGroupsV2` Submodule <a name="`dataOpentelekomcloudApigwGroupsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudApigwGroupsV2 <a name="DataOpentelekomcloudApigwGroupsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2 opentelekomcloud_apigw_groups_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2(scope Construct, id *string, config DataOpentelekomcloudApigwGroupsV2Config) DataOpentelekomcloudApigwGroupsV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config">DataOpentelekomcloudApigwGroupsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config">DataOpentelekomcloudApigwGroupsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudApigwGroupsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudApigwGroupsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudApigwGroupsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudApigwGroupsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudApigwGroupsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groups">Groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList">DataOpentelekomcloudApigwGroupsV2GroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groups"></a>

```go
func Groups() DataOpentelekomcloudApigwGroupsV2GroupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList">DataOpentelekomcloudApigwGroupsV2GroupsList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudApigwGroupsV2Config <a name="DataOpentelekomcloudApigwGroupsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

&dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	GroupId: *string,
	Id: *string,
	Name: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#instance_id DataOpentelekomcloudApigwGroupsV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#group_id DataOpentelekomcloudApigwGroupsV2#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#id DataOpentelekomcloudApigwGroupsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#name DataOpentelekomcloudApigwGroupsV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#region DataOpentelekomcloudApigwGroupsV2#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#instance_id DataOpentelekomcloudApigwGroupsV2#instance_id}.

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#group_id DataOpentelekomcloudApigwGroupsV2#group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#id DataOpentelekomcloudApigwGroupsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#name DataOpentelekomcloudApigwGroupsV2#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/apigw_groups_v2#region DataOpentelekomcloudApigwGroupsV2#region}.

---

### DataOpentelekomcloudApigwGroupsV2Groups <a name="DataOpentelekomcloudApigwGroupsV2Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Groups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Groups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

&dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2Groups {

}
```


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironment <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironment" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

&dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment {

}
```


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

&dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable {

}
```


### DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains <a name="DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

&dataopentelekomcloudapigwgroupsv2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment">DataOpentelekomcloudApigwGroupsV2GroupsEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.variable"></a>

```go
func Variable() DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudApigwGroupsV2GroupsEnvironment
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironment">DataOpentelekomcloudApigwGroupsV2GroupsEnvironment</a>

---


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference <a name="DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentVariable</a>

---


### DataOpentelekomcloudApigwGroupsV2GroupsList <a name="DataOpentelekomcloudApigwGroupsV2GroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2GroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudApigwGroupsV2GroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudApigwGroupsV2GroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudApigwGroupsV2GroupsOutputReference <a name="DataOpentelekomcloudApigwGroupsV2GroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2GroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudApigwGroupsV2GroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.isDefault">IsDefault</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.onSellStatus">OnSellStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.slDomain">SlDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.slDomains">SlDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.urlDomains">UrlDomains</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList">DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Groups">DataOpentelekomcloudApigwGroupsV2Groups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.environment"></a>

```go
func Environment() DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList">DataOpentelekomcloudApigwGroupsV2GroupsEnvironmentList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.isDefault"></a>

```go
func IsDefault() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnSellStatus`<sup>Required</sup> <a name="OnSellStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.onSellStatus"></a>

```go
func OnSellStatus() *f64
```

- *Type:* *f64

---

##### `SlDomain`<sup>Required</sup> <a name="SlDomain" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.slDomain"></a>

```go
func SlDomain() *string
```

- *Type:* *string

---

##### `SlDomains`<sup>Required</sup> <a name="SlDomains" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.slDomains"></a>

```go
func SlDomains() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UrlDomains`<sup>Required</sup> <a name="UrlDomains" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.urlDomains"></a>

```go
func UrlDomains() DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList">DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudApigwGroupsV2Groups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2Groups">DataOpentelekomcloudApigwGroupsV2Groups</a>

---


### DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList <a name="DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference <a name="DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudapigwgroupsv2"

dataopentelekomcloudapigwgroupsv2.NewDataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.cnameStatus">CnameStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.isHasTrustedRootCa">IsHasTrustedRootCa</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.minSslVersion">MinSslVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.sslId">SslId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.sslName">SslName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.verifiedClientCertificateEnabled">VerifiedClientCertificateEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains">DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CnameStatus`<sup>Required</sup> <a name="CnameStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.cnameStatus"></a>

```go
func CnameStatus() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsHasTrustedRootCa`<sup>Required</sup> <a name="IsHasTrustedRootCa" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.isHasTrustedRootCa"></a>

```go
func IsHasTrustedRootCa() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MinSslVersion`<sup>Required</sup> <a name="MinSslVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.minSslVersion"></a>

```go
func MinSslVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SslId`<sup>Required</sup> <a name="SslId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.sslId"></a>

```go
func SslId() *string
```

- *Type:* *string

---

##### `SslName`<sup>Required</sup> <a name="SslName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.sslName"></a>

```go
func SslName() *string
```

- *Type:* *string

---

##### `VerifiedClientCertificateEnabled`<sup>Required</sup> <a name="VerifiedClientCertificateEnabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.verifiedClientCertificateEnabled"></a>

```go
func VerifiedClientCertificateEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudApigwGroupsV2.DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains">DataOpentelekomcloudApigwGroupsV2GroupsUrlDomains</a>

---



