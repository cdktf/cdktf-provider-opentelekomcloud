# `data_opentelekomcloud_direct_connect_v2`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_direct_connect_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2).

# `dataOpentelekomcloudDirectConnectV2` Submodule <a name="`dataOpentelekomcloudDirectConnectV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDirectConnectV2 <a name="DataOpentelekomcloudDirectConnectV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2 opentelekomcloud_direct_connect_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddirectconnectv2"

dataopentelekomclouddirectconnectv2.NewDataOpentelekomcloudDirectConnectV2(scope Construct, id *string, config DataOpentelekomcloudDirectConnectV2Config) DataOpentelekomcloudDirectConnectV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config">DataOpentelekomcloudDirectConnectV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config">DataOpentelekomcloudDirectConnectV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetPortType">ResetPortType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetVlan">ResetVlan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetDeviceId"></a>

```go
func ResetDeviceId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetName"></a>

```go
func ResetName()
```

##### `ResetPortType` <a name="ResetPortType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetPortType"></a>

```go
func ResetPortType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetVlan` <a name="ResetVlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.resetVlan"></a>

```go
func ResetVlan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDirectConnectV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddirectconnectv2"

dataopentelekomclouddirectconnectv2.DataOpentelekomcloudDirectConnectV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddirectconnectv2"

dataopentelekomclouddirectconnectv2.DataOpentelekomcloudDirectConnectV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddirectconnectv2"

dataopentelekomclouddirectconnectv2.DataOpentelekomcloudDirectConnectV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddirectconnectv2"

dataopentelekomclouddirectconnectv2.DataOpentelekomcloudDirectConnectV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudDirectConnectV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudDirectConnectV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudDirectConnectV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDirectConnectV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.adminStateUp">AdminStateUp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applicant">Applicant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applyTime">ApplyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.buildingLineProductId">BuildingLineProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cableLabel">CableLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.chargeMode">ChargeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.hostingId">HostingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lagId">LagId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lastOnestopProductId">LastOnestopProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.mobile">Mobile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.onestopProductId">OnestopProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.orderId">OrderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerLocation">PeerLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerPortType">PeerPortType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerProvider">PeerProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodNum">PeriodNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodType">PeriodType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerStatus">ProviderStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.redundantId">RedundantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionId">RegionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.specCode">SpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vgwType">VgwType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidthInput">BandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceIdInput">DeviceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portTypeInput">PortTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlanInput">VlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidth">Bandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceId">DeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portType">PortType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.adminStateUp"></a>

```go
func AdminStateUp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Applicant`<sup>Required</sup> <a name="Applicant" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applicant"></a>

```go
func Applicant() *string
```

- *Type:* *string

---

##### `ApplyTime`<sup>Required</sup> <a name="ApplyTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.applyTime"></a>

```go
func ApplyTime() *string
```

- *Type:* *string

---

##### `BuildingLineProductId`<sup>Required</sup> <a name="BuildingLineProductId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.buildingLineProductId"></a>

```go
func BuildingLineProductId() *string
```

- *Type:* *string

---

##### `CableLabel`<sup>Required</sup> <a name="CableLabel" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.cableLabel"></a>

```go
func CableLabel() *string
```

- *Type:* *string

---

##### `ChargeMode`<sup>Required</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.chargeMode"></a>

```go
func ChargeMode() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `HostingId`<sup>Required</sup> <a name="HostingId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.hostingId"></a>

```go
func HostingId() *string
```

- *Type:* *string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.interfaceName"></a>

```go
func InterfaceName() *string
```

- *Type:* *string

---

##### `LagId`<sup>Required</sup> <a name="LagId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lagId"></a>

```go
func LagId() *string
```

- *Type:* *string

---

##### `LastOnestopProductId`<sup>Required</sup> <a name="LastOnestopProductId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.lastOnestopProductId"></a>

```go
func LastOnestopProductId() *string
```

- *Type:* *string

---

##### `Mobile`<sup>Required</sup> <a name="Mobile" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.mobile"></a>

```go
func Mobile() *string
```

- *Type:* *string

---

##### `OnestopProductId`<sup>Required</sup> <a name="OnestopProductId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.onestopProductId"></a>

```go
func OnestopProductId() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.orderId"></a>

