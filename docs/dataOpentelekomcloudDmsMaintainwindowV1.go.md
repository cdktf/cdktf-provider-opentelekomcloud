# `dataOpentelekomcloudDmsMaintainwindowV1` Submodule <a name="`dataOpentelekomcloudDmsMaintainwindowV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDmsMaintainwindowV1 <a name="DataOpentelekomcloudDmsMaintainwindowV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1 opentelekomcloud_dms_maintainwindow_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsmaintainwindowv1"

dataopentelekomclouddmsmaintainwindowv1.NewDataOpentelekomcloudDmsMaintainwindowV1(scope Construct, id *string, config DataOpentelekomcloudDmsMaintainwindowV1Config) DataOpentelekomcloudDmsMaintainwindowV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config">DataOpentelekomcloudDmsMaintainwindowV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config">DataOpentelekomcloudDmsMaintainwindowV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetBegin">ResetBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetSeq">ResetSeq</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBegin` <a name="ResetBegin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetBegin"></a>

```go
func ResetBegin()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetId"></a>

```go
func ResetId()
```

##### `ResetSeq` <a name="ResetSeq" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.resetSeq"></a>

```go
func ResetSeq()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsmaintainwindowv1"

dataopentelekomclouddmsmaintainwindowv1.DataOpentelekomcloudDmsMaintainwindowV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsmaintainwindowv1"

dataopentelekomclouddmsmaintainwindowv1.DataOpentelekomcloudDmsMaintainwindowV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsmaintainwindowv1"

dataopentelekomclouddmsmaintainwindowv1.DataOpentelekomcloudDmsMaintainwindowV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.beginInput">BeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.seqInput">SeqInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.begin">Begin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.seq">Seq</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BeginInput`<sup>Optional</sup> <a name="BeginInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.beginInput"></a>

```go
func BeginInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SeqInput`<sup>Optional</sup> <a name="SeqInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.seqInput"></a>

```go
func SeqInput() *f64
```

- *Type:* *f64

---

##### `Begin`<sup>Required</sup> <a name="Begin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.begin"></a>

```go
func Begin() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Seq`<sup>Required</sup> <a name="Seq" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.seq"></a>

```go
func Seq() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDmsMaintainwindowV1Config <a name="DataOpentelekomcloudDmsMaintainwindowV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsmaintainwindowv1"

&dataopentelekomclouddmsmaintainwindowv1.DataOpentelekomcloudDmsMaintainwindowV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Begin: *string,
	Default: interface{},
	End: *string,
	Id: *string,
	Seq: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.begin">Begin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#begin DataOpentelekomcloudDmsMaintainwindowV1#begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.default">Default</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#default DataOpentelekomcloudDmsMaintainwindowV1#default}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.end">End</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#end DataOpentelekomcloudDmsMaintainwindowV1#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#id DataOpentelekomcloudDmsMaintainwindowV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.seq">Seq</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#seq DataOpentelekomcloudDmsMaintainwindowV1#seq}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Begin`<sup>Optional</sup> <a name="Begin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.begin"></a>

```go
Begin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#begin DataOpentelekomcloudDmsMaintainwindowV1#begin}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#default DataOpentelekomcloudDmsMaintainwindowV1#default}.

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.end"></a>

```go
End *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#end DataOpentelekomcloudDmsMaintainwindowV1#end}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#id DataOpentelekomcloudDmsMaintainwindowV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Seq`<sup>Optional</sup> <a name="Seq" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsMaintainwindowV1.DataOpentelekomcloudDmsMaintainwindowV1Config.property.seq"></a>

```go
Seq *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_maintainwindow_v1#seq DataOpentelekomcloudDmsMaintainwindowV1#seq}.

---



