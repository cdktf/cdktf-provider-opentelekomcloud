# `dataOpentelekomcloudDnsZoneV2` Submodule <a name="`dataOpentelekomcloudDnsZoneV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDnsZoneV2 <a name="DataOpentelekomcloudDnsZoneV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2 opentelekomcloud_dns_zone_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouddnszonev2"

dataopentelekomclouddnszonev2.NewDataOpentelekomcloudDnsZoneV2(scope Construct, id *string, config DataOpentelekomcloudDnsZoneV2Config) DataOpentelekomcloudDnsZoneV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config">DataOpentelekomcloudDnsZoneV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config">DataOpentelekomcloudDnsZoneV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetZoneType">ResetZoneType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetName"></a>

```go
func ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetZoneType` <a name="ResetZoneType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.resetZoneType"></a>

```go
func ResetZoneType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDnsZoneV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouddnszonev2"

dataopentelekomclouddnszonev2.DataOpentelekomcloudDnsZoneV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouddnszonev2"

dataopentelekomclouddnszonev2.DataOpentelekomcloudDnsZoneV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouddnszonev2"

dataopentelekomclouddnszonev2.DataOpentelekomcloudDnsZoneV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouddnszonev2"

dataopentelekomclouddnszonev2.DataOpentelekomcloudDnsZoneV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudDnsZoneV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudDnsZoneV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudDnsZoneV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDnsZoneV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.links">Links</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.masters">Masters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.serial">Serial</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.zoneTypeInput">ZoneTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.zoneType">ZoneType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.links"></a>

```go
func Links() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Masters`<sup>Required</sup> <a name="Masters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.masters"></a>

```go
func Masters() *[]*string
```

- *Type:* *[]*string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Serial`<sup>Required</sup> <a name="Serial" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.serial"></a>

```go
func Serial() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `ZoneTypeInput`<sup>Optional</sup> <a name="ZoneTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.zoneTypeInput"></a>

```go
func ZoneTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `ZoneType`<sup>Required</sup> <a name="ZoneType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.zoneType"></a>

```go
func ZoneType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDnsZoneV2Config <a name="DataOpentelekomcloudDnsZoneV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouddnszonev2"

&dataopentelekomclouddnszonev2.DataOpentelekomcloudDnsZoneV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Email: *string,
	Id: *string,
	Name: *string,
	Status: *string,
	Tags: *map[string]*string,
	Ttl: *f64,
	ZoneType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#description DataOpentelekomcloudDnsZoneV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#email DataOpentelekomcloudDnsZoneV2#email}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#id DataOpentelekomcloudDnsZoneV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#name DataOpentelekomcloudDnsZoneV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#status DataOpentelekomcloudDnsZoneV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#tags DataOpentelekomcloudDnsZoneV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#ttl DataOpentelekomcloudDnsZoneV2#ttl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.zoneType">ZoneType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#zone_type DataOpentelekomcloudDnsZoneV2#zone_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#description DataOpentelekomcloudDnsZoneV2#description}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#email DataOpentelekomcloudDnsZoneV2#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#id DataOpentelekomcloudDnsZoneV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#name DataOpentelekomcloudDnsZoneV2#name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#status DataOpentelekomcloudDnsZoneV2#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#tags DataOpentelekomcloudDnsZoneV2#tags}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#ttl DataOpentelekomcloudDnsZoneV2#ttl}.

---

##### `ZoneType`<sup>Optional</sup> <a name="ZoneType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsZoneV2.DataOpentelekomcloudDnsZoneV2Config.property.zoneType"></a>

```go
ZoneType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/dns_zone_v2#zone_type DataOpentelekomcloudDnsZoneV2#zone_type}.

---