```go
func OrderId() *string
```

- *Type:* *string

---

##### `PeerLocation`<sup>Required</sup> <a name="PeerLocation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerLocation"></a>

```go
func PeerLocation() *string
```

- *Type:* *string

---

##### `PeerPortType`<sup>Required</sup> <a name="PeerPortType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerPortType"></a>

```go
func PeerPortType() *string
```

- *Type:* *string

---

##### `PeerProvider`<sup>Required</sup> <a name="PeerProvider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.peerProvider"></a>

```go
func PeerProvider() *string
```

- *Type:* *string

---

##### `PeriodNum`<sup>Required</sup> <a name="PeriodNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodNum"></a>

```go
func PeriodNum() *f64
```

- *Type:* *f64

---

##### `PeriodType`<sup>Required</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.periodType"></a>

```go
func PeriodType() *f64
```

- *Type:* *f64

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `ProviderStatus`<sup>Required</sup> <a name="ProviderStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.providerStatus"></a>

```go
func ProviderStatus() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `RedundantId`<sup>Required</sup> <a name="RedundantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.redundantId"></a>

```go
func RedundantId() *string
```

- *Type:* *string

---

##### `RegionId`<sup>Required</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionId"></a>

```go
func RegionId() *string
```

- *Type:* *string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `SpecCode`<sup>Required</sup> <a name="SpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.specCode"></a>

```go
func SpecCode() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VgwType`<sup>Required</sup> <a name="VgwType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vgwType"></a>

```go
func VgwType() *string
```

- *Type:* *string

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidthInput"></a>

```go
func BandwidthInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceIdInput"></a>

```go
func DeviceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortTypeInput`<sup>Optional</sup> <a name="PortTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portTypeInput"></a>

```go
func PortTypeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlanInput"></a>

```go
func VlanInput() *f64
```

- *Type:* *f64

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.bandwidth"></a>

```go
func Bandwidth() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.deviceId"></a>

```go
func DeviceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortType`<sup>Required</sup> <a name="PortType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.portType"></a>

```go
func PortType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDirectConnectV2Config <a name="DataOpentelekomcloudDirectConnectV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddirectconnectv2"

&dataopentelekomclouddirectconnectv2.DataOpentelekomcloudDirectConnectV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bandwidth: *f64,
	Description: *string,
	DeviceId: *string,
	Id: *string,
	Location: *string,
	Name: *string,
	PortType: *string,
	Region: *string,
	Vlan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.bandwidth">Bandwidth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#bandwidth DataOpentelekomcloudDirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#description DataOpentelekomcloudDirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.deviceId">DeviceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#device_id DataOpentelekomcloudDirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#id DataOpentelekomcloudDirectConnectV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#location DataOpentelekomcloudDirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#name DataOpentelekomcloudDirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.portType">PortType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#port_type DataOpentelekomcloudDirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#region DataOpentelekomcloudDirectConnectV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.vlan">Vlan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#vlan DataOpentelekomcloudDirectConnectV2#vlan}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.bandwidth"></a>

```go
Bandwidth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#bandwidth DataOpentelekomcloudDirectConnectV2#bandwidth}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#description DataOpentelekomcloudDirectConnectV2#description}.

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.deviceId"></a>

```go
DeviceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#device_id DataOpentelekomcloudDirectConnectV2#device_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#id DataOpentelekomcloudDirectConnectV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#location DataOpentelekomcloudDirectConnectV2#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#name DataOpentelekomcloudDirectConnectV2#name}.

---

##### `PortType`<sup>Optional</sup> <a name="PortType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.portType"></a>

```go
PortType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#port_type DataOpentelekomcloudDirectConnectV2#port_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#region DataOpentelekomcloudDirectConnectV2#region}.

---

##### `Vlan`<sup>Optional</sup> <a name="Vlan" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDirectConnectV2.DataOpentelekomcloudDirectConnectV2Config.property.vlan"></a>

```go
Vlan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/direct_connect_v2#vlan DataOpentelekomcloudDirectConnectV2#vlan}.

---



